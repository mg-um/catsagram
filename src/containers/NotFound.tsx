import React from 'react';
import PageMargin from 'components/PageMargin';
import { Title } from 'components/Text';
import sadCat from 'assets/sadCat.jpg';
import styled from 'styled-components';

const NotFound: React.FC = props => {
  return (
    <PageMargin>
      <Title>
        Not Found 404
      </Title>
      <Image src={sadCat} />
    </PageMargin>
  )
}

export default NotFound;

const Image = styled.img``