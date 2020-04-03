import { Post, User, Comment, Tag } from "types";
import { Type, Action } from "./actions";
import _ from 'lodash';

interface ByIds<T> {
  [tId: string]: T;
};

interface Normalized<T> {
  byIds: ByIds<T>
  allIds: string[];
}

type UnNestedEntity<E, K> = Pick<E, Exclude<keyof E, keyof K>> & K

interface CommentNestedEntity {
  owner: string;
}

interface PostNestedEntities {
  comments: string[],
  user: string,
  tags: string[]
}

type UnNestedPosts = UnNestedEntity<Post, PostNestedEntities>;
type UnNestedComments = UnNestedEntity<Comment, CommentNestedEntity>;

export interface AppState {
  posts: Normalized<UnNestedPosts>;
  comments: Normalized<UnNestedComments>;
  users: Normalized<User>;
  tags: Normalized<Tag>;
  filterTag: string | undefined;
  user: User; // simulates a logged in user;
}

export const initialAppState: AppState = {
  posts: {
    byIds: {},
    allIds: []
  },
  users: {
    byIds: {},
    allIds: []
  },
  user: {
    id: 'm0rt1m3rId',
    name: 'Mortimer Smith',
    email: 'msmith@catstagram.com',
    img: ''
  },
  comments: {
    byIds: {},
    allIds: []
  },
  tags: {
    byIds: {},
    allIds: []
  },
  filterTag: undefined
};

export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case Type.SET_FEED_POSTS:
      const normalizedState = processUnNormalizedPosts(action.payload)
      const combinedState = _.cloneDeep(state);
      combinedState.posts.byIds = { ...combinedState.posts.byIds, ...normalizedState.posts.byIds };
      combinedState.tags.byIds = { ...combinedState.tags.byIds, ...normalizedState.tags.byIds };
      combinedState.comments.byIds = { ...combinedState.comments.byIds, ...normalizedState.comments.byIds };
      combinedState.users.byIds = { ...combinedState.users.byIds, ...normalizedState.users.byIds };
      combinedState.users.allIds = [...new Set([...combinedState.users.allIds, ...normalizedState.users.allIds])];
      combinedState.posts.allIds = [...new Set([...combinedState.posts.allIds, ...normalizedState.posts.allIds])]
      combinedState.comments.allIds = [...new Set([...combinedState.comments.allIds, ...normalizedState.comments.allIds])]
      combinedState.tags.allIds = [...new Set([...combinedState.tags.allIds, ...normalizedState.tags.allIds])]

      return combinedState;
    case Type.SET_TAG_FILTER:
      return { ...state, filterTag: action.payload };
    default:
      return state;
  }
};

function processUnNormalizedPosts(unPosts: Post[]) {

  const users: ByIds<User> = {};
  const tags: ByIds<Tag> = {};
  const comments: ByIds<UnNestedComments> = {};
  const posts: ByIds<UnNestedPosts> = {};

  unPosts.forEach(post => {
    post.comments.forEach(comment => {
      users[comment.owner.id] = comment.owner;
      comments[comment.id] = { ...comment, owner: comment.owner.id };
    });
    post.tags.forEach(tag => {
      tags[tag.id] = tag;
    });
    users[post.user.id] = post.user;
    posts[post.id] = {
      ...post,
      tags: post.tags.map(t => t.id),
      comments: post.comments.map(c => c.id),
      user: post.user.id
    }
  });

  return {
    users: { byIds: users, allIds: Object.keys(users) },
    tags: { byIds: tags, allIds: Object.keys(tags) },
    posts: { byIds: posts, allIds: Object.keys(posts) },
    comments: { byIds: comments, allIds: Object.keys(comments) }
  }
}
