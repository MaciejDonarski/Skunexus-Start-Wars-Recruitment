export const PREFIX = '/app';

export const PAGES = {
  PREFIX: '/app',
  get PLANETS_PAGE() {
    return `${this.PREFIX}/planets`;
  },
  get FILMS_PAGE() {
    return `${this.PREFIX}/films`;
  },
  get RESIDENTS_PAGE() {
    return `${this.PREFIX}/residents`;
  },
  get PLANET_DETAILS_PAGE() {
    return `${this.PREFIX}/planets/:id`;
  },

  GET_PLANET_DETAIL_PAGE: (id) => `${PREFIX}/planets/${id}`,
};
