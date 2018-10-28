import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-grou-text">
          <i className={icon} />
          <input
            className={classnames('form-control form-control-lg', {
              'is-invalid': error
            })}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </span>
      </div>
    </div>
  );
};

InputGroup.propType = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
