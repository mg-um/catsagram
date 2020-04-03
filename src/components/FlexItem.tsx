import React, { FunctionComponent } from 'react';

export interface FlexItemProps {
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  className?: string;
  flex?: string;
  flexBasis?: string;
  flexGrow?: string | number;
  flexShrink?: string | number;
  order?: string | number;
  style?: object;
}

export const FlexItem: FunctionComponent<FlexItemProps> = ({
  alignSelf,
  children,
  className,
  flex,
  flexBasis = 'auto',
  flexGrow = 0,
  flexShrink = 1,
  order,
  style,
}) => {
  flex = flex != null ? flex : `${flexGrow} ${flexShrink} ${flexBasis}`;

  style = { alignSelf, flex, order, ...style };

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};