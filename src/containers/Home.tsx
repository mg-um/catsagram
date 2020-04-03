import React from 'react';
import { Post as PostModel } from 'types';
import PageMargin from '../components/PageMargin';
import PostsList from 'components/PostsList';
import LoadingPost from 'components/LoadingPost';
import useOnScrollToBottom from 'hooks/useOnScrollToBottom';

interface HomeProps {
  posts: PostModel[],
  fetchPosts: () => void;
}

const Home: React.FC<HomeProps> = ({ posts, fetchPosts }) => {

  useOnScrollToBottom(fetchPosts);

  return (
    <PageMargin>
      <PostsList posts={posts} />
      <LoadingPost />
    </PageMargin>

  )
}

export default Home;


