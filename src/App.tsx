import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import { Box } from './components/Box';
import Header from 'components/Header';
import Profile from 'containers/Profile';
import { appReducer, initialAppState } from 'state/state';
import { getPosts, getPostsOfUser, getUserOfId, getAllTags } from 'state/selectors';
import Api from 'api';
import { setFeedPosts, setTagFilter } from 'state/actions';

const App: React.FC = () => {

  const [state, dispatch] = useReducer(appReducer, { ...initialAppState })

  const handleFetchPosts = async () => {
    const posts = await Api.getPosts();
    dispatch(setFeedPosts(posts));
  }

  const handleSetTagFilter = (tagId: string | undefined) => {
    dispatch(setTagFilter(tagId))
  }

  useEffect(() => {
    handleFetchPosts();
  }, [])

  const posts = getPosts(state);

  return (
    <Box>
      <Router>
        <Header setTagFilter={handleSetTagFilter} tags={getAllTags(state)} />
        <Box mTop={'md'}>
          <Switch>
            <Route path='/' exact render={() => <Home fetchPosts={handleFetchPosts} posts={posts} />} />
            <Route path='/user/:userId' render={props => {
              const userId = props.match.params.userId;
              const user = getUserOfId(state, userId);
              if (user === undefined) {
                return <Redirect to='/404' />
              }
              return <Profile posts={getPostsOfUser(state, userId)} user={user} />
            }} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default App;
