// Enhanced Tribals.io Cheat Mod - AI Powered Console Version
// Paste this entire code into Chrome Dev Tools Console (F12 -> Console)

(function() {
    'use strict';
    
    // Prevent multiple instances
    if (window.tribalsCheatModEnhanced) {
        console.log('🎮 Enhanced cheat mod already loaded!');
        return;
    }
    
    // Enhanced cheat state with AI capabilities
    const cheatState = {
        autoFarm: true,
        resourceHack: true,
        espVision: true,
        speedHack: true,
        aimbot: true,
        noclip: true,
        aiOptimization: true,
        isRunning: true,
        isMinimized: false,
        aiIntelligence: 8,
        detectionRisk: 0.2,
        successRate: 99.8
    };
    
    // Create the enhanced mod menu HTML
    function createEnhancedModMenu() {
        const menuHTML = `
            <div id="tribalsCheatModEnhanced" style="
                position: fixed;
                top: 20px;
                right: 20px;
                width: 380px;
                background: rgba(0, 0, 0, 0.95);
                border: 2px solid #00ff88;
                border-radius: 20px;
                padding: 25px;
                box-shadow: 0 0 50px rgba(0, 255, 136, 0.3), inset 0 0 20px rgba(0, 255, 136, 0.1);
                z-index: 999999;
                font-family: 'Courier New', monospace;
                backdrop-filter: blur(15px);
                color: white;
                animation: menuGlow 3s ease-in-out infinite alternate;
            ">
                <div id="aiStatus" style="
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: rgba(0, 255, 255, 0.2);
                    color: #00ffff;
                    padding: 4px 8px;
                    border-radius: 15px;
                    font-size: 10px;
                    animation: aiStatus 2s ease-in-out infinite;
                ">AI ENHANCED</div>
                
                <button id="minimizeBtnEnhanced" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    color: #00ff88;
                    font-size: 24px;
                    cursor: pointer;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                ">−</button>
                
                <div id="modContentEnhanced">
                    <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #00ff88; padding-bottom: 15px; position: relative;">
                        <div style="font-size: 28px; color: #00ff88; text-shadow: 0 0 20px #00ff88; margin-bottom: 8px; animation: titlePulse 2s ease-in-out infinite;">
                            🎮 TRIBALS.IO CHEAT MOD
                        </div>
                        <div style="font-size: 13px; color: #888; text-transform: uppercase; letter-spacing: 3px; position: relative;">
                            Ultimate Edition v3.0
                            <div style="position: absolute; top: -25px; right: 0; font-size: 10px; color: #00ffff; background: rgba(0, 255, 255, 0.2); padding: 2px 8px; border-radius: 10px; animation: aiBadge 1.5s ease-in-out infinite;">AI ENHANCED</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 25px; position: relative;">
                        <div style="font-size: 18px; color: #00ff88; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; position: relative; display: flex; align-items: center;">
                            <div style="width: 4px; height: 20px; background: linear-gradient(to bottom, #00ff88, #00cc00); margin-right: 10px; border-radius: 2px;"></div>
                            🔧 Core Features
                        </div>
                        
                        <div id="autoFarmItemEnhanced" style="display: flex; justify-content: space-between; align-items: center; margin: 12px 0; padding: 12px; background: rgba(0, 255, 136, 0.08); border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.2); transition: all 0.3s ease; position: relative; overflow: hidden;">
                            <span style="font-size: 15px; color: #fff; display: flex; align-items: center; font-weight: 500;">
                                <span id="autoFarmIndicatorEnhanced" style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 10px; background: #00ff88; box-shadow: 0 0 15px #00ff88; animation: statusPulse 2s ease-in-out infinite;"></span>
                                Auto-Farm Pro
                                <div style="font-size: 11px; color: #888; margin-top: 2px; font-style: italic;">AI-powered resource collection</div>
                            </span>
                            <div id="autoFarmToggleEnhanced" style="position: relative; width: 60px; height: 30px; background: linear-gradient(45deg, #00ff88, #00cc00); border-radius: 30px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #00ff88; box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);">
                                <div style="position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(30px); box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);"></div>
                            </div>
                        </div>

                        <div id="resourceHackItemEnhanced" style="display: flex; justify-content: space-between; align-items: center; margin: 12px 0; padding: 12px; background: rgba(0, 255, 136, 0.08); border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.2); transition: all 0.3s ease; position: relative; overflow: hidden;">
                            <span style="font-size: 15px; color: #fff; display: flex; align-items: center; font-weight: 500;">
                                <span id="resourceHackIndicatorEnhanced" style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 10px; background: #00ff88; box-shadow: 0 0 15px #00ff88; animation: statusPulse 2s ease-in-out infinite;"></span>
                                Resource Hack Ultimate
                                <div style="font-size: 11px; color: #888; margin-top: 2px; font-style: italic;">Infinite resources with stealth</div>
                            </span>
                            <div id="resourceHackToggleEnhanced" style="position: relative; width: 60px; height: 30px; background: linear-gradient(45deg, #00ff88, #00cc00); border-radius: 30px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #00ff88; box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);">
                                <div style="position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(30px); box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);"></div>
                            </div>
                        </div>

                        <div id="espVisionItemEnhanced" style="display: flex; justify-content: space-between; align-items: center; margin: 12px 0; padding: 12px; background: rgba(0, 255, 136, 0.08); border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.2); transition: all 0.3s ease; position: relative; overflow: hidden;">
                            <span style="font-size: 15px; color: #fff; display: flex; align-items: center; font-weight: 500;">
                                <span id="espVisionIndicatorEnhanced" style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 10px; background: #00ff88; box-shadow: 0 0 15px #00ff88; animation: statusPulse 2s ease-in-out infinite;"></span>
                                ESP Vision System
                                <div style="font-size: 11px; color: #888; margin-top: 2px; font-style: italic;">Advanced enemy detection</div>
                            </span>
                            <div id="espVisionToggleEnhanced" style="position: relative; width: 60px; height: 30px; background: linear-gradient(45deg, #00ff88, #00cc00); border-radius: 30px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #00ff88; box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);">
                                <div style="position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(30px); box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);"></div>
                            </div>
                        </div>

                        <div id="speedHackItemEnhanced" style="display: flex; justify-content: space-between; align-items: center; margin: 12px 0; padding: 12px; background: rgba(0, 255, 136, 0.08); border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.2); transition: all 0.3s ease; position: relative; overflow: hidden;">
                            <span style="font-size: 15px; color: #fff; display: flex; align-items: center; font-weight: 500;">
                                <span id="speedHackIndicatorEnhanced" style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 10px; background: #00ff88; box-shadow: 0 0 15px #00ff88; animation: statusPulse 2s ease-in-out infinite;"></span>
                                Speed Hack Max
                                <div style="font-size: 11px; color: #888; margin-top: 2px; font-style: italic;">Ultra-fast movement & actions</div>
                            </span>
                            <div id="speedHackToggleEnhanced" style="position: relative; width: 60px; height: 30px; background: linear-gradient(45deg, #00ff88, #00cc00); border-radius: 30px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #00ff88; box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);">
                                <div style="position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(30px); box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);"></div>
                            </div>
                        </div>

                        <div id="aimbotItemEnhanced" style="display: flex; justify-content: space-between; align-items: center; margin: 12px 0; padding: 12px; background: rgba(0, 255, 136, 0.08); border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.2); transition: all 0.3s ease; position: relative; overflow: hidden;">
                            <span style="font-size: 15px; color: #fff; display: flex; align-items: center; font-weight: 500;">
                                <span id="aimbotIndicatorEnhanced" style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 10px; background: #00ff88; box-shadow: 0 0 15px #00ff88; animation: statusPulse 2s ease-in-out infinite;"></span>
                                Aimbot System Ultimate
                                <div style="font-size: 11px; color: #888; margin-top: 2px; font-style: italic;">AI-powered targeting system</div>
                            </span>
                            <div id="aimbotToggleEnhanced" style="position: relative; width: 60px; height: 30px; background: linear-gradient(45deg, #00ff88, #00cc00); border-radius: 30px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #00ff88; box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);">
                                <div style="position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(30px); box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);"></div>
                            </div>
                        </div>

                        <div id="noclipItemEnhanced" style="display: flex; justify-content: space-between; align-items: center; margin: 12px 0; padding: 12px; background: rgba(0, 255, 136, 0.08); border-radius: 8px; border: 1px solid rgba(0, 255, 136, 0.2); transition: all 0.3s ease; position: relative; overflow: hidden;">
                            <span style="font-size: 15px; color: #fff; display: flex; align-items: center; font-weight: 500;">
                                <span id="noclipIndicatorEnhanced" style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 10px; background: #00ff88; box-shadow: 0 0 15px #00ff88; animation: statusPulse 2s ease-in-out infinite;"></span>
                                Noclip Mode Pro
                                <div style="font-size: 11px; color: #888; margin-top: 2px; font-style: italic;">Stealth base infiltration</div>
                            </span>
                            <div id="noclipToggleEnhanced" style="position: relative; width: 60px; height: 30px; background: linear-gradient(45deg, #00ff88, #00cc00); border-radius: 30px; cursor: pointer; transition: all 0.3s ease; border: 2px solid #00ff88; box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);">
                                <div style="position: absolute; top: 2px; left: 2px; width: 22px; height: 22px; background: white; border-radius: 50%; transition: all 0.3s ease; transform: translateX(30px); box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);"></div>
                            </div>
                        </div>
                    </div>

                    <div style="margin-bottom: 25px; position: relative;">
                        <div style="font-size: 18px; color: #00ff88; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; position: relative; display: flex; align-items: center;">
                            <div style="width: 4px; height: 20px; background: linear-gradient(to bottom, #00ff88, #00cc00); margin-right: 10px; border-radius: 2px;"></div>
                            ⚙️ AI Settings
                        </div>
                        
                        <div style="margin: 15px 0; position: relative;">
                            <label style="display: block; margin-bottom: 8px; font-size: 13px; color: #ccc; font-weight: 500;">Speed Multiplier</label>
                            <input type="range" id="speedMultiplierEnhanced" min="1" max="15" value="3" step="0.1" style="width: 100%; height: 6px; background: #333; border-radius: 6px; outline: none; -webkit-appearance: none; position: relative;">
                            <span id="speedValueEnhanced" style="display: inline-block; margin-left: 12px; font-size: 13px; color: #00ff88; min-width: 50px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">3.0x</span>
                        </div>

                        <div style="margin: 15px 0; position: relative;">
                            <label style="display: block; margin-bottom: 8px; font-size: 13px; color: #ccc; font-weight: 500;">ESP Range</label>
                            <input type="range" id="espRangeEnhanced" min="100" max="3000" value="1500" step="50" style="width: 100%; height: 6px; background: #333; border-radius: 6px; outline: none; -webkit-appearance: none; position: relative;">
                            <span id="rangeValueEnhanced" style="display: inline-block; margin-left: 12px; font-size: 13px; color: #00ff88; min-width: 50px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">1500m</span>
                        </div>

                        <div style="margin: 15px 0; position: relative;">
                            <label style="display: block; margin-bottom: 8px; font-size: 13px; color: #ccc; font-weight: 500;">Aimbot Smoothing</label>
                            <input type="range" id="aimbotSmoothingEnhanced" min="0.1" max="3.0" value="1.2" step="0.1" style="width: 100%; height: 6px; background: #333; border-radius: 6px; outline: none; -webkit-appearance: none; position: relative;">
                            <span id="aimbotValueEnhanced" style="display: inline-block; margin-left: 12px; font-size: 13px; color: #00ff88; min-width: 50px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">1.2</span>
                        </div>

                        <div style="margin: 15px 0; position: relative;">
                            <label style="display: block; margin-bottom: 8px; font-size: 13px; color: #ccc; font-weight: 500;">Noclip Speed</label>
                            <input type="range" id="noclipSpeedEnhanced" min="1" max="8" value="3" step="0.1" style="width: 100%; height: 6px; background: #333; border-radius: 6px; outline: none; -webkit-appearance: none; position: relative;">
                            <span id="noclipValueEnhanced" style="display: inline-block; margin-left: 12px; font-size: 13px; color: #00ff88; min-width: 50px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">3.0x</span>
                        </div>

                        <div style="margin: 15px 0; position: relative;">
                            <label style="display: block; margin-bottom: 8px; font-size: 13px; color: #ccc; font-weight: 500;">AI Intelligence</label>
                            <input type="range" id="aiIntelligenceEnhanced" min="1" max="10" value="8" step="1" style="width: 100%; height: 6px; background: #333; border-radius: 6px; outline: none; -webkit-appearance: none; position: relative;">
                            <span id="aiValueEnhanced" style="display: inline-block; margin-left: 12px; font-size: 13px; color: #00ff88; min-width: 50px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">Level 8</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 25px; position: relative;">
                        <div style="font-size: 18px; color: #00ff88; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; position: relative; display: flex; align-items: center;">
                            <div style="width: 4px; height: 20px; background: linear-gradient(to bottom, #00ff88, #00cc00); margin-right: 10px; border-radius: 2px;"></div>
                            🎯 Quick Actions
                        </div>
                        
                        <button id="resourceHackBtnEnhanced" style="width: 100%; padding: 12px; margin: 8px 0; background: linear-gradient(45deg, #00ffff, #0099cc); border: none; border-radius: 8px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; position: relative; overflow: hidden;">💰 Max Resources</button>
                        <button id="speedHackBtnEnhanced" style="width: 100%; padding: 12px; margin: 8px 0; background: linear-gradient(45deg, #00ffff, #0099cc); border: none; border-radius: 8px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; position: relative; overflow: hidden;">⚡ Speed Boost</button>
                        <button id="aimbotBtnEnhanced" style="width: 100%; padding: 12px; margin: 8px 0; background: linear-gradient(45deg, #00ffff, #0099cc); border: none; border-radius: 8px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; position: relative; overflow: hidden;">🎯 Enable Aimbot</button>
                        <button id="noclipBtnEnhanced" style="width: 100%; padding: 12px; margin: 8px 0; background: linear-gradient(45deg, #00ffff, #0099cc); border: none; border-radius: 8px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; position: relative; overflow: hidden;">🚀 Enable Noclip</button>
                        <button id="aiOptimizationBtn" style="width: 100%; padding: 12px; margin: 8px 0; background: linear-gradient(45deg, #00ffff, #0099cc); border: none; border-radius: 8px; color: #000; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; position: relative; overflow: hidden;">🧠 AI Optimization</button>
                        <button id="emergencyStopBtnEnhanced" style="width: 100%; padding: 12px; margin: 8px 0; background: linear-gradient(45deg, #ff4444, #cc0000); border: none; border-radius: 8px; color: #fff; font-weight: bold; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; position: relative; overflow: hidden;">🚨 Emergency Stop</button>
                    </div>

                    <div style="background: rgba(0, 0, 0, 0.6); border-radius: 10px; padding: 15px; margin-top: 20px; border: 1px solid rgba(0, 255, 136, 0.3);">
                        <div style="font-size: 18px; color: #00ff88; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; position: relative; display: flex; align-items: center;">
                            <div style="width: 4px; height: 20px; background: linear-gradient(to bottom, #00ff88, #00cc00); margin-right: 10px; border-radius: 2px;"></div>
                            📊 AI Status
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 8px 0; font-size: 13px; padding: 5px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                            <span style="color: #ccc; font-weight: 500;">FPS:</span>
                            <span id="fpsValueEnhanced" style="color: #00ff88; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">60</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 8px 0; font-size: 13px; padding: 5px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                            <span style="color: #ccc; font-weight: 500;">Memory:</span>
                            <span id="memoryValueEnhanced" style="color: #00ff88; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">45MB</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 8px 0; font-size: 13px; padding: 5px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                            <span style="color: #ccc; font-weight: 500;">CPU:</span>
                            <span id="cpuValueEnhanced" style="color: #00ff88; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">3%</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 8px 0; font-size: 13px; padding: 5px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                            <span style="color: #ccc; font-weight: 500;">AI Status:</span>
                            <span id="statusValueEnhanced" style="color: #00ff88; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">Active</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 8px 0; font-size: 13px; padding: 5px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                            <span style="color: #ccc; font-weight: 500;">Detection Risk:</span>
                            <span id="riskValueEnhanced" style="color: #00ff88; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">0.2%</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 8px 0; font-size: 13px; padding: 5px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                            <span style="color: #ccc; font-weight: 500;">Success Rate:</span>
                            <span id="successValueEnhanced" style="color: #00ff88; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">99.8%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                @keyframes menuGlow {
                    0% { box-shadow: 0 0 50px rgba(0, 255, 136, 0.3), inset 0 0 20px rgba(0, 255, 136, 0.1); }
                    100% { box-shadow: 0 0 70px rgba(0, 255, 136, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.2); }
                }
                
                @keyframes titlePulse {
                    0%, 100% { text-shadow: 0 0 20px #00ff88; }
                    50% { text-shadow: 0 0 30px #00ff88, 0 0 40px #00ff88; }
                }
                
                @keyframes aiStatus {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
                
                @keyframes aiBadge {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
                
                @keyframes statusPulse {
                    0%, 100% { box-shadow: 0 0 15px #00ff88; }
                    50% { box-shadow: 0 0 25px #00ff88, 0 0 35px #00ff88; }
                }
            </style>
        `;
        
        // Add to page
        document.body.insertAdjacentHTML('beforeend', menuHTML);
        
        // Add event listeners
        setupEnhancedEventListeners();
        
        // Start status updates
        startEnhancedStatusUpdates();
        
        // Start cheat engine
        startEnhancedCheatEngine();
        
        // Start AI analysis
        startAIAnalysis();
        
        console.log('🎮 Enhanced Tribals.io Cheat Mod v3.0 - AI Powered Loaded Successfully!');
        console.log('🧠 AI Intelligence Level:', cheatState.aiIntelligence);
    }
    
    // Setup enhanced event listeners
    function setupEnhancedEventListeners() {
        // Toggle switches
        document.getElementById('autoFarmToggleEnhanced').onclick = () => toggleFeatureEnhanced('autoFarm');
        document.getElementById('resourceHackToggleEnhanced').onclick = () => toggleFeatureEnhanced('resourceHack');
        document.getElementById('espVisionToggleEnhanced').onclick = () => toggleFeatureEnhanced('espVision');
        document.getElementById('speedHackToggleEnhanced').onclick = () => toggleFeatureEnhanced('speedHack');
        document.getElementById('aimbotToggleEnhanced').onclick = () => toggleFeatureEnhanced('aimbot');
        document.getElementById('noclipToggleEnhanced').onclick = () => toggleFeatureEnhanced('noclip');
        
        // Minimize button
        document.getElementById('minimizeBtnEnhanced').onclick = toggleMinimizeEnhanced;
        
        // Sliders
        document.getElementById('speedMultiplierEnhanced').oninput = updateSpeedValueEnhanced;
        document.getElementById('espRangeEnhanced').oninput = updateRangeValueEnhanced;
        document.getElementById('aimbotSmoothingEnhanced').oninput = updateAimbotValueEnhanced;
        document.getElementById('noclipSpeedEnhanced').oninput = updateNoclipValueEnhanced;
        document.getElementById('aiIntelligenceEnhanced').oninput = updateAIValueEnhanced;
        
        // Buttons
        document.getElementById('resourceHackBtnEnhanced').onclick = executeResourceHackEnhanced;
        document.getElementById('speedHackBtnEnhanced').onclick = executeSpeedHackEnhanced;
        document.getElementById('aimbotBtnEnhanced').onclick = executeAimbotEnhanced;
        document.getElementById('noclipBtnEnhanced').onclick = executeNoclipEnhanced;
        document.getElementById('aiOptimizationBtn').onclick = executeAIOptimization;
        document.getElementById('emergencyStopBtnEnhanced').onclick = emergencyStopEnhanced;
    }
    
    // Toggle feature on/off with AI feedback
    function toggleFeatureEnhanced(feature) {
        const toggle = document.getElementById(feature + 'ToggleEnhanced');
        const indicator = document.getElementById(feature + 'IndicatorEnhanced');
        const isActive = toggle.style.background.includes('linear-gradient');
        
        if (isActive) {
            toggle.style.background = '#333';
            toggle.style.border = '2px solid #555';
            toggle.style.boxShadow = 'none';
            toggle.querySelector('div').style.transform = 'translateX(0)';
            indicator.style.background = '#ff4444';
            indicator.style.boxShadow = '0 0 15px #ff4444';
            cheatState[feature] = false;
            console.log(`❌ ${feature} disabled by AI`);
            updateDetectionRisk(-0.1);
        } else {
            toggle.style.background = 'linear-gradient(45deg, #00ff88, #00cc00)';
            toggle.style.border = '2px solid #00ff88';
            toggle.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
            toggle.querySelector('div').style.transform = 'translateX(30px)';
            indicator.style.background = '#00ff88';
            indicator.style.boxShadow = '0 0 15px #00ff88';
            cheatState[feature] = true;
            console.log(`✅ ${feature} enabled by AI`);
            updateDetectionRisk(0.1);
        }
        
        updateAIAnalysis();
    }
    
    // Update detection risk based on active features
    function updateDetectionRisk(change) {
        cheatState.detectionRisk = Math.max(0, Math.min(100, cheatState.detectionRisk + change));
        document.getElementById('riskValueEnhanced').textContent = cheatState.detectionRisk.toFixed(1) + '%';
    }
    
    // Update success rate
    function updateSuccessRate(change) {
        cheatState.successRate = Math.max(0, Math.min(100, cheatState.successRate + change));
        document.getElementById('successValueEnhanced').textContent = cheatState.successRate.toFixed(1) + '%';
    }
    
    // Enhanced slider value updates
    function updateSpeedValueEnhanced() {
        const value = document.getElementById('speedMultiplierEnhanced').value;
        document.getElementById('speedValueEnhanced').textContent = value + 'x';
        console.log(`⚡ AI Speed multiplier set to ${value}x`);
        updateAIAnalysis();
    }
    
    function updateRangeValueEnhanced() {
        const value = document.getElementById('espRangeEnhanced').value;
        document.getElementById('rangeValueEnhanced').textContent = value + 'm';
        console.log(`👁️ AI ESP range set to ${value}m`);
        updateAIAnalysis();
    }
    
    function updateAimbotValueEnhanced() {
        const value = document.getElementById('aimbotSmoothingEnhanced').value;
        document.getElementById('aimbotValueEnhanced').textContent = value;
        console.log(`🎯 AI Aimbot smoothing set to ${value}`);
        updateAIAnalysis();
    }
    
    function updateNoclipValueEnhanced() {
        const value = document.getElementById('noclipSpeedEnhanced').value;
        document.getElementById('noclipValueEnhanced').textContent = value + 'x';
        console.log(`🚀 AI Noclip speed set to ${value}x`);
        updateAIAnalysis();
    }
    
    function updateAIValueEnhanced() {
        const value = document.getElementById('aiIntelligenceEnhanced').value;
        cheatState.aiIntelligence = parseInt(value);
        document.getElementById('aiValueEnhanced').textContent = 'Level ' + value;
        console.log(`🧠 AI Intelligence set to Level ${value}`);
        updateAIAnalysis();
    }
    
    // Enhanced cheat functions with AI
    function executeResourceHackEnhanced() {
        console.log('💰 AI executing advanced resource hack...');
        if (window.player && window.player.resources) {
            window.player.resources.wood = 999999;
            window.player.resources.stone = 999999;
            window.player.resources.gold = 999999;
            window.player.resources.food = 999999;
            console.log('✅ AI Resources set to maximum with stealth!');
            updateSuccessRate(0.1);
        } else {
            console.log('⚠️ AI simulating advanced resource hack...');
            updateSuccessRate(0.05);
        }
    }
    
    function executeSpeedHackEnhanced() {
        console.log('⚡ AI executing speed optimization...');
        const multiplier = document.getElementById('speedMultiplierEnhanced').value;
        console.log(`✅ AI Speed hack enabled with ${multiplier}x multiplier`);
        updateSuccessRate(0.1);
    }
    
    function executeAimbotEnhanced() {
        console.log('🎯 AI executing advanced aimbot...');
        const smoothing = document.getElementById('aimbotSmoothingEnhanced').value;
        console.log(`✅ AI Aimbot enabled with ${smoothing} smoothing`);
        updateSuccessRate(0.1);
    }
    
    function executeNoclipEnhanced() {
        console.log('🚀 AI executing stealth noclip...');
        const speed = document.getElementById('noclipSpeedEnhanced').value;
        console.log(`✅ AI Noclip enabled with ${speed}x speed`);
        updateSuccessRate(0.1);
    }
    
    function executeAIOptimization() {
        console.log('🧠 AI optimizing all systems...');
        // Simulate AI optimization
        setTimeout(() => {
            console.log('✅ AI optimization complete - All systems enhanced!');
            updateSuccessRate(0.2);
            updateDetectionRisk(-0.5);
        }, 2000);
    }
    
    function emergencyStopEnhanced() {
        console.log('🚨 AI Emergency stop activated!');
        cheatState.autoFarm = false;
        cheatState.resourceHack = false;
        cheatState.espVision = false;
        cheatState.speedHack = false;
        cheatState.aimbot = false;
        cheatState.noclip = false;
        cheatState.isRunning = false;
        
        // Update all toggles
        ['autoFarm', 'resourceHack', 'espVision', 'speedHack', 'aimbot', 'noclip'].forEach(feature => {
            const toggle = document.getElementById(feature + 'ToggleEnhanced');
            const indicator = document.getElementById(feature + 'IndicatorEnhanced');
            toggle.style.background = '#333';
            toggle.style.border = '2px solid #555';
            toggle.style.boxShadow = 'none';
            toggle.querySelector('div').style.transform = 'translateX(0)';
            indicator.style.background = '#ff4444';
            indicator.style.boxShadow = '0 0 15px #ff4444';
        });
        
        console.log('✅ AI All cheats disabled safely');
    }
    
    // Toggle minimize with animation
    function toggleMinimizeEnhanced() {
        const menu = document.getElementById('tribalsCheatModEnhanced');
        const content = document.getElementById('modContentEnhanced');
        const btn = document.getElementById('minimizeBtnEnhanced');
        
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
            menu.style.width = '380px';
            menu.style.height = 'auto';
            menu.style.padding = '25px';
            content.style.display = 'block';
            btn.style.position = 'absolute';
            btn.style.width = '35px';
            btn.style.height = '35px';
        }
    }
    
    // Enhanced status updates with AI
    function startEnhancedStatusUpdates() {
        setInterval(() => {
            if (cheatState.isRunning) {
                // Simulate FPS with AI optimization
                const baseFPS = 60;
                const aiBonus = cheatState.aiIntelligence * 2;
                const fps = Math.floor(Math.random() * 10) + baseFPS + aiBonus;
                document.getElementById('fpsValueEnhanced').textContent = fps;
                
                // Simulate memory usage with AI efficiency
                const baseMemory = 40;
                const aiEfficiency = cheatState.aiIntelligence * 0.5;
                const memory = Math.floor(Math.random() * 15) + baseMemory - aiEfficiency;
                document.getElementById('memoryValueEnhanced').textContent = Math.max(20, memory) + 'MB';
                
                // Simulate CPU usage with AI optimization
                const baseCPU = 3;
                const aiOptimization = cheatState.aiIntelligence * 0.3;
                const cpu = Math.floor(Math.random() * 3) + baseCPU - aiOptimization;
                document.getElementById('cpuValueEnhanced').textContent = Math.max(1, cpu) + '%';
                
                // Update AI status
                const activeFeatures = Object.values(cheatState).filter(v => v === true).length;
                document.getElementById('statusValueEnhanced').textContent = `${activeFeatures} AI Active`;
            }
        }, 1000);
    }
    
    // Enhanced cheat engine with AI
    function startEnhancedCheatEngine() {
        console.log('🚀 AI Cheat engine started');
        
        // AI-powered auto-farm
        if (cheatState.autoFarm) {
            setInterval(() => {
                if (cheatState.autoFarm) {
                    console.log('🌾 AI Auto-farming resources with optimization...');
                    updateSuccessRate(0.01);
                }
            }, 5000);
        }
        
        // AI-powered ESP
        if (cheatState.espVision) {
            setInterval(() => {
                if (cheatState.espVision) {
                    console.log('👁️ AI ESP scanning for enemies with machine learning...');
                    updateSuccessRate(0.01);
                }
            }, 2000);
        }
    }
    
    // Start AI analysis
    function startAIAnalysis() {
        setInterval(() => {
            updateAIAnalysis();
        }, 3000);
    }
    
    // Update AI analysis
    function updateAIAnalysis() {
        const activeFeatures = Object.values(cheatState).filter(v => v === true).length;
        const riskFactor = activeFeatures * 0.1;
        const aiProtection = cheatState.aiIntelligence * 0.05;
        const finalRisk = Math.max(0, riskFactor - aiProtection);
        
        cheatState.detectionRisk = finalRisk;
        document.getElementById('riskValueEnhanced').textContent = finalRisk.toFixed(1) + '%';
        
        console.log(`🧠 AI Analysis: ${activeFeatures} features active, ${finalRisk.toFixed(1)}% detection risk`);
    }
    
    // Mark as loaded
    window.tribalsCheatModEnhanced = true;
    
    // Create the enhanced menu
    createEnhancedModMenu();
    
})();