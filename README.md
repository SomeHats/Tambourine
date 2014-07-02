Tambourine
==========

[Documentation](#documentation)

Tambourine is a small library for making little games in the browser. It's made for people who are new to the whole programming thing, and want to try their hand at games.

Add all the characters and obstacles for your game in HTML, make them look great with CSS, then add interaction and animation with JavaScript and Tambourine.

Tambourine is made with love by [Drum Roll](http://drumrollhq.com/). Check out [E.A.K](http://eraseallkittens.com/), an open source game that teaches the basics of HTML and CSS.

Documentation
-------------
#### startGame()
Starts the game. If you've got any `loop` functions, it will start running them 60 times a second. It will also start updating the keys.

##### Example
Javascript:
```javascript
function loop() {
    // Will get run 60 times a second after startGame()
}

element('#start-button').onclick = startGame
```
--------------------
#### endGame()
Stop the game loop from running

##### Example
Javascript:
```javascript
if (score === 0) {
    alert("You lose!")
    endGame()
}
```
--------------------
#### element(selector)
Get an element from your HTML, by its `id` or with a css selector. Adds extra Tambourine goodness.

##### Example
HTML:
```html
<div id="blah"></div>
<div class="bloop"></div>
```
Javascript:
```javascript
var blah = element('#blah')
var bloop = element('.bloop')
var huh = element('blah')
// blah is the same as huh
```
--------------------
#### elements(selector)
Get all the elements on the page according to a CSS selector, and adds extra Tambourine goodness to them.

##### Example
HTML:
```html
<div id="blah"></div>
<div class="bloop"></div>
```
Javascript:
```javascript
var blah = elements('div')
blah.forEach(function(el) {
    el.destroy()
})
// All the divs are gone!
```
--------------------
#### random(minimum, maximum)
Get a random whole number between `minimum` and `maximum`.

##### Example
Javascript:
```javascript
var roll = random(1, 6)
alert("You rolled a " + roll)
```
--------------------
#### el.clone()
Clone a HTML element

##### Example
HTML:
```html
<img src="pig.jpg" class="pig">
```
Javascript:
```javascript
var pig = element('.pig')
var newPig = pig.clone()
// Now there are two pigs! Yay, pigs for everyone! :)
```
--------------------
#### el.touching(other)
Check is an element is touching some other element

##### Example
Javascript:
```javascript
if (player.touching(danceFloor)) {
    dance()
}
```
--------------------
#### el.destroy()
Remove an element

##### Example
Javascript:
```javascript
if (playerDead) {
    player.destroy()
}
```
--------------------
#### el.position
`el.position` has four properties - `top`, `left`, `bottom`, `right`. Each one represents the element's distance in pixels from that edge of the screen. 

##### Example
Javascript:
```javascript
// Move the player right:
player.position.left = player.position.left + 10
```
--------------------
#### Keys
There are a bunch of variables defined for every key on the keyboard. Their names look like `[keyname]KeyPress` e.g. `aKeyPressed` or `upKeyPressed` or `spaceKeyPressed`

##### Example
Javascript:
```javascript
if (rightKeyPressed) {
    walkRight()
} else if (leftKeyPressed) {
    walkLeft()
} else if (upKeyPressed || spaceKeyPressed) {
    jump()
}
```

