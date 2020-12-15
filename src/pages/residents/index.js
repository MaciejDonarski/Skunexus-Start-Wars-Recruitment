import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { Grid } from '@components/grid';

import { getResidentsWithPlanet } from '@store/planets/planets.selectors';
import { PageTitle, PageHeader } from '@components/ui-kit';

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
      <PageHeader>
        <PageTitle title="Residents" />
      </PageHeader>
      <Grid data={data} />
    </div>
  );
};
