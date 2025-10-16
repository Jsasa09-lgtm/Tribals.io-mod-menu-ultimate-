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