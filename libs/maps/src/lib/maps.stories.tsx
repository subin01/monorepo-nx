import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Maps, MapsProps } from './maps';

export default {
  title: 'Map Variations',
  decorators: [withKnobs],
};

export const Map = () => {
  /* eslint-disable-next-line */
  const location = text('Location', 'Melbourne');

  return (
    <div>
      Map:
      <Maps location={location} />
    </div>
  );
};
