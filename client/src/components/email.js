import React from 'react';

const Email = ({ value }) => {
  const emailLink = `mailto:${value}`;
  return (
    <a href={emailLink}>{value}</a>
  );
};

export default Email;