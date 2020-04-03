import React from 'react';
import Input from '../src/components/Input';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input',
  component: Input,
};


export const Basic = () => <Input placeholder='Placerholder..' onChange={action('change')} />
