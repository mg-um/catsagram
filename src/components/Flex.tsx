import React from 'react';
export interface FlexProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  alignContent?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch';
  className?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  inline?: boolean;
  justifyContent?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
  style?: object;
}

export const Flex: React.FC<FlexProps> = ({
  alignItems,
  alignContent,
  className,
  flexDirection,
  flexWrap,
  inline,
  justifyContent,
  style,
  children,
}) => {
  style = {
    display: inline ? 'inline-flex' : 'flex',
    alignItems,
    alignContent,
    flexDirection,
    flexWrap,
    justifyContent,
    ...style,
  };

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};
