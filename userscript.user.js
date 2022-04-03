// ==UserScript==
// @name        NecoArc
// @namespace   http://tampermonkey.net/
// @match       https://hot-potato.reddit.com/embed*
// @grant       none
// @version     0.1
// @author      cynthe#3157
// @description Protecc the necc
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/cynthetic-boop/neco-arc-overlay/main/place-neco-arc-overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
