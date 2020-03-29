import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Player as Component } from './Player';

export default { title: 'Player', decorators: [withKnobs] };

export const Player = () => (
  <Component videoId={text('videoId', '68KV7JnrvDo')} onMount={() => {}} onRemove={() => {}}></Component>
);
