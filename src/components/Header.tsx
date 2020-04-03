import React from 'react';
import styled from 'styled-components';
import { sizeToPx } from './Box';
import PageMargin from './PageMargin';
import Logo from './Logo';
import { Flex } from './Flex';
import { FlexItem } from './FlexItem';
import SearchSelect from './SearchSelect';
import { Tag } from 'types';

interface HeaderProps {
  tags: Tag[];
  setTagFilter: (tagId: string | undefined) => void;
}

const Header: React.FC<HeaderProps> = ({ tags, setTagFilter }) => {

  const optionTags = tags.map(tag => ({
    id: tag.id,
    value: tag.id,
    label: tag.name
  }))

  const handleSelectTag = (tagId: string | undefined) => {
    setTagFilter(tagId)
  }

  return (
    <HeaderContainer>
      <PageMargin>
        <Flex alignItems='center' justifyContent='space-between'>
          <FlexItem flex='1 1 0px'>
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </FlexItem>
          <FlexItem flex='1 1 0px' alignSelf='center' style={{ position: 'relative' }}>
            <SearchSelect options={optionTags} onSelect={handleSelectTag} inputProps={{ placeholder: 'Search tag' }} />
          </FlexItem>
          <FlexItem flex='1 1 0px' />
        </Flex>
      </PageMargin>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  border: 1px solid #d3d3d3;
  background-color: white;
  position: sticky;
  padding: ${sizeToPx('md')}px; 
  top: 0;
`;

const LogoContainer = styled.div`
  width: 80%;
`