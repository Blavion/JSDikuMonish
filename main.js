"use strict";
//imports
const dikumon = require("./dikumon");
const Arena = require("./arena");

//main
let Beast1 = new dikumon("beast1", 100, Math.floor(Math.random() * 20), "Geek");
let beast2 = new dikumon("beast2", 100, Math.floor(Math.random() * 20), "FootballDork");
let _arena = new Arena(Beast1, beast2);

_arena.fight();
