import { PostText } from '@project/types';

export class PostTextEntity implements PostText {
  public headline: string;
  public preview: string;
  public text: string;

  constructor(data: PostText) {
    this.populate(data);
  }

  public toPOJO() {
    return {
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
