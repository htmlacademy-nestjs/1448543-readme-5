export const POST_API_NAME = 'post';

export const PostPath = {
  Create: 'create',
  Id: ':id',
  Repost: ':id/repost',
};

export const PostErrorMessage = {
  NotFound: 'Post not found',
  AlreadyReposted: 'Post is already reposted',
  UnableDelete: 'You are unable to delete this post',
};
