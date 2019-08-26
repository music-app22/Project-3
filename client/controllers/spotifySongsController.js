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
      // default: 
      // randomSearch = '';
  }
  console.log("randomCharacter", randomCharacter);
  console.log("randomSearch", randomSearch);
  console.log("random search");
  return randomSearch;
}

// function getRandomLimit() {
//   return Math.ceil(Math.random() * 100);
// }

// Defining methods for the songsController
module.exports = {
  findRandom: function(req, res) {
    spotify.search(
      {
        type: "track",
        query: getRandomSearch(),
        limit:  50 // Spotify API's maximum limit is 50
       //  getRandomLimit()
      },
      function(err, data) {
        if (err) {
          console.log("Error occurred: " + err);
          return;
        }
  
        var randIndex = Math.floor(Math.random() * data.tracks.items.length - 1);
        console.log("randIndex", randIndex);
        var song = data.tracks.items[randIndex];
        var songID = song.id;
        console.log("new song id: ", songID);
        console.log("song data", song);
        res.json(song);
      }
    );
  },
  // TODO: request specific track
  playSelection: function(req, res) {
    spotify
    .request('https://api.spotify.com/v1/tracks/' + req.params.track)
    .then(function(data) {
      res.json(data);
      console.log(data); 
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
      res.sendStatus(500);
    });
}
}
