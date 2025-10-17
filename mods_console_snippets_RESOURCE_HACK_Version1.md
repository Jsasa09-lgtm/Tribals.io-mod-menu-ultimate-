# Resource Hack Console Snippet

**Description:** Advanced resource injection system with PlayCanvas integration and stealth mechanisms.

**How to Use:**
1. Open Tribals.io in Chrome.
2. Press F12 for DevTools.
3. Paste the following code into the Console and hit Enter.

## Advanced Resource Injection
```js
// Resource Hack with PlayCanvas integration
class ResourceHackUltra {
    constructor() {
        this.app = window.pc && window.pc.Application.getApplication();
        this.stealthMode = true;
        this.injectionHistory = [];
    }

    async injectResources(resourceType, amount) {
        const playerEntity = this.findPlayerEntity();
        if (!playerEntity) {
            console.log('Player entity not found');
            return false;
        }
        
        // Method 1: Direct script property modification
        const playerScript = playerEntity.getComponent('script');
        if (playerScript && playerScript.resources) {
            const originalAmount = playerScript.resources[resourceType] || 0;
            playerScript.resources[resourceType] = originalAmount + amount;
            playerScript.fire('resourceUpdate', { type: resourceType, amount: amount });
            
            this.logInjection(resourceType, amount, 'script_property');
            return true;
        }
        
        // Method 2: PlayCanvas event system
        this.app.fire('resourceInjection', {
            type: resourceType,
            amount: amount,
            player: playerEntity,
            timestamp: Date.now()
        });
        
        this.logInjection(resourceType, amount, 'event_system');
        return true;
    }
    
    findPlayerEntity() {
        return this.app.scene.findByTag('player')[0] || 
               this.app.scene.findByName('Player')[0];
    }
    
    logInjection(type, amount, method) {
        this.injectionHistory.push({
            type,
            amount,
            method,
            timestamp: Date.now()
        });
        
        if (this.stealthMode) {
            console.log(`[Stealth] Resources injected: ${type} +${amount}`);
        } else {
            console.log(`Resources injected: ${type} +${amount} via ${method}`);
        }
    }
    
    // Batch resource injection
    async injectAllResources(amounts = { wood: 999999, stone: 999999, gold: 999999 }) {
        const results = {};
        
        for (const [type, amount] of Object.entries(amounts)) {
            results[type] = await this.injectResources(type, amount);
        }
        
        return results;
    }
    
    // Stealth injection with randomization
    async stealthInject(resourceType, amount) {
        const randomDelay = Math.random() * 2000 + 500;
        await new Promise(resolve => setTimeout(resolve, randomDelay));
        
        const randomizedAmount = amount + Math.floor(Math.random() * 1000 - 500);
        return await this.injectResources(resourceType, randomizedAmount);
    }
}

// Usage
const resourceHack = new ResourceHackUltra();

// Inject specific resources
resourceHack.injectResources('wood', 50000);
resourceHack.injectResources('stone', 30000);
resourceHack.injectResources('gold', 10000);

// Inject all resources at once
resourceHack.injectAllResources();

// Stealth injection
resourceHack.stealthInject('wood', 999999);
```

## Quick Resource Commands
```js
// Quick resource injection functions
function quickWood(amount = 999999) {
    const app = window.pc && window.pc.Application.getApplication();
    const player = app.scene.findByTag('player')[0];
    if (player && player.script && player.script.resources) {
        player.script.resources.wood = amount;
        console.log(`Wood set to ${amount}`);
    }
}

function quickStone(amount = 999999) {
    const app = window.pc && window.pc.Application.getApplication();
    const player = app.scene.findByTag('player')[0];
    if (player && player.script && player.script.resources) {
        player.script.resources.stone = amount;
        console.log(`Stone set to ${amount}`);
    }
}

function quickGold(amount = 999999) {
    const app = window.pc && window.pc.Application.getApplication();
    const player = app.scene.findByTag('player')[0];
    if (player && player.script && player.script.resources) {
        player.script.resources.gold = amount;
        console.log(`Gold set to ${amount}`);
    }
}

function quickAll(amount = 999999) {
    quickWood(amount);
    quickStone(amount);
    quickGold(amount);
}

// Usage
quickAll(); // Set all resources to 999999
quickWood(50000); // Set wood to 50000
```

