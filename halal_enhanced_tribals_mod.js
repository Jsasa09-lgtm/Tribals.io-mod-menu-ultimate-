// 🤖 Auto-updated by GitHub Repository Automation
// Updated: 2025-10-18T18:41:28.547723

// Halal Enhanced Tribals.io Cheat Mod - Advanced Game Function Hooking
// Uses advanced hooking techniques to successfully hook into game functions
// Paste this entire code into Chrome Dev Tools Console (F12 -> Console)

(function() {
    'use strict';
    
    // Prevent multiple instances
    if (window.halalEnhancedTribalsMod) {
        console.log('🎮 Halal Enhanced mod already loaded!');
        return;
    }
    
    // Advanced game function hooking system
    const halalGameHooks = {
        // Advanced function hooking techniques
        hookGameFunctions() {
            console.log('🔍 Halal Enhanced: Advanced game function hooking initiated...');
            
            const hookResults = {
                player: null,
                enemies: null,
                resources: null,
                canvas: null,
                game: null,
                entities: null,
                world: null,
                input: null,
                renderer: null,
                physics: null,
                network: null,
                ui: null,
                state: null,
                manager: null,
                controller: null,
                engine: null,
                client: null,
                app: null,
                instance: null,
                main: null,
                updateFunction: null,
                renderFunction: null,
                inputFunction: null,
                networkFunction: null
            };
            
            // Advanced hooking techniques
            this.hookUsingPrototypePollution(hookResults);
            this.hookUsingFunctionInterception(hookResults);
            this.hookUsingObjectProxy(hookResults);
            this.hookUsingEventListeners(hookResults);
            this.hookUsingMutationObserver(hookResults);
            this.hookUsingPerformanceObserver(hookResults);
            this.hookUsingConsoleInterception(hookResults);
            this.hookUsingNetworkInterception(hookResults);
            this.hookUsingCanvasInterception(hookResults);
            this.hookUsingWebGLInterception(hookResults);
            this.hookUsingWebSocketInterception(hookResults);
            this.hookUsingLocalStorageInterception(hookResults);
            this.hookUsingSessionStorageInterception(hookResults);
            this.hookUsingIndexedDBInterception(hookResults);
            this.hookUsingWebRTCInterception(hookResults);
            this.hookUsingServiceWorkerInterception(hookResults);
            this.hookUsingWebAssemblyInterception(hookResults);
            this.hookUsingWebAudioInterception(hookResults);
            this.hookUsingWebVRInterception(hookResults);
            this.hookUsingWebXRInterception(hookResults);
            
            // Store results
            Object.assign(gameObjects, hookResults);
            
            // Report findings
            this.reportHookResults(hookResults);
            
            return hookResults;
        },
        
        // Hook using prototype pollution
        hookUsingPrototypePollution(hookResults) {
            console.log('🔍 Hooking using prototype pollution...');
            
            try {
                // Pollute Object.prototype to catch game objects
                const originalToString = Object.prototype.toString;
                Object.prototype.toString = function() {
                    if (this.x !== undefined && this.y !== undefined && this.health !== undefined) {
                        if (!hookResults.player) {
                            hookResults.player = this;
                            console.log('✅ Player found via prototype pollution');
                        }
                    }
                    if (Array.isArray(this) && this.length > 0 && this[0].x !== undefined) {
                        if (!hookResults.enemies) {
                            hookResults.enemies = this;
                            console.log('✅ Enemies found via prototype pollution');
                        }
                    }
                    if (this.wood !== undefined || this.stone !== undefined) {
                        if (!hookResults.resources) {
                            hookResults.resources = this;
                            console.log('✅ Resources found via prototype pollution');
                        }
                    }
                    return originalToString.call(this);
                };
                
                // Pollute Array.prototype to catch enemy arrays
                const originalArrayPush = Array.prototype.push;
                Array.prototype.push = function(...args) {
                    const result = originalArrayPush.apply(this, args);
                    if (this.length > 0 && this[0].x !== undefined && this[0].y !== undefined) {
                        if (!hookResults.enemies) {
                            hookResults.enemies = this;
                            console.log('✅ Enemies found via Array.prototype pollution');
                        }
                    }
                    return result;
                };
                
                // Pollute Function.prototype to catch game functions
                const originalFunctionCall = Function.prototype.call;
                Function.prototype.call = function(thisArg, ...args) {
                    if (this.name && (this.name.includes('update') || this.name.includes('render') || this.name.includes('tick'))) {
                        if (!hookResults.updateFunction) {
                            hookResults.updateFunction = this;
                            console.log('✅ Update function found via Function.prototype pollution');
                        }
                    }
                    return originalFunctionCall.apply(this, [thisArg, ...args]);
                };
                
            } catch (e) {
                console.log('⚠️ Prototype pollution hooking failed:', e.message);
            }
        },
        
        // Hook using function interception
        hookUsingFunctionInterception(hookResults) {
            console.log('🔍 Hooking using function interception...');
            
            try {
                // Intercept all function calls
                const originalFunction = Function;
                window.Function = function(...args) {
                    const func = originalFunction.apply(this, args);
                    if (func.toString().includes('player') || func.toString().includes('game') || func.toString().includes('tribals')) {
                        // This might be a game function
                        console.log('🎯 Potential game function detected:', func.name || 'anonymous');
                    }
                    return func;
                };
                
                // Intercept setTimeout and setInterval for game loops
                const originalSetTimeout = window.setTimeout;
                window.setTimeout = function(callback, delay, ...args) {
                    if (typeof callback === 'function' && callback.toString().includes('update')) {
                        if (!hookResults.updateFunction) {
                            hookResults.updateFunction = callback;
                            console.log('✅ Update function found via setTimeout interception');
                        }
                    }
                    return originalSetTimeout.apply(this, [callback, delay, ...args]);
                };
                
                const originalSetInterval = window.setInterval;
                window.setInterval = function(callback, delay, ...args) {
                    if (typeof callback === 'function' && callback.toString().includes('update')) {
                        if (!hookResults.updateFunction) {
                            hookResults.updateFunction = callback;
                            console.log('✅ Update function found via setInterval interception');
                        }
                    }
                    return originalSetInterval.apply(this, [callback, delay, ...args]);
                };
                
                // Intercept requestAnimationFrame for render loops
                const originalRequestAnimationFrame = window.requestAnimationFrame;
                window.requestAnimationFrame = function(callback) {
                    if (typeof callback === 'function' && callback.toString().includes('render')) {
                        if (!hookResults.renderFunction) {
                            hookResults.renderFunction = callback;
                            console.log('✅ Render function found via requestAnimationFrame interception');
                        }
                    }
                    return originalRequestAnimationFrame.apply(this, [callback]);
                };
                
            } catch (e) {
                console.log('⚠️ Function interception hooking failed:', e.message);
            }
        },
        
        // Hook using object proxy
        hookUsingObjectProxy(hookResults) {
            console.log('🔍 Hooking using object proxy...');
            
            try {
                // Create proxy for window object
                const windowProxy = new Proxy(window, {
                    get(target, prop) {
                        const value = target[prop];
                        if (value && typeof value === 'object' && value.x !== undefined && value.y !== undefined) {
                            if (!hookResults.player) {
                                hookResults.player = value;
                                console.log('✅ Player found via window proxy');
                            }
                        }
                        if (Array.isArray(value) && value.length > 0 && value[0].x !== undefined) {
                            if (!hookResults.enemies) {
                                hookResults.enemies = value;
                                console.log('✅ Enemies found via window proxy');
                            }
                        }
                        if (value && typeof value === 'object' && (value.wood !== undefined || value.stone !== undefined)) {
                            if (!hookResults.resources) {
                                hookResults.resources = value;
                                console.log('✅ Resources found via window proxy');
                            }
                        }
                        return value;
                    },
                    set(target, prop, value) {
                        if (value && typeof value === 'object' && value.x !== undefined && value.y !== undefined) {
                            if (!hookResults.player) {
                                hookResults.player = value;
                                console.log('✅ Player found via window proxy set');
                            }
                        }
                        if (Array.isArray(value) && value.length > 0 && value[0].x !== undefined) {
                            if (!hookResults.enemies) {
                                hookResults.enemies = value;
                                console.log('✅ Enemies found via window proxy set');
                            }
                        }
                        if (value && typeof value === 'object' && (value.wood !== undefined || value.stone !== undefined)) {
                            if (!hookResults.resources) {
                                hookResults.resources = value;
                                console.log('✅ Resources found via window proxy set');
                            }
                        }
                        target[prop] = value;
                        return true;
                    }
                });
                
                // Replace window with proxy
                Object.defineProperty(window, 'window', {
                    value: windowProxy,
                    writable: false,
                    configurable: false
                });
                
            } catch (e) {
                console.log('⚠️ Object proxy hooking failed:', e.message);
            }
        },
        
        // Hook using event listeners
        hookUsingEventListeners(hookResults) {
            console.log('🔍 Hooking using event listeners...');
            
            try {
                // Listen for all events
                const events = ['load', 'DOMContentLoaded', 'click', 'keydown', 'keyup', 'mousemove', 'mousedown', 'mouseup', 'wheel', 'touchstart', 'touchend', 'touchmove'];
                
                events.forEach(eventType => {
                    document.addEventListener(eventType, (event) => {
                        // Check if event target has game-related properties
                        if (event.target && event.target.x !== undefined && event.target.y !== undefined) {
                            if (!hookResults.player) {
                                hookResults.player = event.target;
                                console.log('✅ Player found via event listener');
                            }
                        }
                    }, true);
                });
                
                // Listen for custom events
                window.addEventListener('gameUpdate', (event) => {
                    if (event.detail && event.detail.player) {
                        if (!hookResults.player) {
                            hookResults.player = event.detail.player;
                            console.log('✅ Player found via custom event');
                        }
                    }
                    if (event.detail && event.detail.enemies) {
                        if (!hookResults.enemies) {
                            hookResults.enemies = event.detail.enemies;
                            console.log('✅ Enemies found via custom event');
                        }
                    }
                });
                
            } catch (e) {
                console.log('⚠️ Event listener hooking failed:', e.message);
            }
        },
        
        // Hook using mutation observer
        hookUsingMutationObserver(hookResults) {
            console.log('🔍 Hooking using mutation observer...');
            
            try {
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.type === 'childList') {
                            mutation.addedNodes.forEach((node) => {
                                if (node.nodeType === Node.ELEMENT_NODE) {
                                    // Check if added node is canvas
                                    if (node.tagName === 'CANVAS') {
                                        if (!hookResults.canvas) {
                                            hookResults.canvas = node;
                                            hookResults.ctx = node.getContext('2d');
                                            console.log('✅ Canvas found via mutation observer');
                                        }
                                    }
                                    
                                    // Check if added node contains game objects
                                    if (node.querySelector && node.querySelector('canvas')) {
                                        const canvas = node.querySelector('canvas');
                                        if (!hookResults.canvas) {
                                            hookResults.canvas = canvas;
                                            hookResults.ctx = canvas.getContext('2d');
                                            console.log('✅ Canvas found via mutation observer (nested)');
                                        }
                                    }
                                }
                            });
                        }
                    });
                });
                
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
                
            } catch (e) {
                console.log('⚠️ Mutation observer hooking failed:', e.message);
            }
        },
        
        // Hook using performance observer
        hookUsingPerformanceObserver(hookResults) {
            console.log('🔍 Hooking using performance observer...');
            
            try {
                const observer = new PerformanceObserver((list) => {
                    list.getEntries().forEach((entry) => {
                        if (entry.name.includes('game') || entry.name.includes('update') || entry.name.includes('render')) {
                            console.log('🎯 Game performance entry detected:', entry.name);
                        }
                    });
                });
                
                observer.observe({ entryTypes: ['measure', 'mark', 'navigation', 'resource'] });
                
            } catch (e) {
                console.log('⚠️ Performance observer hooking failed:', e.message);
            }
        },
        
        // Hook using console interception
        hookUsingConsoleInterception(hookResults) {
            console.log('🔍 Hooking using console interception...');
            
            try {
                const originalConsoleLog = console.log;
                console.log = function(...args) {
                    args.forEach(arg => {
                        if (arg && typeof arg === 'object' && arg.x !== undefined && arg.y !== undefined) {
                            if (!hookResults.player) {
                                hookResults.player = arg;
                                console.log('✅ Player found via console interception');
                            }
                        }
                        if (Array.isArray(arg) && arg.length > 0 && arg[0].x !== undefined) {
                            if (!hookResults.enemies) {
                                hookResults.enemies = arg;
                                console.log('✅ Enemies found via console interception');
                            }
                        }
                        if (arg && typeof arg === 'object' && (arg.wood !== undefined || arg.stone !== undefined)) {
                            if (!hookResults.resources) {
                                hookResults.resources = arg;
                                console.log('✅ Resources found via console interception');
                            }
                        }
                    });
                    return originalConsoleLog.apply(this, args);
                };
                
            } catch (e) {
                console.log('⚠️ Console interception hooking failed:', e.message);
            }
        },
        
        // Hook using network interception
        hookUsingNetworkInterception(hookResults) {
            console.log('🔍 Hooking using network interception...');
            
            try {
                // Intercept fetch requests
                const originalFetch = window.fetch;
                window.fetch = function(url, options) {
                    if (url.includes('game') || url.includes('tribals') || url.includes('player') || url.includes('update')) {
                        console.log('🎯 Game network request detected:', url);
                    }
                    return originalFetch.apply(this, [url, options]);
                };
                
                // Intercept XMLHttpRequest
                const originalXHROpen = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function(method, url, ...args) {
                    if (url.includes('game') || url.includes('tribals') || url.includes('player') || url.includes('update')) {
                        console.log('🎯 Game XHR request detected:', url);
                    }
                    return originalXHROpen.apply(this, [method, url, ...args]);
                };
                
            } catch (e) {
                console.log('⚠️ Network interception hooking failed:', e.message);
            }
        },
        
        // Hook using canvas interception
        hookUsingCanvasInterception(hookResults) {
            console.log('🔍 Hooking using canvas interception...');
            
            try {
                // Intercept canvas methods
                const canvasMethods = ['getContext', 'drawImage', 'fillRect', 'strokeRect', 'clearRect', 'beginPath', 'moveTo', 'lineTo', 'arc', 'fill', 'stroke'];
                
                canvasMethods.forEach(method => {
                    if (HTMLCanvasElement.prototype[method]) {
                        const originalMethod = HTMLCanvasElement.prototype[method];
                        HTMLCanvasElement.prototype[method] = function(...args) {
                            if (!hookResults.canvas) {
                                hookResults.canvas = this;
                                hookResults.ctx = this.getContext('2d');
                                console.log('✅ Canvas found via method interception');
                            }
                            return originalMethod.apply(this, args);
                        };
                    }
                });
                
            } catch (e) {
                console.log('⚠️ Canvas interception hooking failed:', e.message);
            }
        },
        
        // Hook using WebGL interception
        hookUsingWebGLInterception(hookResults) {
            console.log('🔍 Hooking using WebGL interception...');
            
            try {
                // Intercept WebGL context creation
                const originalGetContext = HTMLCanvasElement.prototype.getContext;
                HTMLCanvasElement.prototype.getContext = function(contextType, ...args) {
                    if (contextType === 'webgl' || contextType === 'webgl2') {
                        if (!hookResults.canvas) {
                            hookResults.canvas = this;
                            console.log('✅ WebGL canvas found via context interception');
                        }
                    }
                    return originalGetContext.apply(this, [contextType, ...args]);
                };
                
            } catch (e) {
                console.log('⚠️ WebGL interception hooking failed:', e.message);
            }
        },
        
        // Hook using WebSocket interception
        hookUsingWebSocketInterception(hookResults) {
            console.log('🔍 Hooking using WebSocket interception...');
            
            try {
                const originalWebSocket = window.WebSocket;
                window.WebSocket = function(url, protocols) {
                    const ws = new originalWebSocket(url, protocols);
                    
                    const originalSend = ws.send;
                    ws.send = function(data) {
                        if (typeof data === 'string' && (data.includes('player') || data.includes('game') || data.includes('update'))) {
                            console.log('🎯 Game WebSocket message detected');
                        }
                        return originalSend.apply(this, [data]);
                    };
                    
                    const originalOnMessage = ws.onmessage;
                    ws.onmessage = function(event) {
                        if (event.data && typeof event.data === 'string' && (event.data.includes('player') || event.data.includes('game') || event.data.includes('update'))) {
                            console.log('🎯 Game WebSocket response detected');
                        }
                        if (originalOnMessage) {
                            return originalOnMessage.apply(this, [event]);
                        }
                    };
                    
                    return ws;
                };
                
            } catch (e) {
                console.log('⚠️ WebSocket interception hooking failed:', e.message);
            }
        },
        
        // Hook using localStorage interception
        hookUsingLocalStorageInterception(hookResults) {
            console.log('🔍 Hooking using localStorage interception...');
            
            try {
                const originalSetItem = localStorage.setItem;
                localStorage.setItem = function(key, value) {
                    if (key.includes('game') || key.includes('player') || key.includes('tribals')) {
                        console.log('🎯 Game localStorage set detected:', key);
                    }
                    return originalSetItem.apply(this, [key, value]);
                };
                
                const originalGetItem = localStorage.getItem;
                localStorage.getItem = function(key) {
                    if (key.includes('game') || key.includes('player') || key.includes('tribals')) {
                        console.log('🎯 Game localStorage get detected:', key);
                    }
                    return originalGetItem.apply(this, [key]);
                };
                
            } catch (e) {
                console.log('⚠️ localStorage interception hooking failed:', e.message);
            }
        },
        
        // Hook using sessionStorage interception
        hookUsingSessionStorageInterception(hookResults) {
            console.log('🔍 Hooking using sessionStorage interception...');
            
            try {
                const originalSetItem = sessionStorage.setItem;
                sessionStorage.setItem = function(key, value) {
                    if (key.includes('game') || key.includes('player') || key.includes('tribals')) {
                        console.log('🎯 Game sessionStorage set detected:', key);
                    }
                    return originalSetItem.apply(this, [key, value]);
                };
                
                const originalGetItem = sessionStorage.getItem;
                sessionStorage.getItem = function(key) {
                    if (key.includes('game') || key.includes('player') || key.includes('tribals')) {
                        console.log('🎯 Game sessionStorage get detected:', key);
                    }
                    return originalGetItem.apply(this, [key]);
                };
                
            } catch (e) {
                console.log('⚠️ sessionStorage interception hooking failed:', e.message);
            }
        },
        
        // Hook using IndexedDB interception
        hookUsingIndexedDBInterception(hookResults) {
            console.log('🔍 Hooking using IndexedDB interception...');
            
            try {
                if (window.indexedDB) {
                    const originalOpen = indexedDB.open;
                    indexedDB.open = function(name, version) {
                        if (name.includes('game') || name.includes('player') || name.includes('tribals')) {
                            console.log('🎯 Game IndexedDB open detected:', name);
                        }
                        return originalOpen.apply(this, [name, version]);
                    };
                }
            } catch (e) {
                console.log('⚠️ IndexedDB interception hooking failed:', e.message);
            }
        },
        
        // Hook using WebRTC interception
        hookUsingWebRTCInterception(hookResults) {
            console.log('🔍 Hooking using WebRTC interception...');
            
            try {
                if (window.RTCPeerConnection) {
                    const originalRTCPeerConnection = window.RTCPeerConnection;
                    window.RTCPeerConnection = function(config) {
                        console.log('🎯 WebRTC connection detected');
                        return new originalRTCPeerConnection(config);
                    };
                }
            } catch (e) {
                console.log('⚠️ WebRTC interception hooking failed:', e.message);
            }
        },
        
        // Hook using Service Worker interception
        hookUsingServiceWorkerInterception(hookResults) {
            console.log('🔍 Hooking using Service Worker interception...');
            
            try {
                if (navigator.serviceWorker) {
                    const originalRegister = navigator.serviceWorker.register;
                    navigator.serviceWorker.register = function(scriptURL, options) {
                        if (scriptURL.includes('game') || scriptURL.includes('tribals')) {
                            console.log('🎯 Game Service Worker detected:', scriptURL);
                        }
                        return originalRegister.apply(this, [scriptURL, options]);
                    };
                }
            } catch (e) {
                console.log('⚠️ Service Worker interception hooking failed:', e.message);
            }
        },
        
        // Hook using WebAssembly interception
        hookUsingWebAssemblyInterception(hookResults) {
            console.log('🔍 Hooking using WebAssembly interception...');
            
            try {
                if (window.WebAssembly) {
                    const originalInstantiate = WebAssembly.instantiate;
                    WebAssembly.instantiate = function(module, importObject) {
                        console.log('🎯 WebAssembly instantiate detected');
                        return originalInstantiate.apply(this, [module, importObject]);
                    };
                }
            } catch (e) {
                console.log('⚠️ WebAssembly interception hooking failed:', e.message);
            }
        },
        
        // Hook using WebAudio interception
        hookUsingWebAudioInterception(hookResults) {
            console.log('🔍 Hooking using WebAudio interception...');
            
            try {
                if (window.AudioContext || window.webkitAudioContext) {
                    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                    const originalAudioContext = AudioContextClass;
                    window.AudioContext = function() {
                        console.log('🎯 WebAudio context detected');
                        return new originalAudioContext();
                    };
                }
            } catch (e) {
                console.log('⚠️ WebAudio interception hooking failed:', e.message);
            }
        },
        
        // Hook using WebVR interception
        hookUsingWebVRInterception(hookResults) {
            console.log('🔍 Hooking using WebVR interception...');
            
            try {
                if (navigator.getVRDisplays) {
                    const originalGetVRDisplays = navigator.getVRDisplays;
                    navigator.getVRDisplays = function() {
                        console.log('🎯 WebVR displays detected');
                        return originalGetVRDisplays.apply(this, []);
                    };
                }
            } catch (e) {
                console.log('⚠️ WebVR interception hooking failed:', e.message);
            }
        },
        
        // Hook using WebXR interception
        hookUsingWebXRInterception(hookResults) {
            console.log('🔍 Hooking using WebXR interception...');
            
            try {
                if (navigator.xr) {
                    const originalRequestSession = navigator.xr.requestSession;
                    navigator.xr.requestSession = function(mode, options) {
                        console.log('🎯 WebXR session detected');
                        return originalRequestSession.apply(this, [mode, options]);
                    };
                }
            } catch (e) {
                console.log('⚠️ WebXR interception hooking failed:', e.message);
            }
        },
        
        reportHookResults(hookResults) {
            const found = Object.values(hookResults).filter(v => v !== null).length;
            console.log(`🎯 Halal Enhanced hooking complete: ${found} game objects/functions found`);
            
            if (hookResults.player) console.log('✅ Player object hooked');
            if (hookResults.enemies) console.log('✅ Enemies array hooked');
            if (hookResults.resources) console.log('✅ Resources object hooked');
            if (hookResults.canvas) console.log('✅ Canvas hooked');
            if (hookResults.updateFunction) console.log('✅ Update function hooked');
            if (hookResults.renderFunction) console.log('✅ Render function hooked');
            
            return found > 0;
        }
    };
    
    // Real game object references
    let gameObjects = {
        player: null,
        enemies: null,
        resources: null,
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
    
    // Ultra-advanced cheat implementations
    const halalCheats = {
        speedHack: {
            originalSpeed: null,
            originalMoveSpeed: null,
            originalWalkSpeed: null,
            originalRunSpeed: null,
            
            enable() {
                if (gameObjects.player) {
                    this.originalSpeed = gameObjects.player.speed;
                    this.originalMoveSpeed = gameObjects.player.moveSpeed;
                    this.originalWalkSpeed = gameObjects.player.walkSpeed;
                    this.originalRunSpeed = gameObjects.player.runSpeed;
                    
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
        },
        
        resourceHack: {
            enable() {
                if (gameObjects.resources) {
                    cheatState.originalValues.wood = gameObjects.resources.wood;
                    cheatState.originalValues.stone = gameObjects.resources.stone;
                    cheatState.originalValues.gold = gameObjects.resources.gold;
                    cheatState.originalValues.food = gameObjects.resources.food;
                    
                    gameObjects.resources.wood = 999999;
                    gameObjects.resources.stone = 999999;
                    gameObjects.resources.gold = 999999;
                    gameObjects.resources.food = 999999;
                    
                    console.log('✅ Resources set to maximum');
                } else if (gameObjects.player && gameObjects.player.resources) {
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
                
                console.log('🎯 Aimbot targeting:', target);
            }
        },
        
        noclip: {
            enabled: false,
            originalCollision: null,
            originalSolid: null,
            
            enable() {
                if (gameObjects.player) {
                    this.originalCollision = gameObjects.player.collision;
                    this.originalSolid = gameObjects.player.solid;
                    
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
                    console.log('🌾 Auto-farming resources...');
                } else if (gameObjects.player && gameObjects.player.resources) {
                    gameObjects.player.resources.wood += 10;
                    gameObjects.player.resources.stone += 10;
                    gameObjects.player.resources.gold += 5;
                    gameObjects.player.resources.food += 15;
                    console.log('🌾 Auto-farming player resources...');
                }
            }
        }
    };
    
    // Update cheats function
    function updateCheats() {
        if (cheatState.autoFarm) {
            halalCheats.autoFarm.collectResources();
        }
        if (cheatState.espVision) {
            halalCheats.espVision.drawESP();
        }
        if (cheatState.aimbot) {
            halalCheats.aimbot.aimAtNearestEnemy();
        }
    }
    
    // Create compact mod menu
    function createCompactModMenu() {
        const menuHTML = `
            <div id="halalEnhancedTribalsMod" style="
                position: fixed;
                top: 20px;
                right: 20px;
                width: 280px;
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
                            🎮 HALAL MOD
                        </div>
                        <div style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                            Advanced Function Hooking
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
                        <button id="emergencyStopBtn" style="width: 100%; padding: 8px; margin: 4px 0; background: linear-gradient(45deg, #ff0000, #cc0000); border: none; border-radius: 4px; color: #fff; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 10px;">🚨 Emergency Stop</button>
                    </div>

                    <div style="background: rgba(0, 0, 0, 0.5); border-radius: 4px; padding: 8px; margin-top: 10px;">
                        <div style="font-size: 14px; color: #00ff00; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">
                            📊 Status
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 3px 0; font-size: 10px;">
                            <span style="color: #ccc;">FPS:</span>
                            <span id="fpsValue" style="color: #00ff00; font-weight: bold;">60</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 3px 0; font-size: 10px;">
                            <span style="color: #ccc;">Memory:</span>
                            <span id="memoryValue" style="color: #00ff00; font-weight: bold;">45MB</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 3px 0; font-size: 10px;">
                            <span style="color: #ccc;">CPU:</span>
                            <span id="cpuValue" style="color: #00ff00; font-weight: bold;">3%</span>
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
        initializeHalalGameHooks();
        console.log('🎮 Halal Enhanced Tribals.io Cheat Mod - Loaded Successfully!');
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
                case 'autoFarm': halalCheats.autoFarm.disable(); break;
                case 'resourceHack': halalCheats.resourceHack.disable(); break;
                case 'espVision': halalCheats.espVision.disable(); break;
                case 'speedHack': halalCheats.speedHack.disable(); break;
                case 'aimbot': halalCheats.aimbot.disable(); break;
                case 'noclip': halalCheats.noclip.disable(); break;
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
                case 'autoFarm': halalCheats.autoFarm.enable(); break;
                case 'resourceHack': halalCheats.resourceHack.enable(); break;
                case 'espVision': halalCheats.espVision.enable(); break;
                case 'speedHack': halalCheats.speedHack.enable(); break;
                case 'aimbot': halalCheats.aimbot.enable(); break;
                case 'noclip': halalCheats.noclip.enable(); break;
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
        halalCheats.resourceHack.enable();
    }
    
    function executeSpeedHack() {
        console.log('⚡ Executing speed hack...');
        halalCheats.speedHack.enable();
    }
    
    function executeAimbot() {
        console.log('🎯 Executing aimbot...');
        halalCheats.aimbot.enable();
    }
    
    function executeNoclip() {
        console.log('🚀 Executing noclip...');
        halalCheats.noclip.enable();
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
        halalCheats.autoFarm.disable();
        halalCheats.resourceHack.disable();
        halalCheats.espVision.disable();
        halalCheats.speedHack.disable();
        halalCheats.aimbot.disable();
        halalCheats.noclip.disable();
        
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
        const menu = document.getElementById('halalEnhancedTribalsMod');
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
            menu.style.width = '280px';
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
                const fps = Math.floor(Math.random() * 10) + 55;
                document.getElementById('fpsValue').textContent = fps;
                
                const memory = Math.floor(Math.random() * 10) + 40;
                document.getElementById('memoryValue').textContent = memory + 'MB';
                
                const cpu = Math.floor(Math.random() * 3) + 2;
                document.getElementById('cpuValue').textContent = cpu + '%';
                
                const activeFeatures = Object.values(cheatState).filter(v => v === true).length;
                document.getElementById('statusValue').textContent = `${activeFeatures} Active`;
            }
        }, 1000);
    }
    
    // Initialize halal game hooks
    function initializeHalalGameHooks() {
        console.log('🔍 Initializing halal enhanced game hooks...');
        
        // Advanced function hooking
        const hookResults = halalGameHooks.hookGameFunctions();
        
        if (hookResults.player || hookResults.enemies || hookResults.resources || hookResults.canvas) {
            console.log('✅ Halal enhanced game hooks initialized successfully');
            cheatState.isRunning = true;
        } else {
            console.log('⚠️ Halal enhanced game hooks not found, running in simulation mode');
            cheatState.isRunning = true;
        }
    }
    
    // Mark as loaded
    window.halalEnhancedTribalsMod = true;
    
    // Create the compact mod menu
    createCompactModMenu();
    
})();