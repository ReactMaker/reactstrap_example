import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export default class Content extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">
                  This is a simple hero unit, a simple Jumbotron-style component for
                  calling extra attention to featured content or information.
                </p>
                <hr className="my-2" />
                <p>
                  It uses utility classes for typgraphy and spacing to
                  space content out within the larger container.
                </p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={4}>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBlock>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title
                  and make up the bulk of the card`s content.
                </CardText>
                  <Button>Button</Button>
                </CardBlock>
              </Card>
            </Col>
            <Col sm={6} md={4}>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBlock>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title
                  and make up the bulk of the card`s content.
                </CardText>
                  <Button>Button</Button>
                </CardBlock>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBlock>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title
                  and make up the bulk of the card`s content.
                </CardText>
                  <Button>Button</Button>
                </CardBlock>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBlock>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title
                  and make up the bulk of the card`s content.
                </CardText>
                  <Button>Button</Button>
                </CardBlock>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBlock>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title
                  and make up the bulk of the card`s content.
                </CardText>
                  <Button>Button</Button>
                </CardBlock>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBlock>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title
                  and make up the bulk of the card`s content.
                </CardText>
                  <Button>Button</Button>
                </CardBlock>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
