import React from 'react';
import { Button as Component } from './Button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default { title: 'Atoms/Button', decorators: [withKnobs] };

export const Button = () => <Component disabled={boolean('disabled', false)}>{text('label', 'click')}</Component>;
