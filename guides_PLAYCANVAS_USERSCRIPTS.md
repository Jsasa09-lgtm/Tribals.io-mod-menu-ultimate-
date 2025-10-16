# PlayCanvas & Tribals.io: Tampermonkey Userscript Modding Guide

Automate Tribals.io modding with Tampermonkey/Greasemonkey userscripts!

---

## 1. What Are Userscripts?

Userscripts are small JavaScript programs injected by browser extensions to automate or modify websites.

---

## 2. Getting Started

**Tools Needed:**  
- Tampermonkey (Chrome/Edge/Firefox extension)
- Basic JavaScript skills

**Steps:**
1. Install Tampermonkey.
2. Open Tribals.io.
3. Click Tampermonkey > Create a new script.
4. Paste your userscript.

---

## 3. Example Userscript Mods

### Highlight All Players (ESP)
```js
// ==UserScript==
// @name         Tribals.io ESP Highlight
// @namespace    https://tribals.io/
// @version      1.0
// @description  Highlights all players in red
// @match        https://tribals.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function highlightPlayers() {
        const app = window.pc && window.pc.Application.getApplication();
        if (!app) return;
        app.root.findByTag('player').forEach(e => {
            if (e.model && e.model.material) {
                e.model.material.diffuse.set(1, 0, 0);
                e.model.material.update();
            }
        });
    }
    setInterval(highlightPlayers, 2000);
})();
```

### God Mode (Example)
```js
// ==UserScript==
// @name         Tribals.io God Mode
// @namespace    https://tribals.io/
// @version      1.0
// @description  Sets player health to max
// @match        https://tribals.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function setGodMode() {
        const app = window.pc && window.pc.Application.getApplication();
        if (!app) return;
        app.root.findByTag('player').forEach(e => {
            if (e.script && e.script.health) {
                e.script.health.value = 9999;
            }
        });
    }
    setInterval(setGodMode, 1000);
})();
```

---

## 4. Tips for Advanced Users

- Patch PlayCanvas methods
- Interact with entities/components
- Automate gameplay or UI changes

---

## 5. Userscript Risks

- Scripts may break after updates.
- Tampermonkey mods may be detected/banned.
- Use at your own risk!

---

## 6. References

- [Tampermonkey](https://www.tampermonkey.net/)
- [Greasy Fork Tribals.io scripts](https://greasyfork.org/en/scripts/by-site/tribals.io)
- [PlayCanvas Docs](https://developer.playcanvas.com/)