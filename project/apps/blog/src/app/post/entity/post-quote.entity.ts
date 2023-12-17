import { PostQuote } from '@project/types';

export class PostQuoteEntity implements PostQuote {
  public text: string;
  public author: string;

  constructor(data: PostQuote) {
    this.populate(data);
  }

  public toPOJO() {
    return {
      text: this.text,
      author: this.author,
    };
  }

  public populate(data: PostQuote) {
    this.text = data.text;
    this.author = data.author;
  }
}
