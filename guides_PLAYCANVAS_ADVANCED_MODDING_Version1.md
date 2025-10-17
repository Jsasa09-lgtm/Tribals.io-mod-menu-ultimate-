# PlayCanvas & Tribals.io: Advanced Modding Guide

Learn advanced PlayCanvas modding techniques for Tribals.io with anti-detection, performance optimization, and sophisticated automation.

---

## 1. Advanced PlayCanvas Integration

### 1.1 Deep PlayCanvas Hooks
```javascript
// Advanced PlayCanvas application hooks
class PlayCanvasHooks {
    constructor() {
        this.app = null;
        this.originalMethods = new Map();
        this.hooks = new Map();
        this.init();
    }
    
    async init() {
        await this.waitForPlayCanvas();
        this.app = window.pc.Application.getApplication();
        this.hookPlayCanvasApp();
        this.hookEntitySystem();
        this.hookScriptSystem();
    }
    
    async waitForPlayCanvas() {
        return new Promise((resolve) => {
            const checkPlayCanvas = () => {
                if (window.pc && window.pc.Application.getApplication()) {
                    resolve();
                } else {
                    setTimeout(checkPlayCanvas, 100);
                }
            };
            checkPlayCanvas();
        });
    }
    
    hookPlayCanvasApp() {
        // Hook into PlayCanvas application lifecycle
        this.hookMethod(this.app, 'update', this.onAppUpdate.bind(this));
        this.hookMethod(this.app, 'postrender', this.onAppPostRender.bind(this));
        this.hookMethod(this.app, 'prerender', this.onAppPreRender.bind(this));
    }
    
    hookEntitySystem() {
        // Override entity creation to track new entities
        const originalAddEntity = this.app.scene.addEntity;
        this.app.scene.addEntity = (entity) => {
            const result = originalAddEntity.call(this.app.scene, entity);
            this.onEntityAdded(entity);
            return result;
        };
        
        // Override entity removal to clean up tracking
        const originalRemoveEntity = this.app.scene.removeEntity;
        this.app.scene.removeEntity = (entity) => {
            this.onEntityRemoved(entity);
            return originalRemoveEntity.call(this.app.scene, entity);
        };
    }
    
    hookScriptSystem() {
        // Hook into PlayCanvas script component updates
        this.app.root.findComponents('script').forEach(component => {
            this.hookScriptComponent(component);
        });
    }
    
    hookScriptComponent(component) {
        if (component.update) {
            const originalUpdate = component.update.bind(component);
            component.update = (dt) => {
                this.onScriptUpdate(component, dt);
                return originalUpdate(dt);
            };
        }
    }
    
    hookMethod(obj, methodName, hookFunction) {
        const originalMethod = obj[methodName];
        if (originalMethod) {
            this.originalMethods.set(`${obj.constructor.name}.${methodName}`, originalMethod);
            obj[methodName] = function(...args) {
                hookFunction.apply(this, args);
                return originalMethod.apply(this, args);
            };
        }
    }
    
    onAppUpdate(dt) {
        // Custom update logic
    }
    
    onAppPostRender() {
        // Custom post-render logic
    }
    
    onAppPreRender() {
        // Custom pre-render logic
    }
    
    onEntityAdded(entity) {
        // Handle new entity
    }
    
    onEntityRemoved(entity) {
        // Handle removed entity
    }
    
    onScriptUpdate(component, dt) {
        // Handle script updates
    }
}
```

