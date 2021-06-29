import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Container, Card, CardHeader, CardBody, CardText, Button } from "reactstrap";

export const DetailsPage = () => {
  const location = useLocation();
  const history = useHistory();

  console.log(location)
  return (
    <Container>
      <Card>
        <CardHeader className="text-uppercase d-flex justify-content-between align-items-center"><b>Details {location.state.name}</b>
        <Button color="link" onClick={() => history.push('/')}>Go Back</Button>
        </CardHeader>
        <CardBody>
        {location.state.comment &&
          (
            <CardText>
              <b className="m-2">Comment:</b>
              {location.state.comment}
            </CardText>
          )}
          <CardText>
            <b className="m-2">Price:</b>
            {location.state.price}
          </CardText>
          <img src="https://via.placeholder.com/150" alt=""></img>
        </CardBody>
      </Card>
    </Container>
  );
};
