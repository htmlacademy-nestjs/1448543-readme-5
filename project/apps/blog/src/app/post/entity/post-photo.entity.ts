import { PostPhoto } from '@project/types';
import { PostEntity } from './post.entity';

export class PostPhotoEntity extends PostEntity implements PostPhoto {
  public photo: string;

  constructor(data: PostPhoto) {
    super(data);
    this.populate(data);
  }

  public toPOJO() {
    return {
      ...this.getPlainObject(),
      photo: this.photo,
    };
  }

  public populate(data: PostPhoto) {
    this.photo = data.photo;
  }
}
