import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, CardColumns, Card, CardImg, CardBlock, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const cards = [{
  img: 'https://images.unsplash.com/photo-1473175494278-d83ed8459089?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=',
  title: 'Card title',
  text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
}, {
  img: 'https://images.unsplash.com/photo-1462823985959-022de68638a2?dpr=2&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=',
}, {
  title: 'Card title',
  text: 'This card has supporting text below as a natural lead-in to additional content.'
}, {
  style: { backgroundColor: '#333', borderColor: '#333' },
  title: 'Special Title Treatment',
  text: 'With supporting text below as a natural lead-in to additional content.',
}, {
  img: 'https://images.unsplash.com/photo-1497107261019-ad37b3b579ee?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=',
  title: 'Card title',
  text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
}, {
  color: 'primary',
  title: 'Special Title Treatment',
  text: 'With supporting text below as a natural lead-in to additional content.',
}];

export default class Content extends Component {
  state = {
    modal: false,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

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
                  <Button color="primary" onClick={this.toggle}>Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <CardColumns>
              {
                cards.map((card) => {
                  const props = { top };
                  if (card.color) {
                    props.color = card.color;
                    props.inverse = true;
                  }
                  if (card.style) {
                    props.style = card.style;
                    props.inverse = true;
                  }

                  return (
                    <Card {...props}>
                      {
                        card.img &&
                        <CardImg width={'100%'} src={card.img} />
                      }
                      {
                        card.title &&
                        <CardBlock>
                          <CardTitle>{card.title}</CardTitle>
                          <CardText>{card.text}</CardText>
                          <Button color="secondary">Button</Button>
                        </CardBlock>
                      }
                    </Card>
                  );
                })
              }
            </CardColumns>
          </Row>

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    );
  }
}
