import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Blog extends Component {
  
render() {
    return (
      <div className="App">
        <Jumbotron>
            <h1>Work in progress</h1>
            <p>
                Questo sito sarà il mio cv online e playground generico
            </p>
            <div>
                <Row>
                    <Col sm = {9} > Lorem ipsum dolor sit amet, consectetur adipiscing elit.In dictum libero venenatis, efficitur tortor sed, facilisis nisi.Sed ac aliquam turpis, vitae auctor eros.Maecenas ullamcorper massa eleifend tortor ultricies cursus.Etiam sit amet sollicitudin est, at laoreet nulla.Donec at bibendum urna.Suspendisse finibus turpis orci, nec dignissim velit iaculis non.Sed ultrices libero quis augue egestas euismod.Mauris tincidunt massa sed metus faucibus pretium.Interdum et malesuada fames ac ante ipsum primis in faucibus.</Col>
                    <Col sm={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum libero venenatis, efficitur tortor sed, facilisis nisi. Sed ac aliquam turpis, vitae auctor eros. Maecenas ullamcorper massa eleifend tortor ultricies cursus. Etiam sit amet sollicitudin est, at laoreet nulla. Donec at bibendum urna. Suspendisse finibus turpis orci, nec dignissim velit iaculis non. Sed ultrices libero quis augue egestas euismod. Mauris tincidunt massa sed metus faucibus pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Col>
                </Row>
            </div>
        </Jumbotron>
      </div>
    )
  }
}

export default Blog