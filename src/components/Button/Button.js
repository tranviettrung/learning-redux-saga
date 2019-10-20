import React from 'react';
import './style.css';

const Button = ({ children, loading, ...props }) => (
  <button className="button" disabled={loading} {...props}>
    {loading ? 'loading...' : children}
  </button>
);

Button.defaultProps = {
  loading: false,
};

export default Button;