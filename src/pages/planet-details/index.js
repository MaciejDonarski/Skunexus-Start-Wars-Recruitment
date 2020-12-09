import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DataLabel } from '@components/data-label';

import { getPlanetWorker } from '@store/planets/planets.actions';
import { getPlanet } from '@store/planets/planets.selectors';

export const PlanetDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { planet } = useSelector(getPlanet);

  useEffect(() => {
    dispatch(getPlanetWorker(id)());
  }, [id]);

  return (
    <div>
      <h1>
        Planet Details:
        {' '}
        {planet.name}
      </h1>
      <DataLabel label="Climate" value={planet.climate} />
      <DataLabel label="Gravity" value={planet.gravity} />
    </div>
  );
};
