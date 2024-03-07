


import React from "react";
import { Button, Form, FormControl, Col, Row, Container } from 'react-bootstrap';
//import './Main2.css'; // Import your CSS file where you define custom styles

export default function Main3() {
  const [text, setText] = React.useState("");
  const [array, setArray] = React.useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    if (text !== "") {
      setArray([...array, text]);
      setText(""); // Clear input after adding to array
    }
  }

  const render = array.map((pre, index) => (
    <div key={index} className="mb-3">
      <Row className=" align-items-center" id="dhoni">
        <Col xs={9}>
          <div className="sunder1">
            <p>{pre}</p>
          </div>
        </Col>
        <Col xs={3}>
          <Button variant="danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
            </svg>
          </Button>
        </Col>
      </Row>
    </div>
  ));

  return (
    <Container className="dhoni">
      <Row className="mb-3">
        <Col xs={9}>
          <FormControl onChange={handleChange} value={text} type="text" placeholder="Enter text" />
        </Col>
        <Col xs={3} className="text-center">
          <Button onClick={handleClick} variant="dark" className="rounded-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
          </Button>
        </Col>
      </Row>
      {render}
    </Container>
  );
}
















