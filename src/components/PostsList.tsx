import React from 'react';
import { Post as PostModel } from 'types';
import Post from './Post';
import styled from 'styled-components';

interface PostsListProps {
  posts: PostModel[]
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <PostContainer>
      {posts.map(post => <Post post={post} key={post.id} />)}
    </PostContainer>
  )
}

export default PostsList;

const PostContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`