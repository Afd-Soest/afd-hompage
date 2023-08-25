export class Member {
  private image: string;
  private name: string;
  private role: string;
  private email: string;
  private information: string[];

  public constructor(
    image: string,
    name: string,
    role: string,
    email: string,
    information: string[]
  ) {
    this.image = image;
    this.name = name;
    this.role = role;
    this.email = email;
    this.information = information;
  }

  public getImage(): string {
    return this.image;
  }

  public getName(): string {
    return this.name;
  }

  public getRole(): string {
    return this.role;
  }
  public getEmail(): string {
    return this.email;
  }

  public getInformation(): string[] {
    return this.information;
  }
}
