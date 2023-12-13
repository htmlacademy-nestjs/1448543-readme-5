import { PostQuote } from '@project/types';
import { PostEntity } from './post.entity';

export class PostQuoteEntity extends PostEntity implements PostQuote {
  public text: string;
  public author: string;

  constructor(data: PostQuote) {
    super(data);
    this.populate(data);
  }

  public toPOJO() {
    return {
      ...this.getPlainObject(),
      text: this.text,
      author: this.author,
    };
  }

  public populate(data: PostQuote) {
    this.text = data.text;
    this.author = data.author;
  }
}
