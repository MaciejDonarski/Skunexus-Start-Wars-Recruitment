import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { Grid } from '@components/grid';

import { getResidentsWithPlanet } from '@store/planets/planets.selectors';

import { GRID_HEADERS } from './constants';

export const ResidentsPage = () => {
  const { residents } = useSelector(getResidentsWithPlanet);

  const data = {
    header: GRID_HEADERS,
    values: useMemo(() => residents.map(f => ({ link: f })), residents),
    actions: [],
  };

  return (
    <div>
      <h1>Residents Page</h1>
      <Grid data={data} />
    </div>
  );
};
