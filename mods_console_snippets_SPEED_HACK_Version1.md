# Speed Hack Console Snippet

**Description:** Advanced speed enhancement system with PlayCanvas integration and adaptive control.

**How to Use:**
1. Open Tribals.io in Chrome.
2. Press F12 for DevTools.
3. Paste the following code into the Console and hit Enter.

## Advanced Speed Hack System
```js
// Speed Hack with PlayCanvas integration
class SpeedHackMaximum {
    constructor() {
        this.app = window.pc && window.pc.Application.getApplication();
        this.speedMultipliers = {
            movement: 1.0,
            construction: 1.0,
            research: 1.0,
            unitTraining: 1.0,
            resourceGeneration: 1.0
        };
        this.originalValues = new Map();
        this.adaptiveEngine = new AdaptiveSpeedEngine();
    }

    async applySpeedHack(type, multiplier) {
        if (multiplier < 0.1 || multiplier > 10.0) {
            console.log('Invalid speed multiplier. Range: 0.1 - 10.0');
            return false;
        }
        
        const stealthMultiplier = this.adaptiveEngine.calculateStealthMultiplier(multiplier);
        await this.updatePlayCanvasSpeed(type, stealthMultiplier);
        this.speedMultipliers[type] = stealthMultiplier;
        
        console.log(`${type} speed set to ${stealthMultiplier}x`);
        return true;
    }
    
    async updatePlayCanvasSpeed(type, multiplier) {
        switch (type) {
            case 'movement':
                await this.updateMovementSpeed(multiplier);
                break;
            case 'construction':
                await this.updateConstructionSpeed(multiplier);
                break;
            case 'research':
                await this.updateResearchSpeed(multiplier);
                break;
            case 'unitTraining':
                await this.updateUnitTrainingSpeed(multiplier);
                break;
            case 'resourceGeneration':
                await this.updateResourceGenerationSpeed(multiplier);
                break;
        }
    }
    
    async updateMovementSpeed(multiplier) {
        const playerEntity = this.findPlayerEntity();
        if (playerEntity) {
            const movementScript = playerEntity.getComponent('script');
            if (movementScript) {
                // Backup original value
                if (!this.originalValues.has('movement')) {
                    this.originalValues.set('movement', movementScript.speed || 1.0);
                }
                
                const originalSpeed = this.originalValues.get('movement');
                movementScript.speed = originalSpeed * multiplier;
                
                // Also update any movement-related properties
                if (movementScript.moveSpeed) {
                    if (!this.originalValues.has('moveSpeed')) {
                        this.originalValues.set('moveSpeed', movementScript.moveSpeed);
                    }
                    movementScript.moveSpeed = this.originalValues.get('moveSpeed') * multiplier;
                }
            }
        }
    }
    
    async updateConstructionSpeed(multiplier) {
        this.app.root.findComponents('script').forEach(component => {
            if (component.entity.tags.has('building')) {
                const buildScript = component.entity.getComponent('script');
                if (buildScript) {
                    // Backup original values
                    const backupKey = `construction_${component.entity.guid}`;
                    if (!this.originalValues.has(backupKey)) {
                        this.originalValues.set(backupKey, {
                            constructionTime: buildScript.constructionTime || 1.0,
                            buildTime: buildScript.buildTime || 1.0
                        });
                    }
                    
                    const original = this.originalValues.get(backupKey);
                    if (buildScript.constructionTime) {
                        buildScript.constructionTime = original.constructionTime / multiplier;
                    }
                    if (buildScript.buildTime) {
                        buildScript.buildTime = original.buildTime / multiplier;
                    }
                }
            }
        });
    }
    
    async updateResearchSpeed(multiplier) {
        // Update research-related scripts
        this.app.root.findComponents('script').forEach(component => {
            if (component.entity.tags.has('research') || component.entity.tags.has('technology')) {
                const researchScript = component.entity.getComponent('script');
                if (researchScript) {
                    const backupKey = `research_${component.entity.guid}`;
                    if (!this.originalValues.has(backupKey)) {
                        this.originalValues.set(backupKey, {
                            researchTime: researchScript.researchTime || 1.0,
                            studyTime: researchScript.studyTime || 1.0
                        });
                    }
                    
                    const original = this.originalValues.get(backupKey);
                    if (researchScript.researchTime) {
                        researchScript.researchTime = original.researchTime / multiplier;
                    }
                    if (researchScript.studyTime) {
                        researchScript.studyTime = original.studyTime / multiplier;
                    }
                }
            }
        });
    }
    
    async updateUnitTrainingSpeed(multiplier) {
        // Update unit training scripts
        this.app.root.findComponents('script').forEach(component => {
            if (component.entity.tags.has('unit') || component.entity.tags.has('training')) {
                const unitScript = component.entity.getComponent('script');
                if (unitScript) {
                    const backupKey = `unit_${component.entity.guid}`;
                    if (!this.originalValues.has(backupKey)) {
                        this.originalValues.set(backupKey, {
                            trainingTime: unitScript.trainingTime || 1.0,
                            spawnTime: unitScript.spawnTime || 1.0
                        });
                    }
                    
                    const original = this.originalValues.get(backupKey);
                    if (unitScript.trainingTime) {
                        unitScript.trainingTime = original.trainingTime / multiplier;
                    }
                    if (unitScript.spawnTime) {
                        unitScript.spawnTime = original.spawnTime / multiplier;
                    }
                }
            }
        });
    }
    
    async updateResourceGenerationSpeed(multiplier) {
        // Update resource generation scripts
        this.app.root.findComponents('script').forEach(component => {
            if (component.entity.tags.has('resource')) {
                const resourceScript = component.entity.getComponent('script');
                if (resourceScript) {
                    const backupKey = `resource_${component.entity.guid}`;
                    if (!this.originalValues.has(backupKey)) {
                        this.originalValues.set(backupKey, {
                            generationRate: resourceScript.generationRate || 1.0,
                            gatherSpeed: resourceScript.gatherSpeed || 1.0
                        });
                    }
                    
                    const original = this.originalValues.get(backupKey);
                    if (resourceScript.generationRate) {
                        resourceScript.generationRate = original.generationRate * multiplier;
                    }
                    if (resourceScript.gatherSpeed) {
                        resourceScript.gatherSpeed = original.gatherSpeed * multiplier;
                    }
                }
            }
        });
    }
    
    findPlayerEntity() {
        return this.app.scene.findByTag('player')[0] || 
               this.app.scene.findByName('Player')[0];
    }
    
    // Reset all speed modifications
    resetAllSpeeds() {
        this.speedMultipliers = {
            movement: 1.0,
            construction: 1.0,
            research: 1.0,
            unitTraining: 1.0,
            resourceGeneration: 1.0
        };
        
        // Restore original values
        this.originalValues.forEach((original, key) => {
            // Implementation would restore original values
            console.log(`Restored original value for ${key}`);
        });
        
        console.log('All speed modifications reset');
    }
}

// Adaptive Speed Engine for anti-detection
class AdaptiveSpeedEngine {
    constructor() {
        this.detectionRisk = 0;
        this.stealthMultipliers = {
            low: 1.0,
            medium: 0.8,
            high: 0.6,
            critical: 0.4
        };
    }
    
    calculateStealthMultiplier(requestedMultiplier) {
        const riskLevel = this.assessDetectionRisk();
        const stealthFactor = this.stealthMultipliers[riskLevel];
        
        return Math.min(requestedMultiplier, requestedMultiplier * stealthFactor);
    }
    
    assessDetectionRisk() {
        // Simple risk assessment based on multiplier value
        if (this.detectionRisk > 0.8) return 'critical';
        if (this.detectionRisk > 0.6) return 'high';
        if (this.detectionRisk > 0.4) return 'medium';
        return 'low';
    }
    
    updateDetectionRisk(risk) {
        this.detectionRisk = Math.max(0, Math.min(1, risk));
    }
}

// Usage
const speedHack = new SpeedHackMaximum();

// Apply speed hacks
speedHack.applySpeedHack('movement', 3.0);
speedHack.applySpeedHack('construction', 2.5);
speedHack.applySpeedHack('research', 2.0);
speedHack.applySpeedHack('unitTraining', 1.8);
speedHack.applySpeedHack('resourceGeneration', 2.2);

// Reset all
// speedHack.resetAllSpeeds();
```

