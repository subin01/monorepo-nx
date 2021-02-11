import React from 'react';

import './maps.module.scss';

/* eslint-disable-next-line */
export interface MapsProps {
  location: String;
}

export function Maps(props: MapsProps) {
  return (
    <div
      style={{
        background: '#ccc',
        height: '10rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '2rem 0',
        padding: '1rem',
        color: '#992200',
      }}
    >
      <h1 style={{ width: '100%' }}>Library: MAP</h1>
      <h2 style={{ width: '100%' }}>{props.location}</h2>
    </div>
  );
}

export default Maps;
