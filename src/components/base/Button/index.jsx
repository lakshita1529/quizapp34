import React from 'react';
import '../../shared/AppStyles';

export const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};
