import styled from 'styled-components';

export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg' | 'xxxlg' | 'xxxxlg'

interface BoxProps {
  m?: Size;
  mTop?: Size;
  mBottom?: Size;
  mLeft?: Size;
  mRight?: Size;
  mHorizontal?: Size;
  mVertical?: Size;
  p?: Size;
  pTop?: Size;
  pBottom?: Size;
  pLeft?: Size;
  pRight?: Size;
  pHorizontal?: Size;
  pVertical?: Size;
}

export const sizeToPx = (size: Size) => {
  const sizePixelMap: { [s in Size]: number } = {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xlg: 20,
    xxlg: 24,
    xxxlg: 32,
    xxxxlg: 48
  }
  return sizePixelMap[size] || 0;
}

export const Box = styled.div<BoxProps>`
  ${props => props.m !== undefined && `margin: ${sizeToPx(props.m)}px`};
  ${props => props.mHorizontal !== undefined && `margin-left: ${sizeToPx(props.mHorizontal)}px; margin-right: ${sizeToPx(props.mHorizontal)}px`};
  ${props => props.mVertical !== undefined && `margin-top ${sizeToPx(props.mVertical)}px; margin-bottom ${sizeToPx(props.mVertical)}px`};
  ${props => props.mTop !== undefined && `margin-top: ${sizeToPx(props.mTop)}px`};
  ${props => props.mBottom !== undefined && `margin-bottom: ${sizeToPx(props.mBottom)}px`};
  ${props => props.mLeft !== undefined && `margin-left: ${sizeToPx(props.mLeft)}px`};
  ${props => props.mRight !== undefined && `margin-right: ${sizeToPx(props.mRight)}px`};
  ${props => props.p !== undefined && `padding: ${sizeToPx(props.p)}px`};
  ${props => props.pHorizontal !== undefined && `padding-left: ${sizeToPx(props.pHorizontal)}px; padding-right: ${sizeToPx(props.pHorizontal)}px`};
  ${props => props.pVertical !== undefined && `padding-top: ${sizeToPx(props.pVertical)}px; padding-bottom: ${sizeToPx(props.pVertical)}px; `};
  ${props => props.pTop !== undefined && `padding-top: ${sizeToPx(props.pTop)}px`};
  ${props => props.pBottom !== undefined && `padding-bottom: ${sizeToPx(props.pBottom)}px`};
  ${props => props.pLeft !== undefined && `padding-left: ${sizeToPx(props.pLeft)}px`};
  ${props => props.pRight !== undefined && `padding-right: ${sizeToPx(props.pRight)}px`};
`
