import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { PAGES } from '@router/pages';
import { getPlanetsWorker, setFilms, setResidents } from '@store/planets/planets.actions';
import { getPlanets } from '@store/planets/planets.selectors';

import { getQueryId } from '@utils/helpers/url';

import { Grid } from '@components/grid';

import { PalnetDetailsModal } from './details-modal';

import { GRID_HEADERS } from './constants';

import 'react-toastify/dist/ReactToastify.css';

export const PlanetsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { planets } = useSelector(getPlanets);
  const [modalStatus, setModalStatus] = useState({
    isOpen: false,
    planet: null,
  });

  useEffect(() => {
    dispatch(getPlanetsWorker()());
  }, []);

  const data = {
    header: GRID_HEADERS,
    values: planets.results,
    actions: [
      {
        label: 'Go to Films',
        action: (row) => {
          dispatch(setFilms(row.films));
          history.push(PAGES.FILMS_PAGE);
        },
        isActive: (row) => !!row.films.length,
      },
      {
        label: 'Go to Residents',
        action: (row) => {
          dispatch(setResidents(row.residents));
          history.push(PAGES.RESIDENTS_PAGE);
        },
        isActive: (row) => !!row.residents.length,
      },
      {
        label: 'Go to Planet Detailes',
        action: (row) => {
          history
            .push(PAGES.GET_PLANET_DETAIL_PAGE(getQueryId(row.url)));
        },
      },
      {
        label: 'Open Planet Modal',
        action: (row) => {
          setModalStatus({
            isOpen: true,
            planet: row,
          });
        },
      },
    ],
  };

  return (
    <div className="planets">
      <h1>Star Wars Planets</h1>
      <Grid data={data} />
      {modalStatus.isOpen && (
      <PalnetDetailsModal
        isOpen={modalStatus.isOpen}
        toggleModal={setModalStatus}
        planet={modalStatus.planet}
        onSubmit={() => toast('Submited!')}
      />
      )}
      <ToastContainer />
    </div>
  );
};
