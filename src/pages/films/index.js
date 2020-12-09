import { React, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@components/grid';

import { getFilmsWithPlanet } from '@store/planets/planets.selectors';

import { GRID_HEADERS } from './contants';

// COMMENT didnt do a wrapper for all pages (films, planest, residents)
// in real project pages eg will have different filters, logic etc
// so each pages logic is written in a separate component,
// but in this case we could create wrapper
export const FilmsPage = () => {
  const { films } = useSelector(getFilmsWithPlanet);

  const data = {
    header: GRID_HEADERS,
    values: useMemo(() => films.map(f => ({ link: f })), films),
    actions: [],
  };

  return (
    <div>
      <h1>Films</h1>
      <Grid data={data} />
    </div>
  );
};
