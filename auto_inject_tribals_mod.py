#!/usr/bin/env python3
"""
🚀 AUTO INJECT TRIBALS MOD - PYTHON AUTOMATION
Automatically injects the GitHub enhanced mod into tribals.io
"""

import webbrowser
import time
import subprocess
import os
import sys

def open_tribals_and_inject():
    """Open tribals.io and prepare for mod injection"""
    print("🚀 AUTO INJECT TRIBALS MOD")
    print("=" * 40)
    
    # Open tribals.io in browser
    print("🌐 Opening tribals.io...")
    webbrowser.open("https://tribals.io")
    
    # Wait for page to load
    print("⏳ Waiting for page to load...")
    time.sleep(5)
    
    # Read the mod file
    try:
        with open('github_enhanced_tribals_mod.js', 'r') as f:
            mod_content = f.read()
        
        print("📋 Mod content loaded successfully!")
        print(f"📏 Mod size: {len(mod_content)} characters")
        
        # Save to clipboard (if possible)
        try:
            import pyperclip
            pyperclip.copy(mod_content)
            print("📋 Mod copied to clipboard!")
            print("\n🎮 Instructions:")
            print("1. Go to the tribals.io tab")
            print("2. Press F12 to open Developer Console")
            print("3. Press Ctrl+V to paste the mod")
            print("4. Press Enter to execute")
            print("5. The mod menu will appear!")
            
        except ImportError:
            print("📋 pyperclip not available, manual copy required")
            print("\n🎮 Instructions:")
            print("1. Go to the tribals.io tab")
            print("2. Press F12 to open Developer Console")
            print("3. Copy the mod content from github_enhanced_tribals_mod.js")
            print("4. Paste into console and press Enter")
            print("5. The mod menu will appear!")
        
        # Create a simple HTML file for easy injection
        html_injector = f"""
<!DOCTYPE html>
<html>
<head>
    <title>GitHub Enhanced Tribals Mod Injector</title>
    <style>
        body {{
            font-family: 'Courier New', monospace;
            background: #000;
            color: #00ff00;
            padding: 20px;
        }}
        .container {{
            max-width: 800px;
            margin: 0 auto;
        }}
        .mod-content {{
            background: #111;
            border: 2px solid #00ff00;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            max-height: 400px;
            overflow-y: auto;
        }}
        .instructions {{
            background: #222;
            border: 1px solid #666;
            border-radius: 5px;
            padding: 15px;
            margin: 20px 0;
        }}
        button {{
            background: #00ff00;
            color: #000;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            margin: 5px;
        }}
        button:hover {{
            background: #00cc00;
        }}
        textarea {{
            width: 100%;
            height: 200px;
            background: #333;
            color: #fff;
            border: 1px solid #666;
            border-radius: 5px;
            padding: 10px;
            font-family: 'Courier New', monospace;
        }}
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 GitHub Enhanced Tribals Mod Injector</h1>
        
        <div class="instructions">
            <h2>📋 Instructions:</h2>
            <ol>
                <li>Open <a href="https://tribals.io" target="_blank">tribals.io</a> in a new tab</li>
                <li>Press F12 to open Developer Console</li>
                <li>Click "Copy Mod" button below</li>
                <li>Go to tribals.io tab and paste into console</li>
                <li>Press Enter to execute</li>
                <li>The mod menu will appear!</li>
            </ol>
        </div>
        
        <div class="mod-content">
            <h3>🎮 Mod Content:</h3>
            <textarea id="modContent" readonly>{mod_content}</textarea>
            <br>
            <button onclick="copyMod()">📋 Copy Mod</button>
            <button onclick="openTribals()">🌐 Open Tribals.io</button>
        </div>
        
        <div class="instructions">
            <h2>🛡️ Security Features:</h2>
            <ul>
                <li>✅ Anti-detection patterns</li>
                <li>✅ Console hiding</li>
                <li>✅ Performance masking</li>
                <li>✅ Memory obfuscation</li>
                <li>✅ CORS policy override</li>
                <li>✅ Script loading interception</li>
                <li>✅ Anti-cheat evasion</li>
            </ul>
        </div>
        
        <div class="instructions">
            <h2>🎯 Cheat Features:</h2>
            <ul>
                <li>⚡ Speed Hack (5x speed)</li>
                <li>🔫 Weapon Hack (rapid fire)</li>
                <li>🛑 Collision Hack (noclip)</li>
                <li>🚀 Teleport (instant movement)</li>
                <li>👁️ ESP Vision (player detection)</li>
                <li>🎮 Draggable Menu</li>
            </ul>
        </div>
    </div>
    
    <script>
        function copyMod() {{
            const modContent = document.getElementById('modContent');
            modContent.select();
            document.execCommand('copy');
            alert('Mod copied to clipboard! Now go to tribals.io and paste into console.');
        }}
        
        function openTribals() {{
            window.open('https://tribals.io', '_blank');
        }}
    </script>
</body>
</html>
        """
        
        with open('tribals_mod_injector.html', 'w') as f:
            f.write(html_injector)
        
        print("🌐 HTML injector created: tribals_mod_injector.html")
        print("📂 Open this file in your browser for easy injection!")
        
        # Open the HTML injector
        webbrowser.open('file://' + os.path.abspath('tribals_mod_injector.html'))
        
    except FileNotFoundError:
        print("❌ Mod file not found! Run github_enhanced_tribals_mod.py first")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False
    
    return True

def main():
    print("🚀 AUTO INJECT TRIBALS MOD - PYTHON AUTOMATION")
    print("=" * 50)
    
    # Check if mod file exists
    if not os.path.exists('github_enhanced_tribals_mod.js'):
        print("❌ Mod file not found!")
        print("📝 Please run: python3 github_enhanced_tribals_mod.py")
        return
    
    # Open and inject
    success = open_tribals_and_inject()
    
    if success:
        print("\n✅ Auto injection setup complete!")
        print("🎮 The mod is ready to use!")
    else:
        print("\n❌ Auto injection failed!")
        print("📝 Please check the error messages above")

if __name__ == "__main__":
    main()