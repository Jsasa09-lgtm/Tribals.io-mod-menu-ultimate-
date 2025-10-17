// ==UserScript==
// @name         Tribals.io Advanced Auto-Farm
// @namespace    https://tribals.io/
// @version      1.0
// @description  Advanced auto-farming system with PlayCanvas integration and human behavior simulation
// @match        https://tribals.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Advanced Auto-Farm with PlayCanvas integration
    class AdvancedAutoFarm {
        constructor() {
            this.app = null;
            this.resourcePriorities = {
                wood: { weight: 0.3, minLevel: 1, maxDistance: 1000 },
                stone: { weight: 0.4, minLevel: 2, maxDistance: 1500 },
                gold: { weight: 0.3, minLevel: 3, maxDistance: 2000 }
            };
            this.isActive = false;
            this.humanBehaviorSimulator = new HumanBehaviorSimulator();
            this.antiDetectionEngine = new AntiDetectionEngine();
            this.init();
        }
        
        init() {
            // Wait for PlayCanvas to load
            this.waitForPlayCanvas().then(() => {
                this.app = window.pc && window.pc.Application.getApplication();
                this.createUI();
                console.log('Advanced Auto-Farm initialized');
            });
        }
        
        async waitForPlayCanvas() {
            return new Promise((resolve) => {
                const checkPlayCanvas = () => {
                    if (window.pc && window.pc.Application.getApplication()) {
                        resolve();
                    } else {
                        setTimeout(checkPlayCanvas, 1000);
                    }
                };
                checkPlayCanvas();
            });
        }
        
        createUI() {
            // Create control panel
            const panel = document.createElement('div');
            panel.id = 'auto-farm-panel';
            panel.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                width: 300px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 15px;
                border-radius: 8px;
                font-family: Arial, sans-serif;
                z-index: 10000;
                border: 2px solid #00ff00;
            `;
            
            panel.innerHTML = `
                <h3 style="margin: 0 0 10px 0; color: #00ff00;">Auto-Farm Control</h3>
                <div>
                    <label>
                        <input type="checkbox" id="auto-farm-toggle"> Enable Auto-Farm
                    </label>
                </div>
                <div style="margin-top: 10px;">
                    <label>
                        <input type="checkbox" id="human-behavior" checked> Human Behavior
                    </label>
                </div>
                <div style="margin-top: 10px;">
                    <label>
                        <input type="checkbox" id="stealth-mode" checked> Stealth Mode
                    </label>
                </div>
                <div style="margin-top: 10px;">
                    <button id="start-farming" style="background: #00ff00; color: black; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Start Farming</button>
                    <button id="stop-farming" style="background: #ff0000; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-left: 5px;">Stop Farming</button>
                </div>
                <div id="status" style="margin-top: 10px; font-size: 12px; color: #cccccc;">Status: Ready</div>
            `;
            
            document.body.appendChild(panel);
            
            // Add event listeners
            document.getElementById('auto-farm-toggle').addEventListener('change', (e) => {
                this.isActive = e.target.checked;
                this.updateStatus(e.target.checked ? 'Active' : 'Inactive');
            });
            
            document.getElementById('start-farming').addEventListener('click', () => {
                this.startFarming();
            });
            
            document.getElementById('stop-farming').addEventListener('click', () => {
                this.stopFarming();
            });
        }
        
        async startFarming() {
            if (!this.app) {
                console.log('PlayCanvas not loaded yet');
                return;
            }
            
            this.isActive = true;
            this.updateStatus('Starting...');
            
            // Hook into PlayCanvas update loop
            this.app.on('update', this.onPlayCanvasUpdate.bind(this));
            
            // Start farming loop
            this.farmingLoop();
        }
        
        stopFarming() {
            this.isActive = false;
            this.updateStatus('Stopped');
            
            // Remove event listeners
            if (this.app) {
                this.app.off('update', this.onPlayCanvasUpdate.bind(this));
            }
        }
        
        async farmingLoop() {
            while (this.isActive) {
                try {
                    const targets = await this.scanForPlayCanvasResources();
                    const optimalTarget = this.calculateOptimalTarget(targets);
                    
                    if (optimalTarget) {
                        await this.collectPlayCanvasResource(optimalTarget);
                        
                        // Human behavior simulation
                        if (document.getElementById('human-behavior').checked) {
                            await this.humanBehaviorSimulator.simulateBehavior();
                        }
                        
                        // Anti-detection delay
                        if (document.getElementById('stealth-mode').checked) {
                            await this.antiDetectionEngine.randomDelay(1000, 5000);
                        } else {
                            await this.antiDetectionEngine.randomDelay(500, 2000);
                        }
                    } else {
                        await this.antiDetectionEngine.randomDelay(2000, 5000);
                    }
                } catch (error) {
                    console.error('Farming error:', error);
                    await this.antiDetectionEngine.randomDelay(5000, 10000);
                }
            }
        }
        
        onPlayCanvasUpdate(dt) {
            // Update UI with current status
            if (this.isActive) {
                this.updateStatus('Farming...');
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
        
        updateStatus(status) {
            const statusElement = document.getElementById('status');
            if (statusElement) {
                statusElement.textContent = `Status: ${status}`;
            }
        }
    }
    
    // Human Behavior Simulator
    class HumanBehaviorSimulator {
        constructor() {
            this.lastActionTime = 0;
            this.actionPatterns = [
                { type: 'idle', duration: 2000, probability: 0.3 },
                { type: 'micro_pause', duration: 500, probability: 0.5 },
                { type: 'direction_change', duration: 1000, probability: 0.2 }
            ];
        }
        
        async simulateBehavior() {
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
                    await this.randomDelay(pattern.duration, pattern.duration + 500);
                    break;
            }
        }
        
        async randomDelay(min, max) {
            const delay = Math.random() * (max - min) + min;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    
    // Anti-Detection Engine
    class AntiDetectionEngine {
        constructor() {
            this.patternRandomizer = new PatternRandomizer();
        }
        
        async randomDelay(min, max) {
            const delay = this.patternRandomizer.gaussian(min + (max - min) / 2, (max - min) / 6);
            await new Promise(resolve => setTimeout(resolve, Math.max(min, delay)));
        }
    }
    
    // Pattern Randomizer for anti-detection
    class PatternRandomizer {
        gaussian(mean, stdDev) {
            let u = 0, v = 0;
            while(u === 0) u = Math.random();
            while(v === 0) v = Math.random();
            return mean + stdDev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        }
    }
    
    // Initialize when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new AdvancedAutoFarm();
        });
    } else {
        new AdvancedAutoFarm();
    }
    
})();