import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'

const Faq = (props) => {
  return (
      <Accordion>
        <Accordion.Item eventKey={props.number}>
          <Accordion.Header>{props.header}</Accordion.Header>
          <Accordion.Body>
            {props.body}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}

export default Faq;

