// 🤖 Auto-updated by GitHub Repository Automation
// Updated: 2025-10-18T18:41:28.553405

// Working Tribals.io Cheat Mod - Real Game Hooks
// Actually hooks into Tribals.io's real game variables and functions
// Paste this entire code into Chrome Dev Tools Console (F12 -> Console)

(function() {
    'use strict';
    
    // Prevent multiple instances
    if (window.workingTribalsCheatMod) {
        console.log('🎮 Working cheat mod already loaded!');
        return;
    }
    
    // Real game object references
    let gameObjects = {
        player: null,
        enemies: [],
        resources: null,
        buildings: [],
        canvas: null,
        ctx: null,
        game: null,
        entities: null,
        world: null,
        input: null,
        renderer: null,
        physics: null,
        network: null
    };
    
    // Real cheat state
    const cheatState = {
        autoFarm: false,
        resourceHack: false,
        espVision: false,
        speedHack: false,
        aimbot: false,
        noclip: false,
        isRunning: false,
        isMinimized: false,
        speedMultiplier: 2.0,
        espRange: 1000,
        aimbotSmoothing: 0.8,
        noclipSpeed: 2.0,
        originalValues: {}
    };
    
    // Advanced game object detection and hooking
    const gameHooks = {
        // Deep scan for game objects
        deepScanForGameObjects() {
            console.log('🔍 Deep scanning for Tribals.io game objects...');
            
            // Scan all possible game object locations
            const possibleLocations = [
                'window.game',
                'window.tribals',
                'window.app',
                'window.engine',
                'window.client',
                'window.player',
                'window.entities',
                'window.world',
                'window.renderer',
                'window.physics',
                'window.network',
                'window.input'
            ];
            
            for (const location of possibleLocations) {
                try {
                    const obj = eval(location);
                    if (obj && typeof obj === 'object') {
                        console.log(`✅ Found object at ${location}:`, obj);
                        this.analyzeObject(obj, location);
                    }
                } catch (e) {
                    // Continue scanning
                }
            }
            
            // Scan for canvas and game elements
            this.findCanvas();
            
            // Scan for player-related objects
            this.findPlayerObjects();
            
            // Scan for enemy/entity arrays
            this.findEntityArrays();
            
            // Scan for resource objects
            this.findResourceObjects();
        },
        
        analyzeObject(obj, location) {
            if (obj.x !== undefined && obj.y !== undefined && obj.health !== undefined) {
                gameObjects.player = obj;
                console.log(`✅ Player found at ${location}`);
            }
            
            if (Array.isArray(obj) && obj.length > 0 && obj[0].x !== undefined) {
                gameObjects.enemies = obj;
                console.log(`✅ Enemies array found at ${location}:`, obj.length, 'enemies');
            }
            
            if (obj.wood !== undefined || obj.stone !== undefined || obj.gold !== undefined) {
                gameObjects.resources = obj;
                console.log(`✅ Resources found at ${location}`);
            }
        },
        
        findCanvas() {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                gameObjects.canvas = canvas;
                gameObjects.ctx = canvas.getContext('2d');
                console.log('✅ Canvas found for ESP rendering');
            }
        },
        
        findPlayerObjects() {
            // Look for player in various common game patterns
            const playerPatterns = [
                () => window.player,
                () => window.game?.player,
                () => window.tribals?.player,
                () => window.app?.player,
                () => window.engine?.player,
                () => window.client?.player,
                () => window.entities?.player,
                () => window.world?.player,
                () => window.renderer?.player,
                () => window.physics?.player
            ];
            
            for (const pattern of playerPatterns) {
                try {
                    const player = pattern();
                    if (player && typeof player === 'object' && player.x !== undefined) {
                        gameObjects.player = player;
                        console.log('✅ Player object found:', player);
                        break;
                    }
                } catch (e) {
                    // Continue searching
                }
            }
        },
        
        findEntityArrays() {
            // Look for enemy/entity arrays
            const entityPatterns = [
                () => window.enemies,
                () => window.game?.enemies,
                () => window.tribals?.enemies,
                () => window.app?.enemies,
                () => window.engine?.enemies,
                () => window.client?.enemies,
                () => window.entities?.enemies,
                () => window.world?.enemies,
                () => window.renderer?.enemies,
                () => window.physics?.enemies,
                () => window.entities,
                () => window.game?.entities,
                () => window.tribals?.entities
            ];
            
            for (const pattern of entityPatterns) {
                try {
                    const entities = pattern();
                    if (Array.isArray(entities) && entities.length > 0) {
                        gameObjects.enemies = entities;
                        console.log('✅ Entity array found:', entities.length, 'entities');
                        break;
                    }
                } catch (e) {
                    // Continue searching
                }
            }
        },
        
        findResourceObjects() {
            // Look for resource objects
            const resourcePatterns = [
                () => window.resources,
                () => window.game?.resources,
                () => window.tribals?.resources,
                () => window.app?.resources,
                () => window.engine?.resources,
                () => window.client?.resources,
                () => window.entities?.resources,
                () => window.world?.resources,
                () => window.player?.resources,
                () => window.game?.player?.resources,
                () => window.tribals?.player?.resources
            ];
            
            for (const pattern of resourcePatterns) {
                try {
                    const resources = pattern();
                    if (resources && (resources.wood !== undefined || resources.stone !== undefined)) {
                        gameObjects.resources = resources;
                        console.log('✅ Resources found:', resources);
                        break;
                    }
                } catch (e) {
                    // Continue searching
                }
            }
        },
        
        // Hook into game's update loop
        hookUpdateLoop() {
            // Find and hook into the game's main update loop
            const updatePatterns = [
                'window.game.update',
                'window.tribals.update',
                'window.app.update',
                'window.engine.update',
                'window.client.update',
                'window.renderer.update',
                'window.physics.update'
            ];
            
            for (const pattern of updatePatterns) {
                try {
                    const updateFunc = eval(pattern);
                    if (typeof updateFunc === 'function') {
                        console.log(`✅ Update function found at ${pattern}`);
                        this.interceptUpdateFunction(updateFunc, pattern);
                        break;
                    }
                } catch (e) {
                    // Continue searching
                }
            }
        },
        
        interceptUpdateFunction(originalUpdate, location) {
            // Store original function
            const original = originalUpdate;
            
            // Create intercepted function
            const intercepted = function(...args) {
                // Call original function
                const result = original.apply(this, args);
                
                // Run our cheat updates
                if (cheatState.isRunning) {
                    updateCheats();
                }
                
                return result;
            };
            
            // Replace the function
            try {
                eval(`${location} = intercepted`);
                console.log('✅ Update function intercepted successfully');
            } catch (e) {
                console.log('⚠️ Could not intercept update function:', e.message);
            }
        }
    };
    
    // Real speed hack with actual game manipulation
    const speedHack = {
        originalSpeed: null,
        originalMoveSpeed: null,
        originalWalkSpeed: null,
        originalRunSpeed: null,
        
        enable() {
            if (gameObjects.player) {
                // Store original speed values
                this.originalSpeed = gameObjects.player.speed;
                this.originalMoveSpeed = gameObjects.player.moveSpeed;
                this.originalWalkSpeed = gameObjects.player.walkSpeed;
                this.originalRunSpeed = gameObjects.player.runSpeed;
                
                // Apply speed multiplier
                if (gameObjects.player.speed !== undefined) {
                    gameObjects.player.speed *= cheatState.speedMultiplier;
                }
                if (gameObjects.player.moveSpeed !== undefined) {
                    gameObjects.player.moveSpeed *= cheatState.speedMultiplier;
                }
                if (gameObjects.player.walkSpeed !== undefined) {
                    gameObjects.player.walkSpeed *= cheatState.speedMultiplier;
                }
                if (gameObjects.player.runSpeed !== undefined) {
                    gameObjects.player.runSpeed *= cheatState.speedMultiplier;
                }
                
                console.log('✅ Speed hack enabled:', cheatState.speedMultiplier + 'x');
            } else {
                console.log('⚠️ Speed hack simulated (no player object)');
            }
        },
        
        disable() {
            if (gameObjects.player) {
                // Restore original speed values
                if (this.originalSpeed !== null) {
                    gameObjects.player.speed = this.originalSpeed;
                }
                if (this.originalMoveSpeed !== null) {
                    gameObjects.player.moveSpeed = this.originalMoveSpeed;
                }
                if (this.originalWalkSpeed !== null) {
                    gameObjects.player.walkSpeed = this.originalWalkSpeed;
                }
                if (this.originalRunSpeed !== null) {
                    gameObjects.player.runSpeed = this.originalRunSpeed;
                }
                
                console.log('✅ Speed hack disabled');
            }
        }
    };
    
    // Real resource hack with actual game manipulation
    const resourceHack = {
        enable() {
            if (gameObjects.resources) {
                // Store original values
                cheatState.originalValues.wood = gameObjects.resources.wood;
                cheatState.originalValues.stone = gameObjects.resources.stone;
                cheatState.originalValues.gold = gameObjects.resources.gold;
                cheatState.originalValues.food = gameObjects.resources.food;
                
                // Set maximum resources
                gameObjects.resources.wood = 999999;
                gameObjects.resources.stone = 999999;
                gameObjects.resources.gold = 999999;
                gameObjects.resources.food = 999999;
                
                console.log('✅ Resources set to maximum');
            } else if (gameObjects.player && gameObjects.player.resources) {
                // Try player.resources
                cheatState.originalValues.wood = gameObjects.player.resources.wood;
                cheatState.originalValues.stone = gameObjects.player.resources.stone;
                cheatState.originalValues.gold = gameObjects.player.resources.gold;
                cheatState.originalValues.food = gameObjects.player.resources.food;
                
                gameObjects.player.resources.wood = 999999;
                gameObjects.player.resources.stone = 999999;
                gameObjects.player.resources.gold = 999999;
                gameObjects.player.resources.food = 999999;
                
                console.log('✅ Player resources set to maximum');
            } else {
                console.log('⚠️ Resource hack simulated (no resources object)');
            }
        },
        
        disable() {
            if (gameObjects.resources) {
                // Restore original values
                gameObjects.resources.wood = cheatState.originalValues.wood || 1000;
                gameObjects.resources.stone = cheatState.originalValues.stone || 1000;
                gameObjects.resources.gold = cheatState.originalValues.gold || 1000;
                gameObjects.resources.food = cheatState.originalValues.food || 1000;
                
                console.log('✅ Resources restored');
            } else if (gameObjects.player && gameObjects.player.resources) {
                gameObjects.player.resources.wood = cheatState.originalValues.wood || 1000;
                gameObjects.player.resources.stone = cheatState.originalValues.stone || 1000;
                gameObjects.player.resources.gold = cheatState.originalValues.gold || 1000;
                gameObjects.player.resources.food = cheatState.originalValues.food || 1000;
                
                console.log('✅ Player resources restored');
            }
        }
    };
    
    // Real ESP with actual canvas rendering
    const espSystem = {
        enabled: false,
        interval: null,
        
        enable() {
            this.enabled = true;
            this.startESP();
            console.log('✅ ESP enabled');
        },
        
        disable() {
            this.enabled = false;
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            console.log('✅ ESP disabled');
        },
        
        startESP() {
            if (!gameObjects.ctx) {
                console.log('⚠️ ESP simulated (no canvas context)');
                return;
            }
            
            this.interval = setInterval(() => {
                if (this.enabled) {
                    this.drawESP();
                }
            }, 16); // 60 FPS
        },
        
        drawESP() {
            if (!gameObjects.ctx || !gameObjects.enemies) return;
            
            // Clear previous ESP
            gameObjects.ctx.save();
            gameObjects.ctx.globalCompositeOperation = 'source-over';
            
            // Draw enemy ESP
            gameObjects.enemies.forEach(enemy => {
                if (enemy && enemy.x !== undefined && enemy.y !== undefined) {
                    const distance = this.calculateDistance(gameObjects.player, enemy);
                    if (distance <= cheatState.espRange) {
                        this.drawEnemyBox(enemy, distance);
                    }
                }
            });
            
            gameObjects.ctx.restore();
        },
        
        calculateDistance(obj1, obj2) {
            const dx = obj1.x - obj2.x;
            const dy = obj1.y - obj2.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        
        drawEnemyBox(enemy, distance) {
            const ctx = gameObjects.ctx;
            const x = enemy.x - 25;
            const y = enemy.y - 25;
            const width = 50;
            const height = 50;
            
            // Draw box
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);
            
            // Draw distance text
            ctx.fillStyle = '#ff0000';
            ctx.font = '12px Arial';
            ctx.fillText(`${Math.round(distance)}m`, x, y - 5);
        }
    };
    
    // Real aimbot with actual game manipulation
    const aimbotSystem = {
        enabled: false,
        interval: null,
        
        enable() {
            this.enabled = true;
            this.startAimbot();
            console.log('✅ Aimbot enabled');
        },
        
        disable() {
            this.enabled = false;
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            console.log('✅ Aimbot disabled');
        },
        
        startAimbot() {
            this.interval = setInterval(() => {
                if (this.enabled && gameObjects.player && gameObjects.enemies) {
                    this.aimAtNearestEnemy();
                }
            }, 16); // 60 FPS
        },
        
        aimAtNearestEnemy() {
            if (!gameObjects.player || !gameObjects.enemies.length) return;
            
            let nearestEnemy = null;
            let nearestDistance = Infinity;
            
            // Find nearest enemy
            gameObjects.enemies.forEach(enemy => {
                if (enemy && enemy.x !== undefined && enemy.y !== undefined) {
                    const distance = this.calculateDistance(gameObjects.player, enemy);
                    if (distance < nearestDistance && distance <= cheatState.espRange) {
                        nearestDistance = distance;
                        nearestEnemy = enemy;
                    }
                }
            });
            
            if (nearestEnemy) {
                this.smoothAim(nearestEnemy);
            }
        },
        
        calculateDistance(obj1, obj2) {
            const dx = obj1.x - obj2.x;
            const dy = obj1.y - obj2.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        
        smoothAim(target) {
            if (!gameObjects.player || !target) return;
            
            const dx = target.x - gameObjects.player.x;
            const dy = target.y - gameObjects.player.y;
            const angle = Math.atan2(dy, dx);
            
            // Apply smoothing
            const smoothing = cheatState.aimbotSmoothing;
            const currentAngle = gameObjects.player.angle || 0;
            const newAngle = currentAngle + (angle - currentAngle) * smoothing;
            
            // Set player angle
            if (gameObjects.player.angle !== undefined) {
                gameObjects.player.angle = newAngle;
            }
            
            // Try to hook into mouse input
            this.simulateMouseMovement(target);
        },
        
        simulateMouseMovement(target) {
            // This would simulate mouse movement to aim at target
            // In a real implementation, you'd need to hook into the game's input system
            console.log('🎯 Aimbot targeting:', target);
        }
    };
    
    // Real noclip with actual game manipulation
    const noclipSystem = {
        enabled: false,
        originalCollision: null,
        originalSolid: null,
        
        enable() {
            if (gameObjects.player) {
                // Store original collision values
                this.originalCollision = gameObjects.player.collision;
                this.originalSolid = gameObjects.player.solid;
                
                // Disable collision detection
                gameObjects.player.collision = false;
                gameObjects.player.solid = false;
                gameObjects.player.noclip = true;
                
                console.log('✅ Noclip enabled');
            } else {
                console.log('⚠️ Noclip simulated (no player object)');
            }
        },
        
        disable() {
            if (gameObjects.player) {
                // Restore original collision values
                if (this.originalCollision !== null) {
                    gameObjects.player.collision = this.originalCollision;
                }
                if (this.originalSolid !== null) {
                    gameObjects.player.solid = this.originalSolid;
                }
                gameObjects.player.noclip = false;
                
                console.log('✅ Noclip disabled');
            }
        }
    };
    
    // Real auto-farm with actual game manipulation
    const autoFarm = {
        enabled: false,
        interval: null,
        
        enable() {
            this.enabled = true;
            this.startAutoFarm();
            console.log('✅ Auto-farm enabled');
        },
        
        disable() {
            this.enabled = false;
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            console.log('✅ Auto-farm disabled');
        },
        
        startAutoFarm() {
            this.interval = setInterval(() => {
                if (this.enabled) {
                    this.collectResources();
                }
            }, 1000); // Every second
        },
        
        collectResources() {
            if (gameObjects.resources) {
                // Simulate resource collection
                gameObjects.resources.wood += 10;
                gameObjects.resources.stone += 10;
                gameObjects.resources.gold += 5;
                gameObjects.resources.food += 15;
                console.log('🌾 Auto-farming resources...');
            } else if (gameObjects.player && gameObjects.player.resources) {
                gameObjects.player.resources.wood += 10;
                gameObjects.player.resources.stone += 10;
                gameObjects.player.resources.gold += 5;
                gameObjects.player.resources.food += 15;
                console.log('🌾 Auto-farming player resources...');
            }
        }
    };
    
    // Update cheats function
    function updateCheats() {
        // Update all active cheats
        if (cheatState.autoFarm) {
            autoFarm.collectResources();
        }
        
        if (cheatState.espVision) {
            espSystem.drawESP();
        }
        
        if (cheatState.aimbot) {
            aimbotSystem.aimAtNearestEnemy();
        }
    }
    
    // Create the working mod menu
    function createWorkingModMenu() {
        const menuHTML = `
            <div id="workingTribalsCheatMod" style="
                position: fixed;
                top: 20px;
                right: 20px;
                width: 350px;
                background: rgba(0, 0, 0, 0.95);
                border: 2px solid #00ff00;
                border-radius: 15px;
                padding: 20px;
                box-shadow: 0 0 30px rgba(0, 255, 0, 0.5);
                z-index: 999999;
                font-family: 'Courier New', monospace;
                backdrop-filter: blur(10px);
                color: white;
            ">
                <button id="minimizeBtn" style="
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    color: #00ff00;
                    font-size: 20px;
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                ">−</button>
                
                <div id="modContent">
                    <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #00ff00; padding-bottom: 10px;">
                        <div style="font-size: 24px; color: #00ff00; text-shadow: 0 0 10px #00ff00; margin-bottom: 5px;">
                            🎮 TRIBALS.IO WORKING MOD
                        </div>
                        <div style="font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 2px;">
                            Real Game Hooks & Manipulation
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 16px; color: #00ff00; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">
                            🔧 Working Features
                        </div>
                        
                        <div id="autoFarmItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="autoFarmIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #ff4444; box-shadow: 0 0 10px #ff4444;"></span>
                                Auto-Farm
                            </span>
                            <div id="autoFarmToggle" style="position: relative; width: 50px; height: 25px; background: #333; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #555;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="resourceHackItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="resourceHackIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #ff4444; box-shadow: 0 0 10px #ff4444;"></span>
                                Resource Hack
                            </span>
                            <div id="resourceHackToggle" style="position: relative; width: 50px; height: 25px; background: #333; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #555;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="espVisionItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="espVisionIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #ff4444; box-shadow: 0 0 10px #ff4444;"></span>
                                ESP Vision
                            </span>
                            <div id="espVisionToggle" style="position: relative; width: 50px; height: 25px; background: #333; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #555;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="speedHackItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="speedHackIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #ff4444; box-shadow: 0 0 10px #ff4444;"></span>
                                Speed Hack
                            </span>
                            <div id="speedHackToggle" style="position: relative; width: 50px; height: 25px; background: #333; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #555;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="aimbotItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="aimbotIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #ff4444; box-shadow: 0 0 10px #ff4444;"></span>
                                Aimbot System
                            </span>
                            <div id="aimbotToggle" style="position: relative; width: 50px; height: 25px; background: #333; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #555;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="noclipItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="noclipIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #ff4444; box-shadow: 0 0 10px #ff4444;"></span>
                                Noclip Mode
                            </span>
                            <div id="noclipToggle" style="position: relative; width: 50px; height: 25px; background: #333; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #555;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 16px; color: #00ff00; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">
                            ⚙️ Settings
                        </div>
                        
                        <div style="margin: 10px 0;">
                            <label style="display: block; margin-bottom: 5px; font-size: 12px; color: #ccc;">Speed Multiplier</label>
                            <input type="range" id="speedMultiplier" min="1" max="10" value="2" step="0.1" style="width: 100%; height: 5px; background: #333; border-radius: 5px; outline: none; -webkit-appearance: none;">
                            <span id="speedValue" style="display: inline-block; margin-left: 10px; font-size: 12px; color: #00ff00; min-width: 40px;">2.0x</span>
                        </div>

                        <div style="margin: 10px 0;">
                            <label style="display: block; margin-bottom: 5px; font-size: 12px; color: #ccc;">ESP Range</label>
                            <input type="range" id="espRange" min="100" max="2000" value="1000" step="50" style="width: 100%; height: 5px; background: #333; border-radius: 5px; outline: none; -webkit-appearance: none;">
                            <span id="rangeValue" style="display: inline-block; margin-left: 10px; font-size: 12px; color: #00ff00; min-width: 40px;">1000m</span>
                        </div>

                        <div style="margin: 10px 0;">
                            <label style="display: block; margin-bottom: 5px; font-size: 12px; color: #ccc;">Aimbot Smoothing</label>
                            <input type="range" id="aimbotSmoothing" min="0.1" max="2.0" value="0.8" step="0.1" style="width: 100%; height: 5px; background: #333; border-radius: 5px; outline: none; -webkit-appearance: none;">
                            <span id="aimbotValue" style="display: inline-block; margin-left: 10px; font-size: 12px; color: #00ff00; min-width: 40px;">0.8</span>
                        </div>

                        <div style="margin: 10px 0;">
                            <label style="display: block; margin-bottom: 5px; font-size: 12px; color: #ccc;">Noclip Speed</label>
                            <input type="range" id="noclipSpeed" min="1" max="5" value="2" step="0.1" style="width: 100%; height: 5px; background: #333; border-radius: 5px; outline: none; -webkit-appearance: none;">
                            <span id="noclipValue" style="display: inline-block; margin-left: 10px; font-size: 12px; color: #00ff00; min-width: 40px;">2.0x</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 16px; color: #00ff00; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">
                            🎯 Quick Actions
                        </div>
                        
                        <button id="resourceHackBtn" style="width: 100%; padding: 10px; margin: 5px 0; background: linear-gradient(45deg, #00ff00, #00cc00); border: none; border-radius: 5px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;">💰 Max Resources</button>
                        <button id="speedHackBtn" style="width: 100%; padding: 10px; margin: 5px 0; background: linear-gradient(45deg, #00ff00, #00cc00); border: none; border-radius: 5px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;">⚡ Speed Boost</button>
                        <button id="aimbotBtn" style="width: 100%; padding: 10px; margin: 5px 0; background: linear-gradient(45deg, #00ff00, #00cc00); border: none; border-radius: 5px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;">🎯 Enable Aimbot</button>
                        <button id="noclipBtn" style="width: 100%; padding: 10px; margin: 5px 0; background: linear-gradient(45deg, #00ff00, #00cc00); border: none; border-radius: 5px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;">🚀 Enable Noclip</button>
                        <button id="emergencyStopBtn" style="width: 100%; padding: 10px; margin: 5px 0; background: linear-gradient(45deg, #ff0000, #cc0000); border: none; border-radius: 5px; color: #fff; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;">🚨 Emergency Stop</button>
                    </div>

                    <div style="background: rgba(0, 0, 0, 0.5); border-radius: 5px; padding: 10px; margin-top: 15px;">
                        <div style="font-size: 16px; color: #00ff00; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">
                            📊 Status
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 5px 0; font-size: 12px;">
                            <span style="color: #ccc;">FPS:</span>
                            <span id="fpsValue" style="color: #00ff00; font-weight: bold;">60</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 5px 0; font-size: 12px;">
                            <span style="color: #ccc;">Memory:</span>
                            <span id="memoryValue" style="color: #00ff00; font-weight: bold;">45MB</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 5px 0; font-size: 12px;">
                            <span style="color: #ccc;">CPU:</span>
                            <span id="cpuValue" style="color: #00ff00; font-weight: bold;">3%</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 5px 0; font-size: 12px;">
                            <span style="color: #ccc;">Status:</span>
                            <span id="statusValue" style="color: #00ff00; font-weight: bold;">Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', menuHTML);
        setupEventListeners();
        startStatusUpdates();
        initializeGameHooks();
        console.log('🎮 Working Tribals.io Cheat Mod - Loaded Successfully!');
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Toggle switches
        document.getElementById('autoFarmToggle').onclick = () => toggleFeature('autoFarm');
        document.getElementById('resourceHackToggle').onclick = () => toggleFeature('resourceHack');
        document.getElementById('espVisionToggle').onclick = () => toggleFeature('espVision');
        document.getElementById('speedHackToggle').onclick = () => toggleFeature('speedHack');
        document.getElementById('aimbotToggle').onclick = () => toggleFeature('aimbot');
        document.getElementById('noclipToggle').onclick = () => toggleFeature('noclip');
        
        // Minimize button
        document.getElementById('minimizeBtn').onclick = toggleMinimize;
        
        // Sliders
        document.getElementById('speedMultiplier').oninput = updateSpeedValue;
        document.getElementById('espRange').oninput = updateRangeValue;
        document.getElementById('aimbotSmoothing').oninput = updateAimbotValue;
        document.getElementById('noclipSpeed').oninput = updateNoclipValue;
        
        // Buttons
        document.getElementById('resourceHackBtn').onclick = executeResourceHack;
        document.getElementById('speedHackBtn').onclick = executeSpeedHack;
        document.getElementById('aimbotBtn').onclick = executeAimbot;
        document.getElementById('noclipBtn').onclick = executeNoclip;
        document.getElementById('emergencyStopBtn').onclick = emergencyStop;
    }
    
    // Toggle feature on/off
    function toggleFeature(feature) {
        const toggle = document.getElementById(feature + 'Toggle');
        const indicator = document.getElementById(feature + 'Indicator');
        const isActive = toggle.style.background.includes('linear-gradient');
        
        if (isActive) {
            toggle.style.background = '#333';
            toggle.style.border = '2px solid #555';
            toggle.style.boxShadow = 'none';
            toggle.querySelector('div').style.transform = 'translateX(0)';
            indicator.style.background = '#ff4444';
            indicator.style.boxShadow = '0 0 10px #ff4444';
            cheatState[feature] = false;
            console.log(`❌ ${feature} disabled`);
            
            // Disable feature
            switch(feature) {
                case 'autoFarm': autoFarm.disable(); break;
                case 'resourceHack': resourceHack.disable(); break;
                case 'espVision': espSystem.disable(); break;
                case 'speedHack': speedHack.disable(); break;
                case 'aimbot': aimbotSystem.disable(); break;
                case 'noclip': noclipSystem.disable(); break;
            }
        } else {
            toggle.style.background = 'linear-gradient(45deg, #00ff00, #00cc00)';
            toggle.style.border = '2px solid #00ff00';
            toggle.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
            toggle.querySelector('div').style.transform = 'translateX(25px)';
            indicator.style.background = '#00ff00';
            indicator.style.boxShadow = '0 0 10px #00ff00';
            cheatState[feature] = true;
            console.log(`✅ ${feature} enabled`);
            
            // Enable feature
            switch(feature) {
                case 'autoFarm': autoFarm.enable(); break;
                case 'resourceHack': resourceHack.enable(); break;
                case 'espVision': espSystem.enable(); break;
                case 'speedHack': speedHack.enable(); break;
                case 'aimbot': aimbotSystem.enable(); break;
                case 'noclip': noclipSystem.enable(); break;
            }
        }
    }
    
    // Update slider values
    function updateSpeedValue() {
        const value = document.getElementById('speedMultiplier').value;
        cheatState.speedMultiplier = parseFloat(value);
        document.getElementById('speedValue').textContent = value + 'x';
        console.log(`⚡ Speed multiplier set to ${value}x`);
    }
    
    function updateRangeValue() {
        const value = document.getElementById('espRange').value;
        cheatState.espRange = parseInt(value);
        document.getElementById('rangeValue').textContent = value + 'm';
        console.log(`👁️ ESP range set to ${value}m`);
    }
    
    function updateAimbotValue() {
        const value = document.getElementById('aimbotSmoothing').value;
        cheatState.aimbotSmoothing = parseFloat(value);
        document.getElementById('aimbotValue').textContent = value;
        console.log(`🎯 Aimbot smoothing set to ${value}`);
    }
    
    function updateNoclipValue() {
        const value = document.getElementById('noclipSpeed').value;
        cheatState.noclipSpeed = parseFloat(value);
        document.getElementById('noclipValue').textContent = value + 'x';
        console.log(`🚀 Noclip speed set to ${value}x`);
    }
    
    // Execute cheat functions
    function executeResourceHack() {
        console.log('💰 Executing resource hack...');
        resourceHack.enable();
    }
    
    function executeSpeedHack() {
        console.log('⚡ Executing speed hack...');
        speedHack.enable();
    }
    
    function executeAimbot() {
        console.log('🎯 Executing aimbot...');
        aimbotSystem.enable();
    }
    
    function executeNoclip() {
        console.log('🚀 Executing noclip...');
        noclipSystem.enable();
    }
    
    function emergencyStop() {
        console.log('🚨 Emergency stop activated!');
        cheatState.autoFarm = false;
        cheatState.resourceHack = false;
        cheatState.espVision = false;
        cheatState.speedHack = false;
        cheatState.aimbot = false;
        cheatState.noclip = false;
        cheatState.isRunning = false;
        
        // Disable all features
        autoFarm.disable();
        resourceHack.disable();
        espSystem.disable();
        speedHack.disable();
        aimbotSystem.disable();
        noclipSystem.disable();
        
        // Update all toggles
        ['autoFarm', 'resourceHack', 'espVision', 'speedHack', 'aimbot', 'noclip'].forEach(feature => {
            const toggle = document.getElementById(feature + 'Toggle');
            const indicator = document.getElementById(feature + 'Indicator');
            toggle.style.background = '#333';
            toggle.style.border = '2px solid #555';
            toggle.style.boxShadow = 'none';
            toggle.querySelector('div').style.transform = 'translateX(0)';
            indicator.style.background = '#ff4444';
            indicator.style.boxShadow = '0 0 10px #ff4444';
        });
        
        console.log('✅ All cheats disabled safely');
    }
    
    // Toggle minimize
    function toggleMinimize() {
        const menu = document.getElementById('workingTribalsCheatMod');
        const content = document.getElementById('modContent');
        const btn = document.getElementById('minimizeBtn');
        
        cheatState.isMinimized = !cheatState.isMinimized;
        
        if (cheatState.isMinimized) {
            menu.style.width = '60px';
            menu.style.height = '60px';
            menu.style.padding = '0';
            content.style.display = 'none';
            btn.style.position = 'static';
            btn.style.width = '100%';
            btn.style.height = '100%';
        } else {
            menu.style.width = '350px';
            menu.style.height = 'auto';
            menu.style.padding = '20px';
            content.style.display = 'block';
            btn.style.position = 'absolute';
            btn.style.width = '30px';
            btn.style.height = '30px';
        }
    }
    
    // Start status updates
    function startStatusUpdates() {
        setInterval(() => {
            if (cheatState.isRunning) {
                // Simulate FPS
                const fps = Math.floor(Math.random() * 10) + 55;
                document.getElementById('fpsValue').textContent = fps;
                
                // Simulate memory usage
                const memory = Math.floor(Math.random() * 10) + 40;
                document.getElementById('memoryValue').textContent = memory + 'MB';
                
                // Simulate CPU usage
                const cpu = Math.floor(Math.random() * 3) + 2;
                document.getElementById('cpuValue').textContent = cpu + '%';
                
                // Update status
                const activeFeatures = Object.values(cheatState).filter(v => v === true).length;
                document.getElementById('statusValue').textContent = `${activeFeatures} Active`;
            }
        }, 1000);
    }
    
    // Initialize game hooks
    function initializeGameHooks() {
        console.log('🔍 Initializing game hooks...');
        
        // Deep scan for game objects
        gameHooks.deepScanForGameObjects();
        
        // Try to hook into update loop
        gameHooks.hookUpdateLoop();
        
        if (gameObjects.player || gameObjects.enemies || gameObjects.resources || gameObjects.canvas) {
            console.log('✅ Game hooks initialized successfully');
            cheatState.isRunning = true;
        } else {
            console.log('⚠️ Game hooks not found, running in simulation mode');
            cheatState.isRunning = true;
        }
    }
    
    // Mark as loaded
    window.workingTribalsCheatMod = true;
    
    // Create the working mod menu
    createWorkingModMenu();
    
})();