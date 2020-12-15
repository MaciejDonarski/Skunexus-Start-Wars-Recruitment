import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import { Button } from '@components/ui-kit/button';

import './grid.scss';

export const Grid = ({ data: { header, values, actions, next, prev, getData } }) => (
  <>
    <table className="gridTable">
      <thead>
        <tr>
          {header.map(colName => <th key={uuid()}>{colName.label}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row) => (
          <tr key={uuid()}>
            {header.map((colName) => {
              const value = colName.formatter
                ? colName.formatter(row[colName.label]) : row[colName.label];
              const isNan = Number.isNaN(+value);
              return (
                <td className={!isNan ? 'is-number' : ''} key={uuid()}>
                  {value}
                </td>
              );
            })}
            {!!actions.length
              && (
              <td key={uuid()} className="gridActions">
                {actions.map(({ label, action, isActive = () => true }) => (
                  isActive(row) && (
                    <Button
                      text={label}
                      onClick={() => action(row)}
                      key={uuid()}
                    />
                  )
                ))}
              </td>
              )}
          </tr>
        ))}
      </tbody>
    </table>
    <div className="controls">
      {
        !!prev && (
          <Button
            onClick={() => getData(prev)}
            text="Previos page"
          />
        )
      }
      {
        !!next && (
          <Button
            onClick={() => {
              getData(next);
            }}
            text="Next page"
          />
        )
      }
    </div>
  </>
);

Grid.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      formatter: PropTypes.func,
    })),
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      formatter: PropTypes.func,
    })),
    actions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func,
      isActive: PropTypes.func,
    })),
    next: PropTypes.string,
    prev: PropTypes.bool,
    getData: PropTypes.func,
  }).isRequired,
};