### 1.2 Advanced Entity Tracking
```javascript
// Sophisticated entity tracking system
class AdvancedEntityTracker {
    constructor() {
        this.app = null;
        this.trackedEntities = new Map();
        this.entityFilters = {
            enemies: ['enemy', 'hostile', 'opponent'],
            resources: ['wood', 'stone', 'gold', 'resource', 'collectible'],
            buildings: ['building', 'structure', 'construction'],
            players: ['player', 'ally', 'friendly']
        };
        this.trackingCallbacks = new Map();
    }
    
    async init() {
        await this.waitForPlayCanvas();
        this.app = window.pc.Application.getApplication();
        this.startTracking();
    }
    
    startTracking() {
        // Track all existing entities
        this.scanExistingEntities();
        
        // Hook into entity creation/removal
        this.app.on('entityAdded', this.onEntityAdded.bind(this));
        this.app.on('entityRemoved', this.onEntityRemoved.bind(this));
        
        // Update tracking on each frame
        this.app.on('update', this.updateTracking.bind(this));
    }
    
    scanExistingEntities() {
        const scene = this.app.scene;
        scene.findComponents('script').forEach(component => {
            this.analyzeEntity(component.entity);
        });
    }
    
    analyzeEntity(entity) {
        const tags = entity.tags.list();
        const position = entity.getPosition();
        const guid = entity.guid;
        
        // Categorize entity based on tags
        Object.keys(this.entityFilters).forEach(category => {
            const categoryTags = this.entityFilters[category];
            if (categoryTags.some(tag => tags.includes(tag))) {
                const entityData = {
                    entity: entity,
                    category: category,
                    position: position,
                    tags: tags,
                    lastUpdate: Date.now(),
                    properties: this.extractEntityProperties(entity)
                };
                
                this.trackedEntities.set(guid, entityData);
                this.notifyCallbacks('entityAdded', entityData);
            }
        });
    }
    
    extractEntityProperties(entity) {
        const properties = {};
        
        // Extract common properties
        if (entity.script) {
            properties.script = entity.script;
        }
        
        if (entity.model) {
            properties.model = entity.model;
        }
        
        if (entity.rigidbody) {
            properties.rigidbody = entity.rigidbody;
        }
        
        return properties;
    }
    
    updateTracking() {
        this.trackedEntities.forEach((entityData, guid) => {
            const currentPosition = entityData.entity.getPosition();
            const positionChanged = !this.positionsEqual(entityData.position, currentPosition);
            
            if (positionChanged) {
                entityData.position = currentPosition;
                entityData.lastUpdate = Date.now();
                this.notifyCallbacks('entityMoved', entityData);
            }
        });
    }
    
    positionsEqual(pos1, pos2) {
        return Math.abs(pos1.x - pos2.x) < 0.001 && 
               Math.abs(pos1.y - pos2.y) < 0.001 && 
               Math.abs(pos1.z - pos2.z) < 0.001;
    }
    
    onEntityAdded(entity) {
        this.analyzeEntity(entity);
    }
    
    onEntityRemoved(entity) {
        const guid = entity.guid;
        if (this.trackedEntities.has(guid)) {
            const entityData = this.trackedEntities.get(guid);
            this.trackedEntities.delete(guid);
            this.notifyCallbacks('entityRemoved', entityData);
        }
    }
    
    addCallback(event, callback) {
        if (!this.trackingCallbacks.has(event)) {
            this.trackingCallbacks.set(event, []);
        }
        this.trackingCallbacks.get(event).push(callback);
    }
    
    notifyCallbacks(event, data) {
        if (this.trackingCallbacks.has(event)) {
            this.trackingCallbacks.get(event).forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    console.error('Callback error:', error);
                }
            });
        }
    }
    
    getEntitiesByCategory(category) {
        const entities = [];
        this.trackedEntities.forEach(entityData => {
            if (entityData.category === category) {
                entities.push(entityData);
            }
        });
        return entities;
    }
    
    getEntitiesByTag(tag) {
        const entities = [];
        this.trackedEntities.forEach(entityData => {
            if (entityData.tags.includes(tag)) {
                entities.push(entityData);
            }
        });
        return entities;
    }
}
```

---

## 2. Anti-Detection Techniques

