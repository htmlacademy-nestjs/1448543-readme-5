import { PostText } from '@project/types';
import { PostEntity } from './post.entity';

export class PostTextEntity extends PostEntity implements PostText {
  public headline: string;
  public preview: string;
  public text: string;

  constructor(data: PostText) {
    super(data);
    this.populate(data);
  }

  public toPOJO() {
    return {
      ...this.getPlainObject(),
      headline: this.headline,
      preview: this.preview,
      text: this.text,
    };
  }

  public populate(data: PostText) {
    this.text = data.text;
    this.preview = data.preview;
    this.headline = data.headline;
  }
}
