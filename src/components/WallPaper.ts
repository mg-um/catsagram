import styled from 'styled-components';
import wallPaper from '../assets/pawsWallPaper.png';

const WallPaper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${wallPaper});
  background-size: 600px 300px;
  background-attachment: fixed;
`

export default WallPaper;