### 2.1 Code Obfuscation
```javascript
// Advanced code obfuscation for PlayCanvas
class PlayCanvasObfuscator {
    constructor() {
        this.obfuscationMethods = [
            'variableRenaming',
            'stringEncryption',
            'controlFlowFlattening',
            'deadCodeInjection',
            'apiObfuscation'
        ];
        this.obfuscatedNames = new Map();
    }
    
    obfuscateCode(code) {
        let obfuscatedCode = code;
        
        // Apply all obfuscation methods
        this.obfuscationMethods.forEach(method => {
            obfuscatedCode = this[method](obfuscatedCode);
        });
        
        return obfuscatedCode;
    }
    
    variableRenaming(code) {
        // Rename variables to random names
        const variablePattern = /\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g;
        const variables = new Set();
        
        code.match(variablePattern).forEach(variable => {
            if (!this.isReservedWord(variable) && !variables.has(variable)) {
                variables.add(variable);
                const obfuscatedName = this.generateObfuscatedName();
                this.obfuscatedNames.set(variable, obfuscatedName);
            }
        });
        
        // Replace variables with obfuscated names
        this.obfuscatedNames.forEach((obfuscatedName, originalName) => {
            const regex = new RegExp(`\\b${originalName}\\b`, 'g');
            code = code.replace(regex, obfuscatedName);
        });
        
        return code;
    }
    
    stringEncryption(code) {
        // Encrypt string literals
        const stringPattern = /"([^"\\]|\\.)*"/g;
        return code.replace(stringPattern, (match) => {
            const stringContent = match.slice(1, -1);
            const encrypted = this.encryptString(stringContent);
            return `this.decryptString("${encrypted}")`;
        });
    }
    
    apiObfuscation(code) {
        // Obfuscate PlayCanvas API calls
        const playCanvasAPIs = [
            'pc.Application.getApplication',
            'app.root.findByTag',
            'app.root.findByName',
            'entity.getComponent',
            'entity.fire',
            'entity.getPosition',
            'entity.tags'
        ];
        
        playCanvasAPIs.forEach(api => {
            const obfuscated = this.generateObfuscatedName();
            const regex = new RegExp(api.replace(/\./g, '\\.'), 'g');
            code = code.replace(regex, obfuscated);
        });
        
        return code;
    }
    
    generateObfuscatedName() {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
        let name = '';
        const length = Math.floor(Math.random() * 8) + 4;
        
        for (let i = 0; i < length; i++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        return name;
    }
    
    isReservedWord(word) {
        const reservedWords = [
            'var', 'let', 'const', 'function', 'class', 'if', 'else', 'for', 'while',
            'return', 'this', 'new', 'typeof', 'instanceof', 'in', 'of', 'try', 'catch',
            'finally', 'throw', 'break', 'continue', 'switch', 'case', 'default'
        ];
        return reservedWords.includes(word);
    }
    
    encryptString(str) {
        // Simple XOR encryption
        let encrypted = '';
        const key = Math.floor(Math.random() * 256);
        
        for (let i = 0; i < str.length; i++) {
            encrypted += String.fromCharCode(str.charCodeAt(i) ^ key);
        }
        
        return btoa(encrypted + String.fromCharCode(key));
    }
    
    decryptString(encrypted) {
        // Simple XOR decryption
        const decoded = atob(encrypted);
        const key = decoded.charCodeAt(decoded.length - 1);
        let decrypted = '';
        
        for (let i = 0; i < decoded.length - 1; i++) {
            decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key);
        }
        
        return decrypted;
    }
}
```

