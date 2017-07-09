import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, InputGroupButton, Input, Button, Table } from 'reactstrap';

const todos = ['健身房', '買菜', '與家人出遊'];

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <InputGroup>
              <Input placeholder="Todo..." />
              <InputGroupButton><Button color="secondary">Add</Button></InputGroupButton>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Todo</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {
                  todos.map((todo, index) => (
                    <tr>
                      <th scope="row">
                        {index + 1}
                      </th>
                      <td>
                        {todo}
                      </td>
                      <td>
                        <Button color="danger">X</Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
