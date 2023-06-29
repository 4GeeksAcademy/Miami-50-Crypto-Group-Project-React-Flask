import Card from "react-bootstrap/Card";
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import context from "react-bootstrap/esm/AccordionContext";
import { Context } from "../store/appContext";
import "./private.css";

function Private() {
  const { store, actions } = useContext(Context);
  const history = useNavigate();

  useEffect(() => {
    if (!store.token || store.token === "" || store.token === undefined) {
      history("/login"); // Replace "public" with the desired URL for the opposite scenario
    }
  }, [store.token, history]);
  return (
    <div className="privateCard">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            This is the private area, should only be acccesible if there is a
            valid token.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Private;
