# PlayCanvas & Tribals.io: Advanced Chrome Console Modding Guide

Learn to hack and mod Tribals.io directly in your browser with Chrome DevTools!

---

## 1. Understanding Tribals.io and PlayCanvas

Tribals.io runs on [PlayCanvas](https://playcanvas.com/), a web-based 3D game engine.  
Most game state is exposed via JavaScript, making real-time modding possible.

---

## 2. Getting Started

**Tools Needed:**  
- Google Chrome (or Chromium browser)
- Basic JavaScript skills

**Steps:**
1. Open Tribals.io in Chrome.
2. Press `F12` to open DevTools.
3. Go to the **Console** tab.
4. Look for global objects:  
   - `pc` (PlayCanvas engine namespace)
   - `app` (PlayCanvas.Application, the game root)

**Tip:**  
Not global? Find it with:
```js
for (var k in window) {
    if (window[k] && window[k].root && window[k].root instanceof window.pc.Entity) {
        console.log('Possible PlayCanvas app:', k, window[k]);
    }
}
```

---

## 3. Real-Time Entity Hacking

### Find Entities
```js
app.root.findByTag('player'); // Array of player entities
app.root.findByName('Player'); // Find by name
```

### Modify Components
```js
// Set all players' color to green
app.root.findByTag('player').forEach(e => {
    if (e.model && e.model.material) {
        e.model.material.diffuse.set(0, 1, 0);
        e.model.material.update();
    }
});
```

### Runtime Patching
```js
// Patch Player update method
const origUpdate = app.scripts.Player.prototype.update;
app.scripts.Player.prototype.update = function(dt) {
    // Custom code
    origUpdate.call(this, dt);
};
```

---

## 4. Asset/Scripts Overwrite

- **Assets:** Swap textures, models, sounds by modifying asset URLs or objects.
- **Scripts:** Patch PlayCanvas methods or properties.

Example:
```js
// Give all players max health
app.root.findByTag('player').forEach(e => e.health = 9999);
```

---

## 5. Console Snippets

### ESP (Entity Highlight)
```js
setInterval(() => {
    app.root.findByTag('player').forEach(e => {
        if (e.model && e.model.material) {
            e.model.material.diffuse.set(1, 0, 0);
            e.model.material.update();
        }
    });
}, 2000);
```

### God Mode
```js
app.root.findByTag('player').forEach(e => {
    if (e.script && e.script.health) {
        e.script.health.value = 9999;
    }
});
```

### Fast Gather
```js
app.root.findByTag('resource').forEach(e => {
    if (e.script && e.script.gatheringSpeed) {
        e.script.gatheringSpeed = 100;
    }
});
```

---

## 6. Advanced Tips

- **Breakpoints:** Pause, step through PlayCanvas scripts.
- **Source Maps:** Map minified code if available.
- **Network Tab:** Inspect asset/API calls.

---

## 7. Risks & Ethics

- Cheating may result in bans.
- Mods/scripts may break after updates.
- Use responsibly!

---