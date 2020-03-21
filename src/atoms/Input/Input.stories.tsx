import React from 'react';
import { Input as Component } from './Input';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'Atoms', decorators: [withKnobs] };

export const Input = () => <Component placeholder={text('placeholder', '入力')} />;
