/* CSE3026 : Web Application Development
 * Lab 09 - Maze
 */

"use strict";

var loser = null; // whether the user has hit a wall

window.onload = function() {

    var boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = this.overBoundary;
    }

    document.getElementById("end").onmouseover = this.overEnd;
    document.getElementById("start").onclick = this.startClick;
    document.getElementById("maze").onmouseleave = this.overBody;
};

// called when mouse enters the walls; 
// signals the end of the game with a loss
function overBoundary(event) {

    var boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
    var status = document.getElementById("status");
    status.innerHTML = "You Lose :(";
}

// called when mouse is clicked on Start div;
// sets the maze back to its initial playable state
function startClick() {
    var boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }

    var status = document.getElementById("status");
    status.innerHTML = "Start!";
}

// called when mouse is on top of the End div.
// signals the end of the game with a win
function overEnd() {
    var status = document.getElementById("status");
    status.innerHTML = "You Win!";
}

// test for mouse being over document.body so that the player
// can't cheat by going outside the maze
function overBody(event) {

    overBoundary();
}