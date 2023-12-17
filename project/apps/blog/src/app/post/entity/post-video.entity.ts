import { PostVideo } from '@project/types';

export class PostVideoEntity implements PostVideo {
  public headline: string;
  public link: string;

  constructor(data: PostVideo) {
    this.populate(data);
  }

  public toPOJO() {
    return {
      headline: this.headline,
      link: this.link,
    };
  }

  public populate(data: PostVideo) {
    this.headline = data.headline;
    this.link = data.link;
  }
}