### 2.2 Behavioral Randomization
```javascript
// Advanced behavioral randomization for anti-detection
class BehavioralRandomizer {
    constructor() {
        this.humanPatterns = this.loadHumanPatterns();
        this.randomizationEngine = new RandomizationEngine();
        this.behaviorHistory = [];
    }
    
    loadHumanPatterns() {
        return [
            {
                type: 'idle',
                duration: { min: 2000, max: 8000 },
                probability: 0.3,
                patterns: ['pause', 'micro_movement', 'direction_change']
            },
            {
                type: 'active',
                duration: { min: 1000, max: 5000 },
                probability: 0.5,
                patterns: ['continuous_action', 'burst_action', 'rhythmic_action']
            },
            {
                type: 'exploration',
                duration: { min: 3000, max: 10000 },
                probability: 0.2,
                patterns: ['random_movement', 'area_scan', 'resource_search']
            }
        ];
    }
    
    async randomizeBehavior(action) {
        // Select behavior pattern
        const pattern = this.selectBehaviorPattern();
        
        // Apply randomization
        const randomizedAction = this.randomizationEngine.applyPattern(action, pattern);
        
        // Add micro-delays
        await this.addMicroDelay();
        
        // Record behavior
        this.recordBehavior(pattern, randomizedAction);
        
        return randomizedAction;
    }
    
    selectBehaviorPattern() {
        const random = Math.random();
        let cumulative = 0;
        
        for (const pattern of this.humanPatterns) {
            cumulative += pattern.probability;
            if (random <= cumulative) {
                return pattern;
            }
        }
        
        return this.humanPatterns[0];
    }
    
    async addMicroDelay() {
        const delay = this.randomizationEngine.gaussian(150, 50);
        await new Promise(resolve => setTimeout(resolve, Math.max(50, delay)));
    }
    
    recordBehavior(pattern, action) {
        this.behaviorHistory.push({
            pattern: pattern.type,
            action: action,
            timestamp: Date.now()
        });
        
        // Keep only last 100 behaviors
        if (this.behaviorHistory.length > 100) {
            this.behaviorHistory.shift();
        }
    }
    
    getBehaviorStatistics() {
        const stats = {};
        this.behaviorHistory.forEach(behavior => {
            if (!stats[behavior.pattern]) {
                stats[behavior.pattern] = 0;
            }
            stats[behavior.pattern]++;
        });
        return stats;
    }
}

class RandomizationEngine {
    gaussian(mean, stdDev) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random();
        while(v === 0) v = Math.random();
        return mean + stdDev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    }
    
    applyPattern(action, pattern) {
        // Apply pattern-specific randomization
        switch (pattern.type) {
            case 'idle':
                return this.applyIdlePattern(action, pattern);
            case 'active':
                return this.applyActivePattern(action, pattern);
            case 'exploration':
                return this.applyExplorationPattern(action, pattern);
            default:
                return action;
        }
    }
    
    applyIdlePattern(action, pattern) {
        // Add idle-like variations
        const variation = Math.random() * 0.3 + 0.85; // 85-115% of original
        return {
            ...action,
            intensity: action.intensity * variation,
            duration: action.duration * variation
        };
    }
    
    applyActivePattern(action, pattern) {
        // Add active-like variations
        const variation = Math.random() * 0.4 + 0.8; // 80-120% of original
        return {
            ...action,
            intensity: action.intensity * variation,
            duration: action.duration * variation
        };
    }
    
    applyExplorationPattern(action, pattern) {
        // Add exploration-like variations
        const variation = Math.random() * 0.5 + 0.75; // 75-125% of original
        return {
            ...action,
            intensity: action.intensity * variation,
            duration: action.duration * variation
        };
    }
}
```

---

## 3. Performance Optimization

### 3.1 Entity Pooling
```javascript
// Advanced entity pooling for performance
class PlayCanvasEntityPool {
    constructor() {
        this.pools = {
            players: [],
            resources: [],
            buildings: [],
            effects: []
        };
        this.maxPoolSize = 1000;
        this.creationCallbacks = new Map();
        this.resetCallbacks = new Map();
    }
    
    getEntity(type, createFn) {
        if (this.pools[type].length > 0) {
            const entity = this.pools[type].pop();
            this.resetEntity(entity, type);
            return entity;
        }
        
        return createFn ? createFn() : this.createEntity(type);
    }
    
    releaseEntity(entity, type) {
        if (this.pools[type].length < this.maxPoolSize) {
            this.resetEntity(entity, type);
            this.pools[type].push(entity);
        }
    }
    
    resetEntity(entity, type) {
        if (this.resetCallbacks.has(type)) {
            this.resetCallbacks.get(type)(entity);
        } else {
            this.defaultReset(entity);
        }
    }
    
    defaultReset(entity) {
        // Default reset logic
        if (entity.script) {
            // Reset script properties
            Object.keys(entity.script).forEach(key => {
                if (typeof entity.script[key] === 'number') {
                    entity.script[key] = 0;
                } else if (typeof entity.script[key] === 'boolean') {
                    entity.script[key] = false;
                }
            });
        }
        
        if (entity.model) {
            // Reset model properties
            entity.model.enabled = false;
        }
    }
    
    setCreationCallback(type, callback) {
        this.creationCallbacks.set(type, callback);
    }
    
    setResetCallback(type, callback) {
        this.resetCallbacks.set(type, callback);
    }
    
    createEntity(type) {
        if (this.creationCallbacks.has(type)) {
            return this.creationCallbacks.get(type)();
        }
        
        // Default entity creation
        return new pc.Entity();
    }
    
    getPoolStats() {
        const stats = {};
        Object.keys(this.pools).forEach(type => {
            stats[type] = {
                available: this.pools[type].length,
                maxSize: this.maxPoolSize
            };
        });
        return stats;
    }
}
```

