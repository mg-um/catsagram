
interface BaseEntity {
  id: string;
}

export interface User extends BaseEntity {
  name: string;
  email: string;
  img: string;
}

export interface Post extends BaseEntity {
  message: string;
  img: string;
  tags: Tag[];
  user: User;
  comments: Comment[];
}

export interface Tag extends BaseEntity {
  name: string;
}

export interface Comment extends BaseEntity {
  message: string;
  owner: User;
}
