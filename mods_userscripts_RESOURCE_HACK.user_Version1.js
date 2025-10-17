// ==UserScript==
// @name         Tribals.io Advanced Resource Hack
// @namespace    https://tribals.io/
// @version      1.0
// @description  Advanced resource injection system with PlayCanvas integration and stealth mechanisms
// @match        https://tribals.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Advanced Resource Hack with PlayCanvas integration
    class ResourceHackUltra {
        constructor() {
            this.app = null;
            this.stealthMode = true;
            this.injectionHistory = [];
            this.originalValues = new Map();
            this.init();
        }
        
        init() {
            // Wait for PlayCanvas to load
            this.waitForPlayCanvas().then(() => {
                this.app = window.pc && window.pc.Application.getApplication();
                this.createUI();
                this.backupOriginalValues();
                console.log('Advanced Resource Hack initialized');
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
            panel.id = 'resource-hack-panel';
            panel.style.cssText = `
                position: fixed;
                top: 10px;
                left: 10px;
                width: 350px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 15px;
                border-radius: 8px;
                font-family: Arial, sans-serif;
                z-index: 10000;
                border: 2px solid #ff6600;
            `;
            
            panel.innerHTML = `
                <h3 style="margin: 0 0 10px 0; color: #ff6600;">Resource Hack Control</h3>
                <div style="margin-bottom: 10px;">
                    <label>
                        <input type="checkbox" id="stealth-mode" checked> Stealth Mode
                    </label>
                </div>
                <div style="margin-bottom: 10px;">
                    <label>Wood: <input type="number" id="wood-amount" value="999999" style="width: 80px; margin-left: 5px;"></label>
                    <button id="inject-wood" style="background: #ff6600; color: white; border: none; padding: 3px 8px; border-radius: 3px; cursor: pointer; margin-left: 5px;">Inject</button>
                </div>
                <div style="margin-bottom: 10px;">
                    <label>Stone: <input type="number" id="stone-amount" value="999999" style="width: 80px; margin-left: 5px;"></label>
                    <button id="inject-stone" style="background: #ff6600; color: white; border: none; padding: 3px 8px; border-radius: 3px; cursor: pointer; margin-left: 5px;">Inject</button>
                </div>
                <div style="margin-bottom: 10px;">
                    <label>Gold: <input type="number" id="gold-amount" value="999999" style="width: 80px; margin-left: 5px;"></label>
                    <button id="inject-gold" style="background: #ff6600; color: white; border: none; padding: 3px 8px; border-radius: 3px; cursor: pointer; margin-left: 5px;">Inject</button>
                </div>
                <div style="margin-bottom: 10px;">
                    <button id="inject-all" style="background: #00ff00; color: black; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px;">Inject All</button>
                    <button id="restore-original" style="background: #ff0000; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Restore</button>
                </div>
                <div style="margin-bottom: 10px;">
                    <button id="gradual-increase" style="background: #0066ff; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px;">Gradual Increase</button>
                    <button id="stealth-inject" style="background: #6600ff; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Stealth Inject</button>
                </div>
                <div id="status" style="margin-top: 10px; font-size: 12px; color: #cccccc;">Status: Ready</div>
                <div id="current-resources" style="margin-top: 5px; font-size: 11px; color: #cccccc;">Resources: Loading...</div>
            `;
            
            document.body.appendChild(panel);
            
            // Add event listeners
            document.getElementById('inject-wood').addEventListener('click', () => {
                const amount = parseInt(document.getElementById('wood-amount').value);
                this.injectResources('wood', amount);
            });
            
            document.getElementById('inject-stone').addEventListener('click', () => {
                const amount = parseInt(document.getElementById('stone-amount').value);
                this.injectResources('stone', amount);
            });
            
            document.getElementById('inject-gold').addEventListener('click', () => {
                const amount = parseInt(document.getElementById('gold-amount').value);
                this.injectResources('gold', amount);
            });
            
            document.getElementById('inject-all').addEventListener('click', () => {
                this.injectAllResources();
            });
            
            document.getElementById('restore-original').addEventListener('click', () => {
                this.restoreOriginalValues();
            });
            
            document.getElementById('gradual-increase').addEventListener('click', () => {
                this.gradualIncreaseAll();
            });
            
            document.getElementById('stealth-inject').addEventListener('click', () => {
                this.stealthInjectAll();
            });
            
            // Start resource monitoring
            this.startResourceMonitoring();
        }
        
        async injectResources(resourceType, amount) {
            const playerEntity = this.findPlayerEntity();
            if (!playerEntity) {
                this.updateStatus('Player entity not found');
                return false;
            }
            
            // Method 1: Direct script property modification
            const playerScript = playerEntity.getComponent('script');
            if (playerScript && playerScript.resources) {
                const originalAmount = playerScript.resources[resourceType] || 0;
                playerScript.resources[resourceType] = originalAmount + amount;
                playerScript.fire('resourceUpdate', { type: resourceType, amount: amount });
                
                this.logInjection(resourceType, amount, 'script_property');
                this.updateStatus(`${resourceType} injected: +${amount}`);
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
            this.updateStatus(`${resourceType} injected via event: +${amount}`);
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
        
        async injectAllResources() {
            const amounts = {
                wood: parseInt(document.getElementById('wood-amount').value),
                stone: parseInt(document.getElementById('stone-amount').value),
                gold: parseInt(document.getElementById('gold-amount').value)
            };
            
            const results = {};
            
            for (const [type, amount] of Object.entries(amounts)) {
                results[type] = await this.injectResources(type, amount);
            }
            
            this.updateStatus('All resources injected');
            return results;
        }
        
        async stealthInjectAll() {
            const amounts = {
                wood: parseInt(document.getElementById('wood-amount').value),
                stone: parseInt(document.getElementById('stone-amount').value),
                gold: parseInt(document.getElementById('gold-amount').value)
            };
            
            for (const [type, amount] of Object.entries(amounts)) {
                await this.stealthInject(type, amount);
            }
            
            this.updateStatus('Stealth injection completed');
        }
        
        async stealthInject(resourceType, amount) {
            const randomDelay = Math.random() * 2000 + 500;
            await new Promise(resolve => setTimeout(resolve, randomDelay));
            
            const randomizedAmount = amount + Math.floor(Math.random() * 1000 - 500);
            return await this.injectResources(resourceType, randomizedAmount);
        }
        
        async gradualIncreaseAll() {
            const amounts = {
                wood: parseInt(document.getElementById('wood-amount').value),
                stone: parseInt(document.getElementById('stone-amount').value),
                gold: parseInt(document.getElementById('gold-amount').value)
            };
            
            for (const [type, amount] of Object.entries(amounts)) {
                await this.gradualIncrease(type, amount, 20);
            }
            
            this.updateStatus('Gradual increase completed');
        }
        
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
            
            this.updateStatus(`${resourceType} gradually increased to ${targetAmount}`);
        }
        
        backupOriginalValues() {
            const player = this.findPlayerEntity();
            if (player && player.script && player.script.resources) {
                this.originalValues.set('wood', player.script.resources.wood || 0);
                this.originalValues.set('stone', player.script.resources.stone || 0);
                this.originalValues.set('gold', player.script.resources.gold || 0);
                this.updateStatus('Original values backed up');
            }
        }
        
        restoreOriginalValues() {
            const player = this.findPlayerEntity();
            if (player && player.script && player.script.resources) {
                player.script.resources.wood = this.originalValues.get('wood') || 0;
                player.script.resources.stone = this.originalValues.get('stone') || 0;
                player.script.resources.gold = this.originalValues.get('gold') || 0;
                this.updateStatus('Original values restored');
            }
        }
        
        startResourceMonitoring() {
            setInterval(() => {
                this.updateCurrentResources();
            }, 2000);
        }
        
        updateCurrentResources() {
            const resources = this.getCurrentResources();
            const resourceElement = document.getElementById('current-resources');
            if (resourceElement) {
                resourceElement.textContent = `Resources: Wood: ${resources.wood}, Stone: ${resources.stone}, Gold: ${resources.gold}`;
            }
        }
        
        getCurrentResources() {
            const player = this.findPlayerEntity();
            if (player && player.script && player.script.resources) {
                return {
                    wood: player.script.resources.wood || 0,
                    stone: player.script.resources.stone || 0,
                    gold: player.script.resources.gold || 0
                };
            }
            return { wood: 0, stone: 0, gold: 0 };
        }
        
        updateStatus(status) {
            const statusElement = document.getElementById('status');
            if (statusElement) {
                statusElement.textContent = `Status: ${status}`;
            }
        }
    }
    
    // Initialize when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new ResourceHackUltra();
        });
    } else {
        new ResourceHackUltra();
    }
    
})();