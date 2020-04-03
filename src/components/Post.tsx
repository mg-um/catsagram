import React from 'react';
import styled from "styled-components";
import { Post as PostModel, Comment as CommentModel } from '../types';
import CardBase from './Card';
import { Flex } from './Flex';
import ProfilePic from './ProfilePic';
import { Link } from 'react-router-dom';
import { Box } from './Box';
import TagBase from './Tag';
import Comments from './Comments';
import Comment from './Comment';

interface PostHeaderProps {
  user: PostModel['user'];
}

const PostHeader: React.FC<PostHeaderProps> = ({ user }) => {
  return (
    <Box mVertical='lg'>
      <Flex justifyContent='flex-start' alignItems='center' flexDirection='row'>
        <ProfilePic src={user.img} size={50} />
        <Box mLeft='md'>
          <UserNameLabel to={`/user/${user.id}`}>{user.name}</UserNameLabel>
        </Box>
      </Flex>
    </Box>
  )
}

const PostFooter: React.FC<PostProps> = ({ post }) => {

  const postDescriptionAsComment: CommentModel = {
    id: Math.round(Math.random() * 10000).toString(),
    message: post.message,
    owner: post.user
  }

  return (
    <Box mTop={'lg'}>
      <TagsContainer>
        {post.tags.map(tag => (
          <Box key={tag.id} mRight='sm'>
            <Tag>{tag.name}</Tag>
          </Box>
        ))
        }
      </TagsContainer>
      <Box mTop={'lg'}>
        <Comment comment={postDescriptionAsComment} />
        <Comments comments={post.comments} />
      </Box>
    </Box>
  )
}

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Box mBottom='md'>
      <Card>
        <PostHeader user={post.user} />
        <Image src={post.img} alt="Cat" />
        <PostFooter post={post} />
      </Card>
    </Box>
  )
}
export default Post;

const Image = styled.img`
  width: 100%;
`
const UserNameLabel = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  &:hover{
    text-decoration: underline;
  }
`

const TagsContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
`

const Tag = styled(TagBase)`
  min-height: min-content;
  display: flex;
`

const Card = styled(CardBase)`
@media (max-width: 768px) {
  border: unset;
}
`