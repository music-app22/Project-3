import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import PlayBtn from "../components/PlayBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "./songs.css"
import Logo from "../components/logo"

// import SpotifyApi from 'node-spotify-api';
// const spotify = new SpotifyApi(); 
// var Spotify = require('node-spotify-api');

class Songs extends Component {
  state = {
    songs: [],
    title: "",
    artist: "",
    track: ""
    // track: "1cCXhTHf2lTsLhYCkQc80t" // MY SONG 
  }

  componentDidMount() {
    this.loadSongs();
    this.loadRandomSong();
    console.log("random song id: ", this.state.track);

  }

  loadSongs = () => {
    API.getSongs()
      .then(res =>
        this.setState({ songs: res.data, title: "", artist: "", track: this.state.track })
      )
      .catch(err => console.log(err));
  };

  loadRandomSong = () => {
    console.log("load random song");
    API.getRandomSong()
      .then(res => {
        this.setState({
          title: res.data.name,
          artist: res.data.artists[0].name,
          track: res.data.id
        })
        console.log("res id: ", res.data.id);
        console.log("res artist: ", res.data.artists[0].name);
        console.log("res song title: ", res.data.name);
      }
      )

      .catch(err => console.log(err));
  };




  deleteSong = id => {
    API.deleteSong(id)
      .then(res => this.loadSongs())
      .catch(err => console.log(err));
  };

  // playSong = songData => {
  //   API.playSong(songData)
  //     .then(res => this.loadSongs())
  //     .catch(err => console.log(err));
  // };

  handleSelectSong = song => {
    console.log("play selected song:", song.title);
    API.playSelection(song.track)
      .then(res => {
        this.setState({
          title: song.title,
          artist: song.artist,
          track: song.track
        })
        console.log("res id: ", res.data.id);
        console.log("res artist: ", res.data.artists[0].name);
        console.log("res song title: ", res.data.name);
        
      }
      )

      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleRandomSong = event => {
  //   API.getRandomSong({
  //     track: this.state.track
  //   });
  // }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log("submit button clicked");


  handleSaveSong = () => {
    API.saveSong({

      title: this.state.title,
      artist: this.state.artist,
      track: this.state.track
    })
      .then(res => this.loadSongs())
      .catch(err => console.log(err));
  }


  render() {
    //this.loadSongs();
    return (
      <Container fluid>
        
        <Row>
          <Col size="md-6">
            {/* <Jumbotron> */}
            <Logo />
            {/* </Jumbotron> */}
            {/*  ---------------------------------------------------------------------------------------------------------------*/}
            {/* below i commented out the code that created the way you enter the songs on the list */}

            {/* <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Song Title (required)"
              />
              <Input
                value={this.state.artist}
                onChange={this.handleInputChange}
                name="artist"
                placeholder="Artist (required)"
              />
             
              <FormBtn
                disabled={!(this.state.artist && this.state.title)}
                onClick={this.handleFormSubmit}
                
              >
                Search Song
              </FormBtn>
            </form> */}
            {this.state.track && (
              <iframe title="song player" className="player" src={"https://open.spotify.com/embed/track/" + this.state.track} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" position="relative"></iframe>
            )}
            <p></p>
            <button title="random song"  className="random-song" onClick={this.loadRandomSong}>Get new random song</button>
            <p></p>
            <button className="like-song" onClick={this.handleSaveSong}>Add to liked songs list</button>



            {/* ---------------------------------------------------------------------------------------------------------------------- */}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Songs I have liked</h1>
            </Jumbotron>
            {this.state.songs.length ? (
              <List>
                {this.state.songs.map(song => (
                  <ListItem key={song._id}>
                    <Link to={"/songs/" + song._id}>
                      <strong>
                        {song.title} by {song.artist}
                      </strong>
                    </Link>
                    <PlayBtn onClick={() => this.handleSelectSong(song)} />
                    <DeleteBtn onClick={() => this.deleteSong(song._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Songs;
