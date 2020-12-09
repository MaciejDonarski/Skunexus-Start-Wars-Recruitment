import { reducer } from '@wellyes/redux-kit';
import { getPlanets, setFilms, setResidents, getPlanet } from './planets.actions';

const initialState = {
  planets: [],
  planet: {},
  films: [],
  residents: [],
  loading: false,
  errors: '',
};

export const planetsReducer = (state = initialState, action) => {
  const states = {
    ...reducer(getPlanets, state, action, { dataMask: 'planets' }),
    ...reducer(getPlanet, state, action, { dataMask: 'planet' }),
    [setFilms.type]: {
      ...state,
      films: action.payload,
    },
    [setResidents]: {
      ...state,
      residents: action.payload,
    },
  };

  const isReduxToolkitAction = states[action.type]
    && typeof states[action.type] === 'function';

  return isReduxToolkitAction ? states[action.type]() : states[action.type] || state;
};
