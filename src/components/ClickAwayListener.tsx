import React, { useRef, useEffect } from 'react';

interface ClickAwayListenerProps {
  onClickAway: () => void;
}

export const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({ children, onClickAway }) => {
  const ref = useRef<any>(null);

  function handleClickOutside(event: any): void {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      onClickAway();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);

    return (): void => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);

    };
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};
