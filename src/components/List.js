import React from 'react';
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

const List = ({items}) =>
    <div className="list">
      <Row>
        <Col xs={12}>
          <ListGroup>
            {items.length && items.map((item, index) =>
              <ListGroupItem key={index+1}>
                <Row>
                  <Col className="item-name" xs={4}>
                    {item.name}
                  </Col>
                  <Col className="item-url" xs={8}>
                    {item.url}
                  </Col>
                </Row>
              </ListGroupItem>
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  ;

export default List;
