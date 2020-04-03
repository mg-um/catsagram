import styled from 'styled-components';
import { sizeToPx } from './Box';

function generateTagColor() {
  let letters = '012345'.split('');
  let color = '#';
  color += letters[Math.round(Math.random() * 5)];
  letters = '0123456789ABCDEF'.split('');
  for (var i = 0; i < 5; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }

  return color;
}

const Tag = styled.div`
  padding: ${sizeToPx('xs')}px ${sizeToPx('md')}px;
  background-color: #909090;
  background-color: ${() => generateTagColor()};
  color: white;
  opacity: 1;
  border-radius: 5px;
  white-space: nowrap;

  &:hover{
    opacity:0.8;
  }
`

export default Tag;