### 3.2 Memory Management
```javascript
// Advanced memory management for PlayCanvas
class PlayCanvasMemoryManager {
    constructor() {
        this.allocatedObjects = new WeakMap();
        this.garbageCollector = new GarbageCollector();
        this.memoryThreshold = 50 * 1024 * 1024; // 50MB
        this.cleanupInterval = 30000; // 30 seconds
        this.startCleanupTimer();
    }
    
    allocate(size, type, object) {
        const allocation = {
            size,
            type,
            timestamp: Date.now(),
            object
        };
        
        this.allocatedObjects.set(object, allocation);
        this.checkMemoryThreshold();
        
        return allocation;
    }
    
    deallocate(object) {
        if (this.allocatedObjects.has(object)) {
            const allocation = this.allocatedObjects.get(object);
            this.allocatedObjects.delete(object);
            this.garbageCollector.scheduleCollection();
            return allocation;
        }
        return null;
    }
    
    checkMemoryThreshold() {
        const memoryUsage = this.getMemoryUsage();
        if (memoryUsage > this.memoryThreshold) {
            this.forceCleanup();
        }
    }
    
    getMemoryUsage() {
        if (performance.memory) {
            return performance.memory.usedJSHeapSize;
        }
        return 0;
    }
    
    forceCleanup() {
        console.log('Memory threshold exceeded, forcing cleanup');
        this.garbageCollector.forceCollection();
    }
    
    startCleanupTimer() {
        setInterval(() => {
            this.scheduledCleanup();
        }, this.cleanupInterval);
    }
    
    scheduledCleanup() {
        const memoryUsage = this.getMemoryUsage();
        if (memoryUsage > this.memoryThreshold * 0.8) {
            this.garbageCollector.scheduleCollection();
        }
    }
    
    getMemoryStats() {
        return {
            used: this.getMemoryUsage(),
            threshold: this.memoryThreshold,
            allocatedObjects: this.allocatedObjects.size
        };
    }
}

class GarbageCollector {
    constructor() {
        this.collectionScheduled = false;
        this.collectionInProgress = false;
    }
    
    scheduleCollection() {
        if (!this.collectionScheduled && !this.collectionInProgress) {
            this.collectionScheduled = true;
            setTimeout(() => {
                this.performCollection();
            }, 100);
        }
    }
    
    forceCollection() {
        this.performCollection();
    }
    
    performCollection() {
        if (this.collectionInProgress) return;
        
        this.collectionInProgress = true;
        this.collectionScheduled = false;
        
        try {
            // Force garbage collection if available
            if (window.gc) {
                window.gc();
            }
            
            // Clear any cached data
            this.clearCaches();
            
        } catch (error) {
            console.error('Garbage collection error:', error);
        } finally {
            this.collectionInProgress = false;
        }
    }
    
    clearCaches() {
        // Clear any application-specific caches
        if (window.caches) {
            caches.keys().then(cacheNames => {
                cacheNames.forEach(cacheName => {
                    caches.delete(cacheName);
                });
            });
        }
    }
}
```

---

## 4. Advanced Automation

