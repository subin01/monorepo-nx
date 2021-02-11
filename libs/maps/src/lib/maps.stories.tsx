import React from 'react';
import { Maps, MapsProps } from './maps';

export default {
  component: Maps,
  title: 'Maps',
  args: {
    location: 'location',
  },
  argTypes: {
    location: {
      control: 'text',
    },
  },
};

export const primary = () => {
  /* eslint-disable-next-line */

  return <Maps location="Melbourne" />;
};
