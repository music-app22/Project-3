var Spotify = require("node-spotify-api");

//TODO: maybe create a keys file in config..
var keys = require("../config/keys");

var spotify = new Spotify(keys.spotify);

function getRandomSearch() {
  // A list of all characters that can be chosen.
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  
  // Gets a random character from the characters string.
  const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
  let randomSearch = '';

  // Places the wildcard character at the beginning, or both beginning and end, randomly.
  switch (Math.round(Math.random())) {
    case 0:
      randomSearch = randomCharacter + '%';
      break;
    case 1:
      randomSearch = '%' + randomCharacter + '%';
      break;
  }

  return randomSearch;
}

function getRandomLimit() {
  return Math.ceil(Math.random() * 100);
}

// Defining methods for the songsController
module.exports = {
  findRandom: function(req, res) {
    spotify.search(
      {
        type: "track",
        query: getRandomSearch(),
        limit: getRandomLimit()
      },
      function(err, data) {
        if (err) {
          console.log("Error occurred: " + err);
          return;
        }
  
        var lastIndex = data.tracks.items.length - 1
        var song = data.tracks.items[lastIndex];
        
        res.json(song);
      }
    );
  }
};