### 4.1 Intelligent Resource Management
```javascript
// Advanced resource management system
class IntelligentResourceManager {
    constructor() {
        this.app = null;
        this.resourcePriorities = {
            wood: { weight: 0.3, minLevel: 1, maxDistance: 1000, value: 1 },
            stone: { weight: 0.4, minLevel: 2, maxDistance: 1500, value: 2 },
            gold: { weight: 0.3, minLevel: 3, maxDistance: 2000, value: 3 }
        };
        this.resourceHistory = [];
        this.predictionEngine = new ResourcePredictionEngine();
    }
    
    async init() {
        await this.waitForPlayCanvas();
        this.app = window.pc.Application.getApplication();
        this.startResourceMonitoring();
    }
    
    startResourceMonitoring() {
        setInterval(() => {
            this.updateResourceHistory();
            this.predictResourceAvailability();
        }, 5000);
    }
    
    updateResourceHistory() {
        const currentResources = this.getCurrentResources();
        this.resourceHistory.push({
            timestamp: Date.now(),
            resources: currentResources
        });
        
        // Keep only last 100 entries
        if (this.resourceHistory.length > 100) {
            this.resourceHistory.shift();
        }
    }
    
    getCurrentResources() {
        const resources = [];
        const scene = this.app.scene;
        
        scene.findComponents('script').forEach(component => {
            if (component.entity.tags.has('resource')) {
                const position = component.entity.getPosition();
                const resourceType = component.entity.tags.list().find(tag => 
                    ['wood', 'stone', 'gold'].includes(tag)
                );
                
                resources.push({
                    entity: component.entity,
                    type: resourceType,
                    position: position,
                    distance: this.calculateDistance(position),
                    value: this.calculateResourceValue(resourceType, position)
                });
            }
        });
        
        return resources;
    }
    
    calculateResourceValue(type, position) {
        const priority = this.resourcePriorities[type] || { value: 1 };
        const distance = this.calculateDistance(position);
        const distanceScore = Math.max(0, 1 - (distance / priority.maxDistance));
        
        return priority.value * distanceScore;
    }
    
    calculateDistance(position) {
        const player = this.app.scene.findByTag('player')[0];
        if (!player) return Infinity;
        
        const playerPos = player.getPosition();
        return Math.sqrt(
            Math.pow(position.x - playerPos.x, 2) + 
            Math.pow(position.z - playerPos.z, 2)
        );
    }
    
    predictResourceAvailability() {
        const predictions = this.predictionEngine.predict(this.resourceHistory);
        return predictions;
    }
    
    getOptimalResourceTarget() {
        const resources = this.getCurrentResources();
        if (resources.length === 0) return null;
        
        return resources.reduce((best, current) => {
            const bestScore = this.calculateResourceScore(best);
            const currentScore = this.calculateResourceScore(current);
            return currentScore > bestScore ? current : best;
        });
    }
    
    calculateResourceScore(resource) {
        const priority = this.resourcePriorities[resource.type] || { weight: 0.1 };
        const distanceScore = Math.max(0, 1 - (resource.distance / priority.maxDistance));
        const valueScore = resource.value / 10; // Normalize value
        
        return priority.weight * distanceScore * valueScore;
    }
}

class ResourcePredictionEngine {
    predict(history) {
        if (history.length < 10) return null;
        
        const predictions = {};
        const resourceTypes = ['wood', 'stone', 'gold'];
        
        resourceTypes.forEach(type => {
            const typeHistory = history.map(entry => 
                entry.resources.filter(r => r.type === type).length
            );
            
            predictions[type] = this.predictTrend(typeHistory);
        });
        
        return predictions;
    }
    
    predictTrend(data) {
        if (data.length < 3) return 0;
        
        // Simple linear regression
        const n = data.length;
        const sumX = (n * (n - 1)) / 2;
        const sumY = data.reduce((a, b) => a + b, 0);
        const sumXY = data.reduce((sum, y, x) => sum + x * y, 0);
        const sumXX = (n * (n - 1) * (2 * n - 1)) / 6;
        
        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
        return slope;
    }
}
```

---

## 5. Testing and Debugging

