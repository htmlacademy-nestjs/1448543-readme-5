export interface Like {
  id?: string;
  postId: string;
  userIds: Set<string>;
}
