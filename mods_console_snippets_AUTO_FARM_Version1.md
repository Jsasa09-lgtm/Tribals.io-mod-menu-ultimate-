# Auto-Farm Console Snippet

**Description:** Advanced auto-farming system with PlayCanvas integration and human behavior simulation.

**How to Use:**
1. Open Tribals.io in Chrome.
2. Press F12 for DevTools.
3. Paste the following code into the Console and hit Enter.

## Basic Auto-Farm
```js
// Auto-Farm with PlayCanvas integration
class AdvancedAutoFarm {
    constructor() {
        this.app = window.pc && window.pc.Application.getApplication();
        this.resourcePriorities = {
            wood: { weight: 0.3, minLevel: 1, maxDistance: 1000 },
            stone: { weight: 0.4, minLevel: 2, maxDistance: 1500 },
            gold: { weight: 0.3, minLevel: 3, maxDistance: 2000 }
        };
        this.isActive = false;
    }

    async startFarming() {
        this.isActive = true;
        this.app.on('update', this.onPlayCanvasUpdate.bind(this));
        
        while (this.isActive) {
            const targets = await this.scanForPlayCanvasResources();
            const optimalTarget = this.calculateOptimalTarget(targets);
            
            if (optimalTarget) {
                await this.collectPlayCanvasResource(optimalTarget);
                await this.randomDelay(1000, 5000);
            }
        }
    }
    
    async scanForPlayCanvasResources() {
        const scene = this.app.scene;
        const resources = [];
        
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
                    distance: this.calculateDistance(position)
                });
            }
        });
        
        return resources;
    }
    
    async collectPlayCanvasResource(target) {
        const clickEvent = new pc.MouseEvent('click', {
            x: target.position.x,
            y: target.position.y,
            button: pc.MOUSEBUTTON_LEFT
        });
        
        target.entity.fire('mousedown', clickEvent);
        target.entity.fire('mouseup', clickEvent);
    }
    
    calculateOptimalTarget(targets) {
        if (targets.length === 0) return null;
        
        return targets.reduce((best, current) => {
            const bestScore = this.calculateScore(best);
            const currentScore = this.calculateScore(current);
            return currentScore > bestScore ? current : best;
        });
    }
    
    calculateScore(target) {
        const priority = this.resourcePriorities[target.type] || { weight: 0.1 };
        const distanceScore = Math.max(0, 1 - (target.distance / priority.maxDistance));
        return priority.weight * distanceScore;
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
    
    async randomDelay(min, max) {
        const delay = Math.random() * (max - min) + min;
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

// Usage
const autoFarm = new AdvancedAutoFarm();
autoFarm.startFarming();
```

## Quick Start Auto-Farm
```js
// Simple auto-farm for quick use
setInterval(() => {
    const app = window.pc && window.pc.Application.getApplication();
    if (!app) return;
    
    app.root.findByTag('resource').forEach(resource => {
        const position = resource.getPosition();
        const clickEvent = new pc.MouseEvent('click', {
            x: position.x,
            y: position.y,
            button: pc.MOUSEBUTTON_LEFT
        });
        
        resource.fire('mousedown', clickEvent);
        resource.fire('mouseup', clickEvent);
    });
}, 3000);
```

## Human Behavior Simulation
```js
// Add human-like behavior to auto-farm
class HumanBehaviorSimulator {
    constructor() {
        this.lastActionTime = 0;
        this.actionPatterns = [
            { type: 'idle', duration: 2000, probability: 0.3 },
            { type: 'micro_pause', duration: 500, probability: 0.5 },
            { type: 'direction_change', duration: 1000, probability: 0.2 }
        ];
    }
    
    async simulateHumanBehavior() {
        const now = Date.now();
        if (now - this.lastActionTime < 1000) return;
        
        const pattern = this.selectRandomPattern();
        await this.executePattern(pattern);
        this.lastActionTime = now;
    }
    
    selectRandomPattern() {
        const random = Math.random();
        let cumulative = 0;
        
        for (const pattern of this.actionPatterns) {
            cumulative += pattern.probability;
            if (random <= cumulative) {
                return pattern;
            }
        }
        
        return this.actionPatterns[0];
    }
    
    async executePattern(pattern) {
        switch (pattern.type) {
            case 'idle':
                await this.randomDelay(pattern.duration, pattern.duration + 1000);
                break;
            case 'micro_pause':
                await this.randomDelay(pattern.duration, pattern.duration + 200);
                break;
            case 'direction_change':
                // Simulate slight movement variation
                await this.randomDelay(pattern.duration, pattern.duration + 500);
                break;
        }
    }
    
    async randomDelay(min, max) {
        const delay = Math.random() * (max - min) + min;
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}
```

**Features:**
- PlayCanvas entity integration
- Resource priority system
- Human behavior simulation
- Distance-based target selection
- Anti-detection timing patterns

**Compatibility:** PlayCanvas-based Tribals.io