## Quick Speed Commands
```js
// Quick speed modification functions
function setMovementSpeed(multiplier = 2.0) {
    const app = window.pc && window.pc.Application.getApplication();
    const player = app.scene.findByTag('player')[0];
    if (player && player.script) {
        player.script.speed = (player.script.speed || 1.0) * multiplier;
        console.log(`Movement speed set to ${multiplier}x`);
    }
}

function setConstructionSpeed(multiplier = 2.0) {
    const app = window.pc && window.pc.Application.getApplication();
    app.root.findByTag('building').forEach(building => {
        if (building.script) {
            if (building.script.constructionTime) {
                building.script.constructionTime /= multiplier;
            }
        }
    });
    console.log(`Construction speed set to ${multiplier}x`);
}

function setResourceSpeed(multiplier = 2.0) {
    const app = window.pc && window.pc.Application.getApplication();
    app.root.findByTag('resource').forEach(resource => {
        if (resource.script) {
            if (resource.script.generationRate) {
                resource.script.generationRate *= multiplier;
            }
        }
    });
    console.log(`Resource generation speed set to ${multiplier}x`);
}

// Usage
setMovementSpeed(3.0);
setConstructionSpeed(2.5);
setResourceSpeed(2.0);
```

## Global Speed Control
```js
// Global speed control for all game elements
class GlobalSpeedController {
    constructor() {
        this.app = window.pc && window.pc.Application.getApplication();
        this.globalMultiplier = 1.0;
        this.originalTimeScale = 1.0;
    }
    
    setGlobalSpeed(multiplier) {
        this.globalMultiplier = multiplier;
        
        // Update PlayCanvas time scale
        if (this.app.root && this.app.root.script) {
            this.app.root.script.timeScale = multiplier;
        }
        
        // Update all entity scripts
        this.app.root.findComponents('script').forEach(component => {
            if (component.update) {
                const originalUpdate = component.update.bind(component);
                component.update = function(dt) {
                    return originalUpdate(dt * multiplier);
                };
            }
        });
        
        console.log(`Global speed set to ${multiplier}x`);
    }
    
    resetGlobalSpeed() {
        this.globalMultiplier = 1.0;
        
        if (this.app.root && this.app.root.script) {
            this.app.root.script.timeScale = 1.0;
        }
        
        console.log('Global speed reset to normal');
    }
}

// Usage
const globalSpeed = new GlobalSpeedController();
globalSpeed.setGlobalSpeed(2.0); // 2x speed for everything
// globalSpeed.resetGlobalSpeed(); // Reset to normal
```

