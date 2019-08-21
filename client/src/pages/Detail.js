import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    song: {}
  };
  // When this component mounts, grab the song with the _id of this.props.match.params.id
  // e.g. localhost:3000/songs/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getSong(this.props.match.params.id)
      .then(res => this.setState({ song: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.song.title} by {this.state.song.artist}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            {/* <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.song.synopsis}
              </p>
            </article> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to artists</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
