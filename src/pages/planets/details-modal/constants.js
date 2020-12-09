import PropTypes from 'prop-types';

// COMMENT HIGLY RECOMENDED TO USE TypeScript INSTEAD OF PROPTYPES!!!!!!!!!!
export const PROP_TYPES = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  planet: PropTypes.object.isRequired, // we can use shape here.
  onSubmit: PropTypes.func.isRequired,
};
