import Picture1 from "../../assets/images/oldEvents/(2023_04_24) Infoabend.png";
import Picture2 from "../../assets/images/oldEvents/(2023_05_04) Stammtisch - Soest.png";
import Picture3 from "../../assets/images/oldEvents/(2023_05_16) Stammtisch - Lippstadt.png";
import Picture4 from "../../assets/images/oldEvents/Kachel Renner.jpg";

class Event {
  private picture: string;

  public constructor(picture: string) {
    this.picture = picture;
  }

  public getPicture(): string {
    return this.picture;
  }
}

export let events: Event[] = [];

events.push(new Event(Picture1));
events.push(new Event(Picture2));
events.push(new Event(Picture3));
events.push(new Event(Picture4));
