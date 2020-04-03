import React from 'react';
import logo from '../assets/CatstagramLogo.png';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Image = styled.img`
  width: 100%;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:active{
    transform: scale(1.1);
  }

  &:hover{
    opacity: 0.85;
  }
`

const Logo: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.replace('/')
  }
  return <Image src={logo} onClick={handleClick} />
}

export default Logo;