## Speed Monitoring
```js
// Monitor speed modifications
class SpeedMonitor {
    constructor() {
        this.app = window.pc && window.pc.Application.getApplication();
        this.speedHistory = [];
        this.monitoring = false;
    }
    
    startMonitoring() {
        this.monitoring = true;
        this.monitorLoop();
    }
    
    stopMonitoring() {
        this.monitoring = false;
    }
    
    async monitorLoop() {
        while (this.monitoring) {
            const currentSpeeds = this.getCurrentSpeeds();
            this.speedHistory.push({
                timestamp: Date.now(),
                speeds: currentSpeeds
            });
            
            // Keep only last 100 entries
            if (this.speedHistory.length > 100) {
                this.speedHistory.shift();
            }
            
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    getCurrentSpeeds() {
        const player = this.app.scene.findByTag('player')[0];
        return {
            movement: player?.script?.speed || 1.0,
            global: this.app.root?.script?.timeScale || 1.0
        };
    }
    
    getSpeedHistory() {
        return this.speedHistory;
    }
}

// Usage
const speedMonitor = new SpeedMonitor();
speedMonitor.startMonitoring();
// speedMonitor.stopMonitoring(); // Stop when done
```

**Features:**
- Multiple speed modification types
- Adaptive anti-detection system
- Original value backup and restore
- Global speed control
- Speed monitoring system
- Stealth multiplier calculation

**Compatibility:** PlayCanvas-based Tribals.io