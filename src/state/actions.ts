import { Post } from "types";

export enum Type {
  SET_FEED_POSTS = 'SET_FEED_POSTS',
  SET_TAG_FILTER = 'SET_TAG_FILTER',
  CLEAR_TAG_FILTER = 'CLEAR_TAG_FILTER'
}

interface SetFeedPostsAction {
  type: Type.SET_FEED_POSTS;
  payload: Post[];
}

export const setFeedPosts = (posts: Post[]): SetFeedPostsAction => {
  return { type: Type.SET_FEED_POSTS, payload: posts };
};

interface SetTagFilterAction {
  type: Type.SET_TAG_FILTER,
  payload: string | undefined
}

export const setTagFilter = (tagId: string | undefined): SetTagFilterAction => {
  return { type: Type.SET_TAG_FILTER, payload: tagId }
}


export type Action = SetFeedPostsAction | SetTagFilterAction