### 5.1 Advanced Testing Framework
```javascript
// Comprehensive testing framework for PlayCanvas mods
class PlayCanvasModTester {
    constructor() {
        this.tests = new Map();
        this.results = [];
        this.app = null;
    }
    
    async init() {
        await this.waitForPlayCanvas();
        this.app = window.pc.Application.getApplication();
    }
    
    addTest(name, testFunction) {
        this.tests.set(name, testFunction);
    }
    
    async runAllTests() {
        console.log('Starting PlayCanvas mod tests...');
        
        for (const [name, testFunction] of this.tests) {
            try {
                const result = await testFunction(this.app);
                this.results.push({
                    name,
                    passed: result.passed,
                    message: result.message,
                    duration: result.duration
                });
                
                console.log(`${name}: ${result.passed ? 'PASS' : 'FAIL'} - ${result.message}`);
            } catch (error) {
                this.results.push({
                    name,
                    passed: false,
                    message: error.message,
                    duration: 0
                });
                
                console.error(`${name}: ERROR - ${error.message}`);
            }
        }
        
        this.printSummary();
    }
    
    printSummary() {
        const passed = this.results.filter(r => r.passed).length;
        const total = this.results.length;
        
        console.log(`\nTest Summary: ${passed}/${total} tests passed`);
        
        this.results.forEach(result => {
            const status = result.passed ? '✓' : '✗';
            console.log(`${status} ${result.name}: ${result.message} (${result.duration}ms)`);
        });
    }
    
    // Predefined tests
    addPlayCanvasTests() {
        this.addTest('PlayCanvas App Available', async (app) => {
            const start = Date.now();
            const passed = app !== null && app.root !== null;
            return {
                passed,
                message: passed ? 'PlayCanvas app is available' : 'PlayCanvas app not found',
                duration: Date.now() - start
            };
        });
        
        this.addTest('Entity System Working', async (app) => {
            const start = Date.now();
            const entities = app.root.findByTag('player');
            const passed = Array.isArray(entities);
            return {
                passed,
                message: passed ? `Found ${entities.length} player entities` : 'Entity system not working',
                duration: Date.now() - start
            };
        });
        
        this.addTest('Script System Working', async (app) => {
            const start = Date.now();
            const scripts = app.root.findComponents('script');
            const passed = Array.isArray(scripts);
            return {
                passed,
                message: passed ? `Found ${scripts.length} script components` : 'Script system not working',
                duration: Date.now() - start
            };
        });
    }
}

// Usage example
const tester = new PlayCanvasModTester();
tester.init().then(() => {
    tester.addPlayCanvasTests();
    tester.runAllTests();
});
```

---

## 6. Best Practices

### 6.1 Code Organization
- **Modular Design**: Separate concerns into different classes
- **Error Handling**: Always wrap PlayCanvas calls in try-catch blocks
- **Resource Cleanup**: Properly clean up event listeners and timers
- **Performance Monitoring**: Track memory usage and performance metrics

### 6.2 Anti-Detection
- **Behavioral Patterns**: Mimic human behavior patterns
- **Timing Randomization**: Use random delays and intervals
- **Code Obfuscation**: Obfuscate sensitive code sections
- **Stealth Mode**: Implement stealth features that can be toggled

### 6.3 Testing
- **Unit Tests**: Test individual components
- **Integration Tests**: Test component interactions
- **Performance Tests**: Monitor performance impact
- **Stealth Tests**: Verify anti-detection effectiveness

---

## 7. Troubleshooting

### Common Issues
1. **PlayCanvas Not Loaded**: Wait for PlayCanvas to initialize
2. **Entity Not Found**: Check entity tags and names
3. **Script Errors**: Verify script component existence
4. **Performance Issues**: Monitor memory usage and optimize

### Debug Tools
- **Console Logging**: Use console.log for debugging
- **Performance Monitoring**: Track memory and CPU usage
- **Entity Inspector**: Inspect entity properties and components
- **Event Tracking**: Monitor PlayCanvas events

---

This advanced guide provides comprehensive techniques for sophisticated PlayCanvas modding in Tribals.io, focusing on anti-detection, performance optimization, and advanced automation features.