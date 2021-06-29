import React, { useState } from "react";
import { Button, Modal, ModalBody, CardText } from "reactstrap";
import { NavLink } from "react-router-dom";

import { MarkerContext } from "../../RoomMarker";

import "./scss/index.scss"

export const CustomMarker = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <MarkerContext>
      {({ markersData, setMarkersData }) => (
        <>
          <div
            className="marker-component"
            onClick={() => {
              toggle();
              console.log(markersData[props.itemNumber]);
            }}
          ></div>
          <Modal isOpen={isOpen} toggle={toggle}>
            <ModalBody>
              <div className="d-flex justify-content-end">
                <NavLink to={{ pathname: markersData[props.itemNumber].name.toLowerCase(), state: { ...markersData[props.itemNumber] } }}>
                  Learn More
                </NavLink>
              </div>
              <CardText>
                <b className="m-2">Name:</b>
                {markersData[props.itemNumber].name}
              </CardText>
              <CardText>
                <b className="m-2">Comment:</b>
                {markersData[props.itemNumber].comment}
              </CardText>
              <CardText>
                <b className="m-2">Price:</b>
                {markersData[props.itemNumber].price}$
              </CardText>
              <Button
                className="w-50 m-auto d-block"
                color="primary"
                onClick={() => {
                  toggle();
                  setMarkersData(
                    markersData.filter(
                      (e) => e !== markersData[props.itemNumber]
                    )
                  );
                }}
              >
                Delete
              </Button>
            </ModalBody>
          </Modal>
        </>
      )}
    </MarkerContext>
  );
};
