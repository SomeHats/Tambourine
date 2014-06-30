# Drum Roll Workshop
## Web Mini-Game Jam
11:00 - 17:00 | lunch: 12:00 - 12:45

### Intro
11:00 - 11:05

* Who are we? Why are we here? Is philosophic, innit.
* Who are Drum Roll? What have we made?
* This is a game jam. A game jam is kind of like a party for game-makers. We get together, and in teams we make a game in one day.
* Our games will be very simple 2D prototypes
* We'll be using the web and something called Tambourine.js - a library that makes it super easy to build really basic games on the web.

### HTML Intro: E.A.K.
11:05 - 11:30

* Use [E.A.K.](http://eraseallkittens.com/) to give everyone a basic feel for HTML. Start by watching the intro video together, then everyone should play the first few levels.
* 25 minutes is probably a little long for this section. Cut off early and spend more time on the next if needed

### Idea Generation
11:30 - 12:00

* Get in to groups of 3 or 4. Number the members of each team.
* Working separately, keeping their ideas secret for now, each member needs to think of one of the following (according to their number) (2 mins)
    1. a rule (e.g. you can't touch the sides)
    2. a victory condition, how you win the game (e.g. find the wisest broccoli)
    3. a theme (e.g. unicorns vs. kittens)
    4. a location (e.g. Mars)
* We are going to supply some extra rules (mainly to steer them towards games that actually can be built in a few hours): 
    - you must be able to play the game in 30 seconds
    - the game must be in 2D
* Now, working with their teams, they need to combine these into coherent game ideas. They need to decide on a basic story, and roughly how the game is going to be played.
* Pass round paper and pens etc. and help them work on their ideas
* The key thing here is to stress that the games are going to be very minimalist and focussed. An MVP, that we can play-test and get validation for

### Lunch
12:00 - 12:45

![lunch!](http://i.imgur.com/sHsVoAf.gif)

### Art and Design
12:45 - 13:30

* We need some artwork for our game. In their teams, have some drawing characters, and others designing levels, interfaces, and interaction
* In the last 15 minutes, go round and get the character designs photographed and uploaded to imgur.
* This is probably not the final artwork - later on, show them some free tools for making better artwork

### Programming intro
13:30 - 14:00

* Talk about:
    - HTML for content
    - CSS for design
    - JS for interaction
* Depending on the skill of the team, this bit might need more time. It's important to leave as much as possible to the actual game-building though
* Very briefly walk through programming the start of 'Pig Panic'
* In JSBin, add basic HTML for a simple game:
```html
<script src="http://tambourine.drumrollhq.com/tambourine.js"></script>
<div id="game">
  <div id="ground"></div>
  <img src="http://i.imgur.com/yrRKWFO.png" id="player" height="100">
</div>
```

* Next, add the CSS:
```css
#game {
  position: relative;
  background-color: lightskyblue;
  width: 640px;
  height: 480px;
}

#ground {
  background-color: lightgreen;
  position: absolute;
  height: 100px;
  width: 640px;
  bottom: 0;
}

#player {
  position: absolute;
  bottom: 150px;
  left: 50px;
}
```

* Finally, the javascript
```javascript
var player = element('#player');
var ground = element('#ground');

var allowJump = true;

function loop() {
  if (allowJump && spaceKeyPressed && player.position.bottom < 250) {
    player.position.bottom += 10;
  } else {
    allowJump = false;
    player.position.bottom -= 5;
  }
  
  if (player.touching(ground)) {
    allowJump = true;
    player.position.bottom = 100;
  }
}

startGame();
```

### Make Games!
14:00 - 16:30

* 2½ hours to build the game!
* A fair bit of support will be needed - see http://tambourine.drumrollhq.com/ for Tambourine docs + tips & tricks
* The teams will likely develop roles - some will be programming, some will be making artwork, etc.
* Spare programmers can work on menus / a website for the game
* This bit isn't really structured at all - make sure everyone is staying on track

### Demos!
16:30 - 16:55

* Split up the teams into groups with one member of each team in the groups.
* The groups should rotate round, trying out all the games

### End!
16:55 - 17:00

* Sum up the day, round everything off, etc.
* YAAYYYYY!!!
