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
        width: '100%',
      }}
    >
      <h1 style={{ width: '100%' }}>Library: MAP</h1>
      <button style={{ width: '20%', padding: '0.5rem' }}>
        {props.location || 'No location'}
      </button>
    </div>
  );
}

export default Maps;
