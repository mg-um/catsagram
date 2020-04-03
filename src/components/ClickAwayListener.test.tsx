import React from 'react';
import { ClickAwayListener } from './ClickAwayListener';
import { fireEvent, render } from '@testing-library/react';

describe('ClickAwayListener tests', () => {

  it('Should trigger onClickAwayCallback', () => {

    const onClickAwayFn = jest.fn();
    const otherClickFn = jest.fn();

    const { getByTestId } = render(
      <div id="away" data-testid='away' onClick={otherClickFn} >
        <ClickAwayListener onClickAway={onClickAwayFn} />
      </div>
    )

    fireEvent.click(getByTestId('away'));
    expect(otherClickFn).toBeCalledTimes(1);
    expect(onClickAwayFn).toBeCalledTimes(1);
  });

  it('Should not trigger onClickAwayCallback', () => {

    const onClickAwayFn = jest.fn();
    const otherClickFn = jest.fn();

    const { getByTestId } = render(
      <ClickAwayListener onClickAway={onClickAwayFn} >
        <div id="away" data-testid='away' onClick={otherClickFn} />
      </ClickAwayListener>
    )

    fireEvent.click(getByTestId('away'));
    expect(otherClickFn).toBeCalledTimes(1);
    expect(onClickAwayFn).toBeCalledTimes(0);
  })

})