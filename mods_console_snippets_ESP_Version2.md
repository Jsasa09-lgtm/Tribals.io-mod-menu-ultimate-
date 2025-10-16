# ESP Console Snippet

**Description:** Highlights all player entities in red in Tribals.io.

**How to Use:**
1. Open Tribals.io in Chrome.
2. Press F12 for DevTools.
3. Paste the following code into the Console and hit Enter.

```js
setInterval(() => {
    app.root.findByTag('player').forEach(e => {
        if (e.model && e.model.material) {
            e.model.material.diffuse.set(1, 0, 0); // Red
            e.model.material.update();
        }
    });
}, 2000);
```