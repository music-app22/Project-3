import axios from "axios";

export default {
  // Gets all songs
  getSongs: function() {
    return axios.get("/api/songs");
  },
  // Gets the song with the given id
  getSong: function(id) {
    return axios.get("/api/songs/" + id);
  },
  // Deletes the song with the given id
  deleteSong: function(id) {
    return axios.delete("/api/songs/" + id);
  },
  // Saves a song to the database
  saveSong: function(songData) {
    return axios.post("/api/songs", songData);
  },
  getRandomSong: function() {
    return axios.get("/api/spotify-songs");
  }

};

