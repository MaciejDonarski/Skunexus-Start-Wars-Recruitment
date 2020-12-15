import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDebounce } from 'use-debounce';

import './search.scss';

export const Search = ({
  placeholder,
  onChange,
}) => {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 500);

  useEffect(() => {
    if ((typeof value === 'string' && value)
    || (typeof value !== 'string' && !value)) {
      onChange(value);
    }
  },
  [value]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value || null)}
        className="search__input"
      />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
