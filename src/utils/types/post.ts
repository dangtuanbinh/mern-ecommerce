export interface IPostReply {
  hasReplied: true;
  content: string;
}

export interface IPostLike {
  number: number;
}

export interface ICommentReply {
  id: number;
  author: string;
  comment: string;
  timeStamp: number;
  likes: number;
  dislikes: number;
  replies: [];
}

export interface IPost {
  id: 1;
  title: string;
  content: string;
  author: string;
  reply: IPostReply;
  likes: IPostLike;
  comments: ICommentReply[]
}
