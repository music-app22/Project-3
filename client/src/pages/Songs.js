import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./songs.css"

class Songs extends Component {
  state = {
    songs: [],
    title: "",
    artist: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadSongs();
  }

  loadSongs = () => {
    API.getSongs()
      .then(res =>
        this.setState({ songs: res.data, title: "", artist: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteSong = id => {
    API.deleteSong(id)
      .then(res => this.loadSongs())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.artist) {
      API.saveSong({
        title: this.state.title,
        artist: this.state.artist,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadSongs())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
            <iframe src="https://open.spotify.com/embed/album/1iUJzSmlrjdw3XhR1M0A2O" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              
            </Jumbotron>
            {/*  ---------------------------------------------------------------------------------------------------------------*/}
            {/* below i commented out the code that created the way you enter the songs on the list */}
            
            <form>
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
              {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                disabled={!(this.state.artist && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search Song
              </FormBtn>
            </form>

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
