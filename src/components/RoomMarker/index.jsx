import React, { createContext, useState } from "react";

import ImageMarker from "react-image-marker";
import { CustomMarker } from "./CustomMarker";
import room from "./image/room.jpg";
import { ModalCreateMarker } from "../ModalCreateMarker";

export const MarkerContext = createContext();

export const RoomMarker = () => {
  const [markersData, setMarkersData] = useState([]);
  const [marker, setMarker] = useState();
  const [modalCreateMarker, setModalCreateMarker] = useState(false);

  const toggleCreateMarker = () => setModalCreateMarker(!modalCreateMarker);

  return (
    <MarkerContext.Provider value={{markersData, setMarkersData}}>
      <ImageMarker
        src={room}
        markers={markersData}
        onAddMarker={({ top, left }) => {
          toggleCreateMarker();
          setMarker({ top, left });
        }}
        markerComponent={CustomMarker}
      />
      <ModalCreateMarker
        isOpen={modalCreateMarker}
        toggle={() => {
          toggleCreateMarker();
        }}
        onSubmit={(data) => {
          toggleCreateMarker();
          setMarkersData([...markersData, {...marker, ...data}]);
        }}
      />
    </MarkerContext.Provider>
  );
};
