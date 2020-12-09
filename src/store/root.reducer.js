import { combineReducers } from '@wellyes/redux-kit';
import { planetsReducer } from './planets/plantes.reducer';

// COMMENT in ideal we should decompose plantes reduces to
// films reducer, residents reducer and so on,
// but swapi is not complete and havent classic REST API methods like
// /films/planets/1/films,
// so i didnt realized fetch logic for those items
// and only saved links in store.
// But in the real project it wound be an issue, api should provede all methods
// and client should always refetch to provide for user valid data.
export const rootReducer = combineReducers({
  planets: planetsReducer,
});
