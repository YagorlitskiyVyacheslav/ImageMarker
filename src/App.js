import { Route } from 'react-router-dom';
import React from 'react';

import { RoomMarker } from './components/RoomMarker';
import { DetailsPage } from './components/DetailsPage';

export const App = () => {
  return (
    <>
      <Route path="/" exact component={RoomMarker} />
      <Route path="/:id" exact component={DetailsPage} />
    </>
  );
}
