import React from 'react';

import './maps.module.scss';

/* eslint-disable-next-line */
export interface MapsProps {}

export function Maps(props: MapsProps) {
  return (
    <div
      style={{
        background: '#ccc',
        height: '10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem 0',
        color: '#992200',
      }}
    >
      <h1>Library: MAP</h1>
    </div>
  );
}

export default Maps;
