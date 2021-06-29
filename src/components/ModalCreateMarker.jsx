import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Col,
  Row,
  FormGroup,
  Input,
  FormText,
  Form
} from "reactstrap";

export const ModalCreateMarker = ({ isOpen, toggle, onSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [price, setPrice] = useState(0);
  
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody>
        <Form onSubmit={(e) => {
          e.preventDefault()
          onSubmit({name: name, comment: comment, price: price })
        }}>
        <FormGroup>
          <Input required placeholder="Enter name..." onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" max={300} placeholder="Comment..." onChange={(e) => setComment(e.target.value)} />
          <FormText>Max 300 characters</FormText>
        </FormGroup>
        <FormGroup>
          <Input required type="number" defaultValue={0.0} onChange={(e) => setPrice(e.target.value)} />
        </FormGroup>
        <Row>
          <Col>
            <Button className="w-100" color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button type="submit" className="w-100" color="primary">
              Create marker
            </Button>
          </Col>
        </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};
