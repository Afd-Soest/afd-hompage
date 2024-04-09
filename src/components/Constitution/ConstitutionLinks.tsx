import { Typ } from "./Typ";

export class ConstitutionLink {
  private name: string;
  private link: string;
  private typ: Typ;

  public constructor(name: string, link: string, typ: Typ) {
    this.name = name;
    this.link = link;
    this.typ = typ;
  }

  public getName(): string {
    return this.name;
  }

  public getLink(): string {
    return this.link;
  }

  public getTyp(): Typ {
    return this.typ;
  }
}
