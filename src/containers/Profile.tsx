import React from 'react';
import PageMargin from 'components/PageMargin';
import { Flex } from 'components/Flex';
import { FlexItem } from 'components/FlexItem';
import ProfilePic from 'components/ProfilePic';
import { Title, Subtitle } from 'components/Text';
import { User, Post } from 'types';
import styled from 'styled-components';
import { Box } from 'components/Box';
import PostsList from 'components/PostsList';

interface ProfileHeaderProps {
  user: User;
  numOfPosts: number;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, numOfPosts }) => {
  return (
    <Box mBottom='xxxlg' pHorizontal='xxxlg'>
      <Flex flexDirection='row' justifyContent='space-between' alignItems={'center'}>
        <FlexItem flex='1 1 0px'>
          <ProfilePic size={150} src={user.img} />
        </FlexItem>
        <FlexItem flex='1 1 0px'>
          <Flex flexDirection='column'>
            <Title>
              {user.name}
            </Title>
            <Subtitle>
              Posts {numOfPosts}
            </Subtitle>
          </Flex>
        </FlexItem>
        <FlexItem flex='1 1 0px' />
      </Flex>
    </Box>
  )
}

interface ProfileProps {
  user: User;
  posts: Post[];
}

const Profile: React.FC<ProfileProps> = ({ user, posts }) => {
  return (
    <PageMargin>
      <ProfileHeader user={user} numOfPosts={posts.length} />
      <Separator />
      <PostsList posts={posts} />
    </PageMargin>
  )
}

export default Profile;


const Separator = styled.hr`
  border-top: 1px solid rgba(219,219,219);
`