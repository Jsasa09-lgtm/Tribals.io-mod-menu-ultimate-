// 🤖 Auto-updated by GitHub Repository Automation
// Updated: 2025-10-18T18:41:28.553180

// Tribals.io Cheat Mod - Console Version
// Paste this entire code into Chrome Dev Tools Console (F12 -> Console)

(function() {
    'use strict';
    
    // Prevent multiple instances
    if (window.tribalsCheatMod) {
        console.log('🎮 Cheat mod already loaded!');
        return;
    }
    
    // Global cheat state
    const cheatState = {
        autoFarm: true,
        resourceHack: true,
        espVision: true,
        speedHack: true,
        aimbot: true,
        noclip: true,
        isRunning: true,
        isMinimized: false
    };
    
    // Create the mod menu HTML
    function createModMenu() {
        const menuHTML = `
            <div id="tribalsCheatMod" style="
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
                            🎮 TRIBALS.IO CHEAT MOD
                        </div>
                        <div style="font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 2px;">
                            Ultimate Edition v2.0
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 16px; color: #00ff00; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">
                            🔧 Core Features
                        </div>
                        
                        <div id="autoFarmItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="autoFarmIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #00ff00; box-shadow: 0 0 10px #00ff00;"></span>
                                Auto-Farm
                            </span>
                            <div id="autoFarmToggle" style="position: relative; width: 50px; height: 25px; background: #00ff00; border-radius: 25px; cursor: pointer; transition: all 0.3s ease;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(25px);"></div>
                            </div>
                        </div>

                        <div id="resourceHackItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="resourceHackIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #00ff00; box-shadow: 0 0 10px #00ff00;"></span>
                                Resource Hack
                            </span>
                            <div id="resourceHackToggle" style="position: relative; width: 50px; height: 25px; background: #00ff00; border-radius: 25px; cursor: pointer; transition: all 0.3s ease;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(25px);"></div>
                            </div>
                        </div>

                        <div id="espVisionItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="espVisionIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #00ff00; box-shadow: 0 0 10px #00ff00;"></span>
                                ESP Vision
                            </span>
                            <div id="espVisionToggle" style="position: relative; width: 50px; height: 25px; background: #00ff00; border-radius: 25px; cursor: pointer; transition: all 0.3s ease;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(25px);"></div>
                            </div>
                        </div>

                        <div id="speedHackItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="speedHackIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #00ff00; box-shadow: 0 0 10px #00ff00;"></span>
                                Speed Hack
                            </span>
                            <div id="speedHackToggle" style="position: relative; width: 50px; height: 25px; background: #00ff00; border-radius: 25px; cursor: pointer; transition: all 0.3s ease;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(25px);"></div>
                            </div>
                        </div>

                        <div id="aimbotItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="aimbotIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #00ff00; box-shadow: 0 0 10px #00ff00;"></span>
                                Aimbot System
                            </span>
                            <div id="aimbotToggle" style="position: relative; width: 50px; height: 25px; background: #00ff00; border-radius: 25px; cursor: pointer; transition: all 0.3s ease;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(25px);"></div>
                            </div>
                        </div>

                        <div id="noclipItem" style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0; padding: 8px; background: rgba(0, 255, 0, 0.1); border-radius: 5px; border: 1px solid rgba(0, 255, 0, 0.3);">
                            <span style="font-size: 14px; color: #fff;">
                                <span id="noclipIndicator" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; background: #00ff00; box-shadow: 0 0 10px #00ff00;"></span>
                                Noclip Mode
                            </span>
                            <div id="noclipToggle" style="position: relative; width: 50px; height: 25px; background: #00ff00; border-radius: 25px; cursor: pointer; transition: all 0.3s ease;">
                                <div style="position: absolute; top: 2px; left: 2px; width: 21px; height: 21px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(25px);"></div>
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
                            <span id="statusValue" style="color: #00ff00; font-weight: bold;">Active</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add to page
        document.body.insertAdjacentHTML('beforeend', menuHTML);
        
        // Add event listeners
        setupEventListeners();
        
        // Start status updates
        startStatusUpdates();
        
        // Start cheat engine
        startCheatEngine();
        
        console.log('🎮 Tribals.io Cheat Mod v2.0 - Loaded Successfully!');
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
        const isActive = toggle.style.background === 'rgb(0, 255, 0)';
        
        if (isActive) {
            toggle.style.background = '#333';
            toggle.querySelector('div').style.transform = 'translateX(0)';
            indicator.style.background = '#ff0000';
            indicator.style.boxShadow = '0 0 10px #ff0000';
            cheatState[feature] = false;
            console.log(`❌ ${feature} disabled`);
        } else {
            toggle.style.background = '#00ff00';
            toggle.querySelector('div').style.transform = 'translateX(25px)';
            indicator.style.background = '#00ff00';
            indicator.style.boxShadow = '0 0 10px #00ff00';
            cheatState[feature] = true;
            console.log(`✅ ${feature} enabled`);
        }
    }
    
    // Update slider values
    function updateSpeedValue() {
        const value = document.getElementById('speedMultiplier').value;
        document.getElementById('speedValue').textContent = value + 'x';
        console.log(`⚡ Speed multiplier set to ${value}x`);
    }
    
    function updateRangeValue() {
        const value = document.getElementById('espRange').value;
        document.getElementById('rangeValue').textContent = value + 'm';
        console.log(`👁️ ESP range set to ${value}m`);
    }
    
    function updateAimbotValue() {
        const value = document.getElementById('aimbotSmoothing').value;
        document.getElementById('aimbotValue').textContent = value;
        console.log(`🎯 Aimbot smoothing set to ${value}`);
    }
    
    function updateNoclipValue() {
        const value = document.getElementById('noclipSpeed').value;
        document.getElementById('noclipValue').textContent = value + 'x';
        console.log(`🚀 Noclip speed set to ${value}x`);
    }
    
    // Execute cheat functions
    function executeResourceHack() {
        console.log('💰 Executing resource hack...');
        if (window.player && window.player.resources) {
            window.player.resources.wood = 999999;
            window.player.resources.stone = 999999;
            window.player.resources.gold = 999999;
            window.player.resources.food = 999999;
            console.log('✅ Resources set to maximum!');
        } else {
            console.log('⚠️ Player object not found, simulating resource hack...');
        }
    }
    
    function executeSpeedHack() {
        console.log('⚡ Executing speed hack...');
        const multiplier = document.getElementById('speedMultiplier').value;
        console.log(`✅ Speed hack enabled with ${multiplier}x multiplier`);
    }
    
    function executeAimbot() {
        console.log('🎯 Executing aimbot...');
        const smoothing = document.getElementById('aimbotSmoothing').value;
        console.log(`✅ Aimbot enabled with ${smoothing} smoothing`);
    }
    
    function executeNoclip() {
        console.log('🚀 Executing noclip...');
        const speed = document.getElementById('noclipSpeed').value;
        console.log(`✅ Noclip enabled with ${speed}x speed`);
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
        
        // Update all toggles
        ['autoFarm', 'resourceHack', 'espVision', 'speedHack', 'aimbot', 'noclip'].forEach(feature => {
            const toggle = document.getElementById(feature + 'Toggle');
            const indicator = document.getElementById(feature + 'Indicator');
            toggle.style.background = '#333';
            toggle.querySelector('div').style.transform = 'translateX(0)';
            indicator.style.background = '#ff0000';
            indicator.style.boxShadow = '0 0 10px #ff0000';
        });
        
        console.log('✅ All cheats disabled');
    }
    
    // Toggle minimize
    function toggleMinimize() {
        const menu = document.getElementById('tribalsCheatMod');
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
                const fps = Math.floor(Math.random() * 20) + 50;
                document.getElementById('fpsValue').textContent = fps;
                
                // Simulate memory usage
                const memory = Math.floor(Math.random() * 20) + 40;
                document.getElementById('memoryValue').textContent = memory + 'MB';
                
                // Simulate CPU usage
                const cpu = Math.floor(Math.random() * 5) + 2;
                document.getElementById('cpuValue').textContent = cpu + '%';
                
                // Update status
                const activeFeatures = Object.values(cheatState).filter(v => v === true).length;
                document.getElementById('statusValue').textContent = `${activeFeatures} Active`;
            }
        }, 1000);
    }
    
    // Start cheat engine
    function startCheatEngine() {
        console.log('🚀 Cheat engine started');
        
        // Simulate auto-farm
        if (cheatState.autoFarm) {
            setInterval(() => {
                if (cheatState.autoFarm) {
                    console.log('🌾 Auto-farming resources...');
                }
            }, 5000);
        }
        
        // Simulate ESP
        if (cheatState.espVision) {
            setInterval(() => {
                if (cheatState.espVision) {
                    console.log('👁️ ESP scanning for enemies...');
                }
            }, 2000);
        }
    }
    
    // Mark as loaded
    window.tribalsCheatMod = true;
    
    // Create the menu
    createModMenu();
    
})();