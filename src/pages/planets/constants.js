export const GRID_HEADERS = [
  {
    label: 'name',
  },
  {
    label: 'rotation_period',
  },
  {
    label: 'orbital_period',
  },
  {
    label: 'diameter',
  },
  {
    label: 'climate',
  },
  {
    label: 'gravity',
  },
  {
    label: 'terrain',
  },
  {
    label: 'surface_water',
  },
  {
    label: 'population',
  },
  {
    label: 'films',
    formatter: (value) => value && value.length,
  },
  {
    label: 'residents',
    formatter: (value) => value && value.length,
  },
];
