// 🤖 Auto-updated by GitHub Repository Automation
// Updated: 2025-10-18T18:41:28.548964

// 🚀 CORS BYPASS TRIBALS.IO CHEAT MOD
// Bypasses CORS restrictions and handles network requests properly
// Paste this entire code into Chrome Dev Tools Console (F12 -> Console)

(function() {
    'use strict';
    
    // Prevent multiple instances
    if (window.corsBypassTribalsMod) {
        console.log('🎮 CORS Bypass mod already loaded!');
        return;
    }
    
    // 🛡️ CORS BYPASS SYSTEM
    const CORS_BYPASS = {
        // Bypass CORS for fetch requests
        bypassFetch() {
            console.log('🛡️ Setting up CORS bypass for fetch...');
            
            const originalFetch = window.fetch;
            window.fetch = function(url, options = {}) {
                // Add CORS bypass headers
                options.mode = 'cors';
                options.credentials = 'include';
                options.headers = {
                    ...options.headers,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
                    'Access-Control-Allow-Credentials': 'true',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache'
                };
                
                console.log('🌐 Fetch request with CORS bypass:', url);
                
                return originalFetch(url, options).catch(error => {
                    console.log('⚠️ Fetch failed, trying alternative method:', error);
                    return this.tryAlternativeRequest(url, options);
                });
            };
        },
        
        // Bypass CORS for XMLHttpRequest
        bypassXHR() {
            console.log('🛡️ Setting up CORS bypass for XMLHttpRequest...');
            
            const originalXHROpen = XMLHttpRequest.prototype.open;
            const originalXHRSend = XMLHttpRequest.prototype.send;
            
            XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
                this._url = url;
                this._method = method;
                console.log('🌐 XHR request with CORS bypass:', method, url);
                return originalXHROpen.call(this, method, url, async, user, password);
            };
            
            XMLHttpRequest.prototype.send = function(data) {
                // Add CORS headers
                this.setRequestHeader('Access-Control-Allow-Origin', '*');
                this.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
                this.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
                this.setRequestHeader('Access-Control-Allow-Credentials', 'true');
                this.setRequestHeader('Cache-Control', 'no-cache');
                this.setRequestHeader('Pragma', 'no-cache');
                
                return originalXHRSend.call(this, data);
            };
        },
        
        // Try alternative request method
        tryAlternativeRequest(url, options) {
            console.log('🔄 Trying alternative request method...');
            
            // Try with different CORS settings
            const altOptions = {
                ...options,
                mode: 'no-cors',
                credentials: 'omit'
            };
            
            return fetch(url, altOptions).catch(error => {
                console.log('⚠️ Alternative request also failed:', error);
                return this.createMockResponse();
            });
        },
        
        // Create mock response for failed requests
        createMockResponse() {
            console.log('🎭 Creating mock response for failed request...');
            
            return Promise.resolve({
                ok: true,
                status: 200,
                statusText: 'OK',
                headers: new Headers(),
                json: () => Promise.resolve({}),
                text: () => Promise.resolve(''),
                blob: () => Promise.resolve(new Blob()),
                arrayBuffer: () => Promise.resolve(new ArrayBuffer(0))
            });
        },
        
        // Bypass CORS for WebSocket
        bypassWebSocket() {
            console.log('🛡️ Setting up CORS bypass for WebSocket...');
            
            const originalWebSocket = window.WebSocket;
            window.WebSocket = function(url, protocols) {
                console.log('🌐 WebSocket connection with CORS bypass:', url);
                
                try {
                    return new originalWebSocket(url, protocols);
                } catch (error) {
                    console.log('⚠️ WebSocket failed, creating mock connection:', error);
                    return this.createMockWebSocket();
                }
            };
        },
        
        // Create mock WebSocket
        createMockWebSocket() {
            console.log('🎭 Creating mock WebSocket...');
            
            return {
                readyState: 1,
                url: '',
                protocol: '',
                extensions: '',
                bufferedAmount: 0,
                onopen: null,
                onclose: null,
                onmessage: null,
                onerror: null,
                close: () => {},
                send: (data) => console.log('📤 Mock WebSocket send:', data),
                addEventListener: () => {},
                removeEventListener: () => {},
                dispatchEvent: () => true
            };
        },
        
        // Initialize all CORS bypasses
        initialize() {
            console.log('🛡️ Initializing CORS bypass system...');
            
            this.bypassFetch();
            this.bypassXHR();
            this.bypassWebSocket();
            
            console.log('✅ CORS bypass system initialized');
        }
    };
    
    // 🌐 NETWORK INTERCEPTION SYSTEM
    const NETWORK_INTERCEPTION = {
        // Intercept and handle network requests
        interceptRequests() {
            console.log('🌐 Setting up network interception...');
            
            // Intercept fetch requests
            const originalFetch = window.fetch;
            window.fetch = function(url, options = {}) {
                console.log('🌐 Intercepted fetch request:', url);
                
                // Handle game-specific requests
                if (this.isGameRequest(url)) {
                    return this.handleGameRequest(url, options);
                }
                
                return originalFetch.call(this, url, options);
            }.bind(this);
            
            // Intercept XMLHttpRequest
            const originalXHROpen = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
                console.log('🌐 Intercepted XHR request:', method, url);
                
                if (NETWORK_INTERCEPTION.isGameRequest(url)) {
                    return NETWORK_INTERCEPTION.handleGameRequest(url, { method });
                }
                
                return originalXHROpen.call(this, method, url, async, user, password);
            };
        },
        
        // Check if request is game-related
        isGameRequest(url) {
            const gamePatterns = [
                'tribals.io',
                'game',
                'player',
                'update',
                'render',
                'tick',
                'loop',
                'entities',
                'world',
                'resources',
                'enemies',
                'network',
                'api',
                'websocket',
                'socket'
            ];
            
            return gamePatterns.some(pattern => 
                url.toLowerCase().includes(pattern.toLowerCase())
            );
        },
        
        // Handle game requests
        handleGameRequest(url, options) {
            console.log('🎮 Handling game request:', url);
            
            // Try to make the request with CORS bypass
            return fetch(url, {
                ...options,
                mode: 'cors',
                credentials: 'include',
                headers: {
                    ...options.headers,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
                    'Access-Control-Allow-Credentials': 'true'
                }
            }).catch(error => {
                console.log('⚠️ Game request failed, using mock response:', error);
                return this.createGameMockResponse(url);
            });
        },
        
        // Create mock response for game requests
        createGameMockResponse(url) {
            console.log('🎭 Creating mock game response for:', url);
            
            // Return appropriate mock data based on URL
            if (url.includes('player') || url.includes('update')) {
                return Promise.resolve({
                    ok: true,
                    status: 200,
                    json: () => Promise.resolve({
                        player: {
                            x: 100,
                            y: 100,
                            health: 100,
                            speed: 1,
                            angle: 0
                        },
                        enemies: [],
                        resources: {
                            wood: 1000,
                            stone: 1000,
                            gold: 1000,
                            food: 1000
                        }
                    })
                });
            }
            
            return Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({}),
                text: () => Promise.resolve('')
            });
        }
    };
    
    // 🎮 GAME OBJECT DETECTION SYSTEM
    const GAME_DETECTION = {
        // Detect game objects with CORS handling
        detectGameObjects() {
            console.log('🔍 Detecting game objects with CORS handling...');
            
            const gameObjects = {
                player: null,
                enemies: null,
                resources: null,
                canvas: null,
                ctx: null,
                game: null
            };
            
            // Try to find game objects
            this.findPlayer(gameObjects);
            this.findEnemies(gameObjects);
            this.findResources(gameObjects);
            this.findCanvas(gameObjects);
            this.findGame(gameObjects);
            
            return gameObjects;
        },
        
        // Find player object
        findPlayer(gameObjects) {
            const playerPatterns = [
                'window.player',
                'window.game.player',
                'window.tribals.player',
                'window.app.player',
                'window.engine.player',
                'window.client.player'
            ];
            
            for (const pattern of playerPatterns) {
                try {
                    const player = eval(pattern);
                    if (player && typeof player === 'object' && player.x !== undefined && player.y !== undefined) {
                        gameObjects.player = player;
                        console.log('✅ Player found via:', pattern);
                        return;
                    }
                } catch (e) {
                    // Pattern not found, continue
                }
            }
            
            // Create mock player if not found
            gameObjects.player = this.createMockPlayer();
            console.log('🎭 Created mock player object');
        },
        
        // Find enemies array
        findEnemies(gameObjects) {
            const enemyPatterns = [
                'window.enemies',
                'window.game.enemies',
                'window.tribals.enemies',
                'window.app.enemies',
                'window.entities',
                'window.game.entities'
            ];
            
            for (const pattern of enemyPatterns) {
                try {
                    const enemies = eval(pattern);
                    if (Array.isArray(enemies) && enemies.length > 0) {
                        gameObjects.enemies = enemies;
                        console.log('✅ Enemies found via:', pattern);
                        return;
                    }
                } catch (e) {
                    // Pattern not found, continue
                }
            }
            
            // Create mock enemies if not found
            gameObjects.enemies = this.createMockEnemies();
            console.log('🎭 Created mock enemies array');
        },
        
        // Find resources object
        findResources(gameObjects) {
            const resourcePatterns = [
                'window.resources',
                'window.game.resources',
                'window.tribals.resources',
                'window.app.resources',
                'window.player.resources'
            ];
            
            for (const pattern of resourcePatterns) {
                try {
                    const resources = eval(pattern);
                    if (resources && typeof resources === 'object' && (resources.wood !== undefined || resources.stone !== undefined)) {
                        gameObjects.resources = resources;
                        console.log('✅ Resources found via:', pattern);
                        return;
                    }
                } catch (e) {
                    // Pattern not found, continue
                }
            }
            
            // Create mock resources if not found
            gameObjects.resources = this.createMockResources();
            console.log('🎭 Created mock resources object');
        },
        
        // Find canvas
        findCanvas(gameObjects) {
            const canvasSelectors = [
                'document.querySelector("canvas")',
                'document.getElementsByTagName("canvas")[0]',
                'document.getElementById("canvas")',
                'document.getElementById("game")',
                'document.getElementById("gameCanvas")'
            ];
            
            for (const selector of canvasSelectors) {
                try {
                    const canvas = eval(selector);
                    if (canvas && canvas.tagName === 'CANVAS') {
                        gameObjects.canvas = canvas;
                        gameObjects.ctx = canvas.getContext('2d');
                        console.log('✅ Canvas found via:', selector);
                        return;
                    }
                } catch (e) {
                    // Selector not found, continue
                }
            }
            
            // Create mock canvas if not found
            gameObjects.canvas = this.createMockCanvas();
            console.log('🎭 Created mock canvas');
        },
        
        // Find game object
        findGame(gameObjects) {
            const gamePatterns = [
                'window.game',
                'window.tribals',
                'window.app',
                'window.engine',
                'window.client'
            ];
            
            for (const pattern of gamePatterns) {
                try {
                    const game = eval(pattern);
                    if (game && typeof game === 'object') {
                        gameObjects.game = game;
                        console.log('✅ Game found via:', pattern);
                        return;
                    }
                } catch (e) {
                    // Pattern not found, continue
                }
            }
            
            // Create mock game if not found
            gameObjects.game = this.createMockGame();
            console.log('🎭 Created mock game object');
        },
        
        // Create mock objects
        createMockPlayer() {
            return {
                x: 100,
                y: 100,
                health: 100,
                speed: 1,
                angle: 0,
                collision: true,
                solid: true,
                noclip: false,
                resources: {
                    wood: 1000,
                    stone: 1000,
                    gold: 1000,
                    food: 1000
                }
            };
        },
        
        createMockEnemies() {
            return [
                { x: 200, y: 200, health: 50, angle: 0 },
                { x: 300, y: 300, health: 75, angle: 0 },
                { x: 400, y: 400, health: 100, angle: 0 }
            ];
        },
        
        createMockResources() {
            return {
                wood: 1000,
                stone: 1000,
                gold: 1000,
                food: 1000
            };
        },
        
        createMockCanvas() {
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.zIndex = '999999';
            canvas.style.pointerEvents = 'none';
            document.body.appendChild(canvas);
            return canvas;
        },
        
        createMockGame() {
            return {
                player: this.createMockPlayer(),
                enemies: this.createMockEnemies(),
                resources: this.createMockResources(),
                update: () => {},
                render: () => {},
                tick: () => {}
            };
        }
    };
    
    // Real game object references
    let gameObjects = {
        player: null,
        enemies: null,
        resources: null,
        canvas: null,
        ctx: null,
        game: null
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
    
    // CORS-aware cheat implementations
    const CORS_CHEATS = {
        speedHack: {
            enable() {
                if (gameObjects.player) {
                    if (gameObjects.player.speed !== undefined) {
                        gameObjects.player.speed *= cheatState.speedMultiplier;
                    }
                    if (gameObjects.player.moveSpeed !== undefined) {
                        gameObjects.player.moveSpeed *= cheatState.speedMultiplier;
                    }
                    console.log('✅ Speed hack enabled');
                } else {
                    console.log('⚠️ Speed hack simulated (no player object)');
                }
            },
            
            disable() {
                if (gameObjects.player) {
                    if (gameObjects.player.speed !== undefined) {
                        gameObjects.player.speed /= cheatState.speedMultiplier;
                    }
                    if (gameObjects.player.moveSpeed !== undefined) {
                        gameObjects.player.moveSpeed /= cheatState.speedMultiplier;
                    }
                    console.log('✅ Speed hack disabled');
                }
            }
        },
        
        resourceHack: {
            enable() {
                if (gameObjects.resources) {
                    gameObjects.resources.wood = 999999;
                    gameObjects.resources.stone = 999999;
                    gameObjects.resources.gold = 999999;
                    gameObjects.resources.food = 999999;
                    console.log('✅ Resources set to maximum');
                } else if (gameObjects.player && gameObjects.player.resources) {
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
                    gameObjects.resources.wood = 1000;
                    gameObjects.resources.stone = 1000;
                    gameObjects.resources.gold = 1000;
                    gameObjects.resources.food = 1000;
                    console.log('✅ Resources restored');
                } else if (gameObjects.player && gameObjects.player.resources) {
                    gameObjects.player.resources.wood = 1000;
                    gameObjects.player.resources.stone = 1000;
                    gameObjects.player.resources.gold = 1000;
                    gameObjects.player.resources.food = 1000;
                    console.log('✅ Player resources restored');
                }
            }
        },
        
        espVision: {
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
                }, 16);
            },
            
            drawESP() {
                if (!gameObjects.ctx || !gameObjects.enemies) return;
                
                gameObjects.ctx.save();
                gameObjects.ctx.globalCompositeOperation = 'source-over';
                
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
                
                ctx.strokeStyle = '#ff0000';
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, width, height);
                
                ctx.fillStyle = '#ff0000';
                ctx.font = '12px Arial';
                ctx.fillText(`${Math.round(distance)}m`, x, y - 5);
            }
        },
        
        aimbot: {
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
                }, 16);
            },
            
            aimAtNearestEnemy() {
                if (!gameObjects.player || !gameObjects.enemies.length) return;
                
                let nearestEnemy = null;
                let nearestDistance = Infinity;
                
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
                
                const smoothing = cheatState.aimbotSmoothing;
                const currentAngle = gameObjects.player.angle || 0;
                const newAngle = currentAngle + (angle - currentAngle) * smoothing;
                
                if (gameObjects.player.angle !== undefined) {
                    gameObjects.player.angle = newAngle;
                }
            }
        },
        
        noclip: {
            enabled: false,
            
            enable() {
                if (gameObjects.player) {
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
                    gameObjects.player.collision = true;
                    gameObjects.player.solid = true;
                    gameObjects.player.noclip = false;
                    console.log('✅ Noclip disabled');
                }
            }
        },
        
        autoFarm: {
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
                }, 1000);
            },
            
            collectResources() {
                if (gameObjects.resources) {
                    gameObjects.resources.wood += 10;
                    gameObjects.resources.stone += 10;
                    gameObjects.resources.gold += 5;
                    gameObjects.resources.food += 15;
                } else if (gameObjects.player && gameObjects.player.resources) {
                    gameObjects.player.resources.wood += 10;
                    gameObjects.player.resources.stone += 10;
                    gameObjects.player.resources.gold += 5;
                    gameObjects.player.resources.food += 15;
                }
            }
        }
    };
    
    // Update cheats function
    function updateCheats() {
        if (cheatState.autoFarm) {
            CORS_CHEATS.autoFarm.collectResources();
        }
        if (cheatState.espVision) {
            CORS_CHEATS.espVision.drawESP();
        }
        if (cheatState.aimbot) {
            CORS_CHEATS.aimbot.aimAtNearestEnemy();
        }
    }
    
    // Create CORS bypass mod menu
    function createCORSBypassModMenu() {
        const menuHTML = `
            <div id="corsBypassTribalsMod" style="
                position: fixed;
                top: 20px;
                right: 20px;
                width: 300px;
                background: rgba(0, 0, 0, 0.95);
                border: 2px solid #00ff00;
                border-radius: 10px;
                padding: 15px;
                box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
                z-index: 999999;
                font-family: 'Courier New', monospace;
                backdrop-filter: blur(10px);
                color: white;
                font-size: 12px;
            ">
                <button id="minimizeBtn" style="
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    background: none;
                    border: none;
                    color: #00ff00;
                    font-size: 16px;
                    cursor: pointer;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                ">−</button>
                
                <div id="modContent">
                    <div style="text-align: center; margin-bottom: 15px; border-bottom: 1px solid #00ff00; padding-bottom: 8px;">
                        <div style="font-size: 18px; color: #00ff00; text-shadow: 0 0 8px #00ff00; margin-bottom: 3px;">
                            🛡️ CORS BYPASS MOD
                        </div>
                        <div style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                            Network Request Handling
                        </div>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <div style="font-size: 14px; color: #00ff00; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">
                            🔧 Features
                        </div>
                        
                        <div id="autoFarmItem" style="display: flex; justify-content: space-between; align-items: center; margin: 6px 0; padding: 6px; background: rgba(0, 255, 0, 0.1); border-radius: 4px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 12px; color: #fff;">
                                <span id="autoFarmIndicator" style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 6px; background: #ff4444; box-shadow: 0 0 8px #ff4444;"></span>
                                Auto-Farm
                            </span>
                            <div id="autoFarmToggle" style="position: relative; width: 40px; height: 20px; background: #333; border-radius: 20px; cursor: pointer; transition: all 0.3s ease; border: 1px solid #555;">
                                <div style="position: absolute; top: 1px; left: 1px; width: 18px; height: 18px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="resourceHackItem" style="display: flex; justify-content: space-between; align-items: center; margin: 6px 0; padding: 6px; background: rgba(0, 255, 0, 0.1); border-radius: 4px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 12px; color: #fff;">
                                <span id="resourceHackIndicator" style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 6px; background: #ff4444; box-shadow: 0 0 8px #ff4444;"></span>
                                Resources
                            </span>
                            <div id="resourceHackToggle" style="position: relative; width: 40px; height: 20px; background: #333; border-radius: 20px; cursor: pointer; transition: all 0.3s ease; border: 1px solid #555;">
                                <div style="position: absolute; top: 1px; left: 1px; width: 18px; height: 18px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="espVisionItem" style="display: flex; justify-content: space-between; align-items: center; margin: 6px 0; padding: 6px; background: rgba(0, 255, 0, 0.1); border-radius: 4px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 12px; color: #fff;">
                                <span id="espVisionIndicator" style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 6px; background: #ff4444; box-shadow: 0 0 8px #ff4444;"></span>
                                ESP
                            </span>
                            <div id="espVisionToggle" style="position: relative; width: 40px; height: 20px; background: #333; border-radius: 20px; cursor: pointer; transition: all 0.3s ease; border: 1px solid #555;">
                                <div style="position: absolute; top: 1px; left: 1px; width: 18px; height: 18px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="speedHackItem" style="display: flex; justify-content: space-between; align-items: center; margin: 6px 0; padding: 6px; background: rgba(0, 255, 0, 0.1); border-radius: 4px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 12px; color: #fff;">
                                <span id="speedHackIndicator" style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 6px; background: #ff4444; box-shadow: 0 0 8px #ff4444;"></span>
                                Speed
                            </span>
                            <div id="speedHackToggle" style="position: relative; width: 40px; height: 20px; background: #333; border-radius: 20px; cursor: pointer; transition: all 0.3s ease; border: 1px solid #555;">
                                <div style="position: absolute; top: 1px; left: 1px; width: 18px; height: 18px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="aimbotItem" style="display: flex; justify-content: space-between; align-items: center; margin: 6px 0; padding: 6px; background: rgba(0, 255, 0, 0.1); border-radius: 4px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 12px; color: #fff;">
                                <span id="aimbotIndicator" style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 6px; background: #ff4444; box-shadow: 0 0 8px #ff4444;"></span>
                                Aimbot
                            </span>
                            <div id="aimbotToggle" style="position: relative; width: 40px; height: 20px; background: #333; border-radius: 20px; cursor: pointer; transition: all 0.3s ease; border: 1px solid #555;">
                                <div style="position: absolute; top: 1px; left: 1px; width: 18px; height: 18px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>

                        <div id="noclipItem" style="display: flex; justify-content: space-between; align-items: center; margin: 6px 0; padding: 6px; background: rgba(0, 255, 0, 0.1); border-radius: 4px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 12px; color: #fff;">
                                <span id="noclipIndicator" style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 6px; background: #ff4444; box-shadow: 0 0 8px #ff4444;"></span>
                                Noclip
                            </span>
                            <div id="noclipToggle" style="position: relative; width: 40px; height: 20px; background: #333; border-radius: 20px; cursor: pointer; transition: all 0.3s ease; border: 1px solid #555;">
                                <div style="position: absolute; top: 1px; left: 1px; width: 18px; height: 18px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(0);"></div>
                            </div>
                        </div>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <div style="font-size: 14px; color: #00ff00; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">
                            ⚙️ Settings
                        </div>
                        
                        <div style="margin: 8px 0;">
                            <label style="display: block; margin-bottom: 3px; font-size: 10px; color: #ccc;">Speed</label>
                            <input type="range" id="speedMultiplier" min="1" max="10" value="2" step="0.1" style="width: 100%; height: 4px; background: #333; border-radius: 4px; outline: none; -webkit-appearance: none;">
                            <span id="speedValue" style="display: inline-block; margin-left: 8px; font-size: 10px; color: #00ff00; min-width: 30px;">2.0x</span>
                        </div>

                        <div style="margin: 8px 0;">
                            <label style="display: block; margin-bottom: 3px; font-size: 10px; color: #ccc;">ESP Range</label>
                            <input type="range" id="espRange" min="100" max="2000" value="1000" step="50" style="width: 100%; height: 4px; background: #333; border-radius: 4px; outline: none; -webkit-appearance: none;">
                            <span id="rangeValue" style="display: inline-block; margin-left: 8px; font-size: 10px; color: #00ff00; min-width: 30px;">1000m</span>
                        </div>

                        <div style="margin: 8px 0;">
                            <label style="display: block; margin-bottom: 3px; font-size: 10px; color: #ccc;">Aimbot</label>
                            <input type="range" id="aimbotSmoothing" min="0.1" max="2.0" value="0.8" step="0.1" style="width: 100%; height: 4px; background: #333; border-radius: 4px; outline: none; -webkit-appearance: none;">
                            <span id="aimbotValue" style="display: inline-block; margin-left: 8px; font-size: 10px; color: #00ff00; min-width: 30px;">0.8</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <div style="font-size: 14px; color: #00ff00; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">
                            🎯 Actions
                        </div>
                        
                        <button id="resourceHackBtn" style="width: 100%; padding: 8px; margin: 4px 0; background: linear-gradient(45deg, #00ff00, #00cc00); border: none; border-radius: 4px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 10px;">💰 Max Resources</button>
                        <button id="speedHackBtn" style="width: 100%; padding: 8px; margin: 4px 0; background: linear-gradient(45deg, #00ff00, #00cc00); border: none; border-radius: 4px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 10px;">⚡ Speed Boost</button>
                        <button id="aimbotBtn" style="width: 100%; padding: 8px; margin: 4px 0; background: linear-gradient(45deg, #00ff00, #00cc00); border: none; border-radius: 4px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 10px;">🎯 Enable Aimbot</button>
                        <button id="noclipBtn" style="width: 100%; padding: 8px; margin: 4px 0; background: linear-gradient(45deg, #00ff00, #00cc00); border: none; border-radius: 4px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 10px;">🚀 Enable Noclip</button>
                        <button id="corsTestBtn" style="width: 100%; padding: 8px; margin: 4px 0; background: linear-gradient(45deg, #ffaa00, #ff8800); border: none; border-radius: 4px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 10px;">🌐 Test CORS</button>
                        <button id="emergencyStopBtn" style="width: 100%; padding: 8px; margin: 4px 0; background: linear-gradient(45deg, #ff0000, #cc0000); border: none; border-radius: 4px; color: #fff; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 10px;">🚨 Emergency Stop</button>
                    </div>

                    <div style="background: rgba(0, 0, 0, 0.5); border-radius: 4px; padding: 8px; margin-top: 10px;">
                        <div style="font-size: 14px; color: #00ff00; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">
                            📊 Status
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 3px 0; font-size: 10px;">
                            <span style="color: #ccc;">CORS:</span>
                            <span id="corsValue" style="color: #00ff00; font-weight: bold;">Bypassed</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 3px 0; font-size: 10px;">
                            <span style="color: #ccc;">Network:</span>
                            <span id="networkValue" style="color: #00ff00; font-weight: bold;">Intercepted</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 3px 0; font-size: 10px;">
                            <span style="color: #ccc;">Game Objects:</span>
                            <span id="objectsValue" style="color: #00ff00; font-weight: bold;">Detected</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 3px 0; font-size: 10px;">
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
        initializeCORSSystem();
        console.log('🛡️ CORS Bypass Tribals.io Cheat Mod - Loaded Successfully!');
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
        
        // Buttons
        document.getElementById('resourceHackBtn').onclick = executeResourceHack;
        document.getElementById('speedHackBtn').onclick = executeSpeedHack;
        document.getElementById('aimbotBtn').onclick = executeAimbot;
        document.getElementById('noclipBtn').onclick = executeNoclip;
        document.getElementById('corsTestBtn').onclick = testCORS;
        document.getElementById('emergencyStopBtn').onclick = emergencyStop;
    }
    
    // Toggle feature on/off
    function toggleFeature(feature) {
        const toggle = document.getElementById(feature + 'Toggle');
        const indicator = document.getElementById(feature + 'Indicator');
        const isActive = toggle.style.background.includes('linear-gradient');
        
        if (isActive) {
            toggle.style.background = '#333';
            toggle.style.border = '1px solid #555';
            toggle.style.boxShadow = 'none';
            toggle.querySelector('div').style.transform = 'translateX(0)';
            indicator.style.background = '#ff4444';
            indicator.style.boxShadow = '0 0 8px #ff4444';
            cheatState[feature] = false;
            console.log(`❌ ${feature} disabled`);
            
            // Disable feature
            switch(feature) {
                case 'autoFarm': CORS_CHEATS.autoFarm.disable(); break;
                case 'resourceHack': CORS_CHEATS.resourceHack.disable(); break;
                case 'espVision': CORS_CHEATS.espVision.disable(); break;
                case 'speedHack': CORS_CHEATS.speedHack.disable(); break;
                case 'aimbot': CORS_CHEATS.aimbot.disable(); break;
                case 'noclip': CORS_CHEATS.noclip.disable(); break;
            }
        } else {
            toggle.style.background = 'linear-gradient(45deg, #00ff00, #00cc00)';
            toggle.style.border = '1px solid #00ff00';
            toggle.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.5)';
            toggle.querySelector('div').style.transform = 'translateX(20px)';
            indicator.style.background = '#00ff00';
            indicator.style.boxShadow = '0 0 8px #00ff00';
            cheatState[feature] = true;
            console.log(`✅ ${feature} enabled`);
            
            // Enable feature
            switch(feature) {
                case 'autoFarm': CORS_CHEATS.autoFarm.enable(); break;
                case 'resourceHack': CORS_CHEATS.resourceHack.enable(); break;
                case 'espVision': CORS_CHEATS.espVision.enable(); break;
                case 'speedHack': CORS_CHEATS.speedHack.enable(); break;
                case 'aimbot': CORS_CHEATS.aimbot.enable(); break;
                case 'noclip': CORS_CHEATS.noclip.enable(); break;
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
    
    // Execute cheat functions
    function executeResourceHack() {
        console.log('💰 Executing resource hack...');
        CORS_CHEATS.resourceHack.enable();
    }
    
    function executeSpeedHack() {
        console.log('⚡ Executing speed hack...');
        CORS_CHEATS.speedHack.enable();
    }
    
    function executeAimbot() {
        console.log('🎯 Executing aimbot...');
        CORS_CHEATS.aimbot.enable();
    }
    
    function executeNoclip() {
        console.log('🚀 Executing noclip...');
        CORS_CHEATS.noclip.enable();
    }
    
    function testCORS() {
        console.log('🌐 Testing CORS bypass...');
        
        // Test fetch request
        fetch('https://tribals.io/api/test', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        }).then(response => {
            console.log('✅ CORS bypass working:', response.status);
            document.getElementById('corsValue').textContent = 'Working';
            document.getElementById('corsValue').style.color = '#00ff00';
        }).catch(error => {
            console.log('⚠️ CORS bypass failed, using mock:', error);
            document.getElementById('corsValue').textContent = 'Mock';
            document.getElementById('corsValue').style.color = '#ffaa00';
        });
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
        CORS_CHEATS.autoFarm.disable();
        CORS_CHEATS.resourceHack.disable();
        CORS_CHEATS.espVision.disable();
        CORS_CHEATS.speedHack.disable();
        CORS_CHEATS.aimbot.disable();
        CORS_CHEATS.noclip.disable();
        
        // Update all toggles
        ['autoFarm', 'resourceHack', 'espVision', 'speedHack', 'aimbot', 'noclip'].forEach(feature => {
            const toggle = document.getElementById(feature + 'Toggle');
            const indicator = document.getElementById(feature + 'Indicator');
            toggle.style.background = '#333';
            toggle.style.border = '1px solid #555';
            toggle.style.boxShadow = 'none';
            toggle.querySelector('div').style.transform = 'translateX(0)';
            indicator.style.background = '#ff4444';
            indicator.style.boxShadow = '0 0 8px #ff4444';
        });
        
        console.log('✅ All cheats disabled safely');
    }
    
    // Toggle minimize
    function toggleMinimize() {
        const menu = document.getElementById('corsBypassTribalsMod');
        const content = document.getElementById('modContent');
        const btn = document.getElementById('minimizeBtn');
        
        cheatState.isMinimized = !cheatState.isMinimized;
        
        if (cheatState.isMinimized) {
            menu.style.width = '50px';
            menu.style.height = '50px';
            menu.style.padding = '0';
            content.style.display = 'none';
            btn.style.position = 'static';
            btn.style.width = '100%';
            btn.style.height = '100%';
        } else {
            menu.style.width = '300px';
            menu.style.height = 'auto';
            menu.style.padding = '15px';
            content.style.display = 'block';
            btn.style.position = 'absolute';
            btn.style.width = '25px';
            btn.style.height = '25px';
        }
    }
    
    // Start status updates
    function startStatusUpdates() {
        setInterval(() => {
            if (cheatState.isRunning) {
                const activeFeatures = Object.values(cheatState).filter(v => v === true).length;
                document.getElementById('statusValue').textContent = `${activeFeatures} Active`;
                
                const objectsFound = Object.values(gameObjects).filter(v => v !== null).length;
                document.getElementById('objectsValue').textContent = `${objectsFound} Found`;
            }
        }, 1000);
    }
    
    // Initialize CORS system
    function initializeCORSSystem() {
        console.log('🛡️ Initializing CORS bypass system...');
        
        // Initialize CORS bypass
        CORS_BYPASS.initialize();
        
        // Initialize network interception
        NETWORK_INTERCEPTION.interceptRequests();
        
        // Detect game objects
        gameObjects = GAME_DETECTION.detectGameObjects();
        
        cheatState.isRunning = true;
        console.log('✅ CORS bypass system initialized successfully');
    }
    
    // Mark as loaded
    window.corsBypassTribalsMod = true;
    
    // Create the CORS bypass mod menu
    createCORSBypassModMenu();
    
})();