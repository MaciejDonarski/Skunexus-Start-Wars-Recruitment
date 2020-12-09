import React from 'react';
import PropTypes from 'prop-types';
import './grid.scss';

export const Grid = ({ data: { header, values, actions } }) => (
  <table className="gridTable">
    <thead>
      <tr>
        {header.map(colName => <th key={colName}>{colName.label}</th>)}
        {!!actions.length && <th>Actions</th>}
      </tr>
    </thead>
    <tbody>
      {values.map((row) => (
        <tr key={row.url}>
          {header.map((colName) => {
            const value = colName.formatter
              ? colName.formatter(row[colName.label]) : row[colName.label];
            const isNan = Number.isNaN(+value);
            return (
              <td className={!isNan ? 'is-number' : ''} key={colName}>
                {value}
              </td>
            );
          })}
          {!!actions.length
              && (
              <td className="gridActions">
                {actions.map(({ label, action, isActive = () => true }) => (
                  isActive(row) && (
                    <button
                      type="button"
                      onClick={() => action(row)}
                    >
                      {label}
                    </button>
                  )
                ))}
              </td>
              )}
        </tr>
      ))}
    </tbody>
  </table>
);

Grid.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      formatter: PropTypes.func,
    })),
    actions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func,
      isActive: PropTypes.func,
    })),
  }).isRequired,
};
