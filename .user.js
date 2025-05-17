// ==UserScript==
// @name         Narrow.One Cyber Profile Mod (iOS Compatible)
// @namespace    https://github.com/yourname/narrowone-cyber-profile-mod
// @version      1.0
// @description  Cyber-styled glowing profile menu for Narrow.One – works on iOS via Userscripts app!
// @author       ραɾɾοɭ
// @match        https://narrow.one/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=narrow.one
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .main-menu-corner-profile {
            width: 320px !important;
            display: flex !important;
            gap: 16px !important;
            margin: 10px !important;
            padding: 18px 24px !important;
            background:
                linear-gradient(135deg, rgba(0,255,255,0.1), rgba(0,80,100,0.15)),
                url(https://cdn.discordapp.com/attachments/1345596253546741790/1351928795463942144/download_3_1.jpg?ex=67dc294e&is=67dad7ce&hm=6550c054cbd5a4edfbcfe29c24a7f5145bffd219b6639b38cfcdce9822d1ac05)
                center/cover no-repeat !important;
            backdrop-filter: blur(16px) brightness(1.15) contrast(1.08) !important;
            border-radius: 22px !important;
            box-shadow:
                0 0 12px rgba(0, 255, 255, 0.3),
                inset 0 0 8px rgba(0, 200, 255, 0.2) !important;
            border: 1px solid rgba(0, 200, 255, 0.35) !important;
            cursor: pointer !important;
            pointer-events: auto !important;
            align-items: center !important;
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .main-menu-corner-profile::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, #00fff922, transparent, #00ccff22);
            animation: rotateGlow 6s linear infinite;
            pointer-events: none;
            border-radius: 22px;
            mix-blend-mode: screen;
            filter: blur(10px);
            z-index: 0;
        }

        .main-menu-corner-profile:hover {
            box-shadow:
                0 0 16px rgba(0, 255, 255, 0.45),
                inset 0 0 10px rgba(0, 200, 255, 0.25) !important;
            transform: scale(1.04);
        }

        @keyframes rotateGlow {
            from { transform: rotate(0deg);}
            to { transform: rotate(360deg);}
        }
    `);
})();
