import Manuel from "../../assets/images/Vorstand/Vorstandsmitglieder/Manuel.jpg";
import Matthias from "../../assets/images/Vorstand/Vorstandsmitglieder/Matthias.jpg";
import Michael from "../../assets/images/Vorstand/Vorstandsmitglieder/Michael.jpg";
import Ulrich from "../../assets/images/Vorstand/Vorstandsmitglieder/Ulrich.jpg";
import { Member } from "./Member";

export let members: Member[] = [];
members.push(
  new Member(
    Matthias,
    "Matthias Höing",
    "Sprecher des Kreisverbandes",
    "matthias.hoeing@afd-soest.de",
    ["Kaufmännischer Angestellter", "Wohnhaft in Erwitte", "1978 geboren"]
  )
);
members.push(
  new Member(
    Manuel,
    "Manuel Linnemann",
    "Stellvertretender Sprecher des Kreisverbandes",
    "manuel.linnemann@afd-soest.de",
    ["Vermessungstechniker", "Wohnhaft in Lippetal", "1997 geboren"]
  )
);
members.push(
  new Member(
    Michael,
    "Michael Hasse",
    "Stellvertretender Sprecher des Kreisverbandes",
    "michael.hasse@afd-soest.de",
    [
      "Mitglied des Rates der Stadt Lippstadt",
      "Dreher",
      "Wohnhaft in Lippstadt",
      "1984 geboren",
    ]
  )
);
members.push(
  new Member(
    Ulrich,
    "Ulrich von Zons",
    "Schatzmeister des Kreisverbandes",
    "ulrich.vonzons@afd-soest.de",
    [
      "Sachkundiger Bürger ",
      "Rechtsanwalt",
      "Wohnhaft in Lippstadt",
      "1968 geboren",
    ]
  )
);
