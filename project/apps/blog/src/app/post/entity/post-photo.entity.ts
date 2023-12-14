import { PostPhoto } from '@project/types';

export class PostPhotoEntity implements PostPhoto {
  public photo: string;

  constructor(data: PostPhoto) {
    this.populate(data);
  }

  public toPOJO() {
    return {
      photo: this.photo,
    };
  }

  public populate(data: PostPhoto) {
    this.photo = data.photo;
  }
}
