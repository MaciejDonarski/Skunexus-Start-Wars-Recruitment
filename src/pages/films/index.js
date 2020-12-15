import { React, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@components/grid';

import { getFilmsWithPlanet } from '@store/planets/planets.selectors';
import { PageTitle, PageHeader } from '@components/ui-kit';

import { GRID_HEADERS } from './contants';

// COMMENT just acrodint to the task,
// takes only films from selected movie
// not refetching
// so in production in this case we would have
// GET /films and GET /planets/1/films
// which are respond with same dto
export const FilmsPage = () => {
  const { films } = useSelector(getFilmsWithPlanet);

  const data = {
    header: GRID_HEADERS,
    values: useMemo(() => films.map(f => ({ link: f })), films),
    actions: [],
  };

  return (
    <div>
      <PageHeader>
        <PageTitle title="Films: /planets/PLANET_ID/films (not realized in swapi :( ))" />
      </PageHeader>
      <Grid data={data} />
    </div>
  );
};
