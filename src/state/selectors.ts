import { AppState } from "./state";
import { Post, Tag, Comment, User } from "types";

export function getTagsOfIds(state: AppState, ids: string[]): Tag[] {
  return ids.map(id => state.tags.byIds[id])
}

export function getCommentsOfIds(state: AppState, ids: string[]): Comment[] {
  return ids.map(id => {
    const user = state.users.byIds[state.comments.byIds[id].owner];
    return {
      owner: user,
      id: id,
      message: state.comments.byIds[id].message
    }
  })
}

export function getPostsOfUser(state: AppState, userId: string): Post[] {
  const posts = getPosts(state);
  return posts.filter(p => p.user.id === userId);
}

export function getUserOfId(state: AppState, userId: string): User {
  return state.users.byIds[userId];
}

export function filterPostsByTag(posts: Post[], tagId: string | undefined) {
  if (tagId) {
    return posts.filter(post => post.tags.map(t => t.id).includes(tagId));
  } else {
    return posts;
  }
}

export function getPosts(state: AppState): Post[] {
  const posts: Post[] = [];

  state.posts.allIds.forEach(postId => {
    const p = state.posts.byIds[postId];
    const tags = getTagsOfIds(state, p.tags);
    const comments = getCommentsOfIds(state, p.comments);
    const user = state.users.byIds[p.user];
    const post: Post = {
      tags,
      comments,
      user,
      id: postId,
      message: p.message,
      img: p.img
    }

    posts.push(post);
  })

  return filterPostsByTag(posts, state.filterTag);
}

export function getAllTags(state: AppState): Tag[] {
  return Object.values(state.tags.byIds);
}
