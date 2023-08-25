export class Event {
  private picture: string;
  private date: string;
  private title: string;
  private text: string[];

  public constructor(
    picture: string,
    date: string,
    title: string,
    text: string[]
  ) {
    this.picture = picture;
    this.date = date;
    this.title = title;
    this.text = text;
  }

  public getPicture(): string {
    return this.picture;
  }

  public getDate(): string {
    return this.date;
  }

  public getTitle(): string {
    return this.title;
  }

  public getText(): string[] {
    return this.text;
  }
}
