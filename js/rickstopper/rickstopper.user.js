// ==UserScript==
// @name         RickStopper
// @namespace    https://itsfoxdev.github.io
// @version      4
// @description  Blocks rickrolls
// @author       FoxDev
// @run-at       document-start
// @downloadURL  https://itsfoxdev.github.io/projects/js/rickstopper/rickstopper.user.js
// @match        https://www.youtube.com/watch?v=dQw4w9WgXcQ*
// @match        https://www.youtube.com/watch?v=xvFZjo5PgG0*
// @icon         https://itsfoxdev.github.io/projects/js/rickstopper/icon.png
// @grant        none
// ==/UserScript==

// If the URL does not contain "?rsaccept=true" //
if (document.location.href.indexOf('?rsaccept=true') === -1){
    console.log('⚠️ Rickroll detected, redirecting...');
    // Redirect to block page //
    location.replace('https://itsfoxdev.github.io/projects/js/rickstopper/');
}