## Advanced Resource Manipulation
```js
// Advanced resource manipulation with anti-detection
class AdvancedResourceManipulator {
    constructor() {
        this.app = window.pc && window.pc.Application.getApplication();
        this.originalValues = new Map();
        this.manipulationHistory = [];
    }
    
    // Backup original values
    backupOriginalValues() {
        const player = this.findPlayerEntity();
        if (player && player.script && player.script.resources) {
            this.originalValues.set('wood', player.script.resources.wood || 0);
            this.originalValues.set('stone', player.script.resources.stone || 0);
            this.originalValues.set('gold', player.script.resources.gold || 0);
            console.log('Original values backed up');
        }
    }
    
    // Restore original values
    restoreOriginalValues() {
        const player = this.findPlayerEntity();
        if (player && player.script && player.script.resources) {
            player.script.resources.wood = this.originalValues.get('wood') || 0;
            player.script.resources.stone = this.originalValues.get('stone') || 0;
            player.script.resources.gold = this.originalValues.get('gold') || 0;
            console.log('Original values restored');
        }
    }
    
    // Gradual resource increase (less detectable)
    async gradualIncrease(resourceType, targetAmount, steps = 10) {
        const player = this.findPlayerEntity();
        if (!player || !player.script || !player.script.resources) return;
        
        const currentAmount = player.script.resources[resourceType] || 0;
        const increment = (targetAmount - currentAmount) / steps;
        
        for (let i = 0; i < steps; i++) {
            const newAmount = currentAmount + (increment * (i + 1));
            player.script.resources[resourceType] = Math.floor(newAmount);
            
            // Random delay between increments
            const delay = Math.random() * 1000 + 500;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        console.log(`${resourceType} gradually increased to ${targetAmount}`);
    }
    
    findPlayerEntity() {
        return this.app.scene.findByTag('player')[0] || 
               this.app.scene.findByName('Player')[0];
    }
}

// Usage
const resourceManipulator = new AdvancedResourceManipulator();
resourceManipulator.backupOriginalValues();
resourceManipulator.gradualIncrease('wood', 999999, 20);
```

## Resource Monitoring
```js
// Monitor resource changes
class ResourceMonitor {
    constructor() {
        this.app = window.pc && window.pc.Application.getApplication();
        this.lastResources = {};
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
            const currentResources = this.getCurrentResources();
            this.checkForChanges(currentResources);
            this.lastResources = { ...currentResources };
            
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    getCurrentResources() {
        const player = this.app.scene.findByTag('player')[0];
        if (player && player.script && player.script.resources) {
            return {
                wood: player.script.resources.wood || 0,
                stone: player.script.resources.stone || 0,
                gold: player.script.resources.gold || 0
            };
        }
        return {};
    }
    
    checkForChanges(current) {
        for (const [resource, amount] of Object.entries(current)) {
            const lastAmount = this.lastResources[resource] || 0;
            const change = amount - lastAmount;
            
            if (change !== 0) {
                console.log(`${resource}: ${lastAmount} → ${amount} (${change > 0 ? '+' : ''}${change})`);
            }
        }
    }
}

// Usage
const monitor = new ResourceMonitor();
monitor.startMonitoring();
// monitor.stopMonitoring(); // Stop when done
```

**Features:**
- Multiple injection methods
- Stealth mode with randomization
- Batch resource injection
- Gradual increase for anti-detection
- Resource monitoring system
- Backup and restore functionality

**Compatibility:** PlayCanvas-based Tribals.io