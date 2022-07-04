import { useEffect } from "react";
import useScript from "./useScript";
/*
* @param {string} gsource - the source of the swf
* @param {string} Rufflecontainer - the container that the player will be stored in
* @param {number} width - the width of the ruffle player
* @param {number} height - the height of the ruffle player
*/

// Declaring width and height for the player isnt reccomeded
// because it will automatically take 100% of your ruffleContainer
// But feel free to set the width if you would like to

const useRuffle = (Rufflecontainer, gsource, width, height) => {
    if (!width) width = "100%";
    if (!height) height = "100%";
    if (!Rufflecontainer) throw new Error("Rufflecontainer is required");
    useScript('/ruffle/ruffle.js')
    useEffect(() => {
        window.RufflePlayer = window.RufflePlayer || {};
        window.RufflePlayer.config = {
            // Options affecting files only
            "autoplay": "auto",
            "unmuteOverlay": "visible",
            "backgroundColor": "#222a3a",
            "letterbox": "fullscreen",
            "warnOnUnsupportedContent": true,
            "contextMenu": true,
            "showSwfDownload": false,
            "upgradeToHttps": window.location.protocol === "https:",
            "maxExecutionDuration": { "secs": 15, "nanos": 0 },
            "logLevel": "error",
            "base": null,
            "menu": true,
            "salign": "",
            "scale": "showAll",
            "quality": "high",
        };
        window.addEventListener("load", (event) => {
            const ruffle = window.RufflePlayer.newest();
            const player = ruffle.createPlayer();
            Rufflecontainer.current.appendChild(player);
            player.style.width = width;
            player.style.height = height;
            player.load(gsource, {
                allowScriptAccess: false, // if false swf cant interact with page (recommended false)
            }).then(() => {
                console.log("swf loaded");
            }).catch((error) => {
                console.log("swf load error:", error);
            }
            );
        });
    })
}


export default useRuffle;