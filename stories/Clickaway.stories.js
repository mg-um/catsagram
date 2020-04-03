import React from 'react';
import { ClickAwayListener } from '../src/components/ClickAwayListener';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ClickAwayListener',
  component: ClickAwayListener,
};


export const Basic = () => {
  return (
    <div>
      <div style={{ width: '100%', height: '100px', backgroundColor: 'green' }}>
        Outside
      </div>
      <ClickAwayListener onClickAway={action('Click away!')}>
        <div style={{ width: '100%', height: '100px', backgroundColor: 'red' }}>
          Inside
      </div>
      </ClickAwayListener>
    </div>)
}
