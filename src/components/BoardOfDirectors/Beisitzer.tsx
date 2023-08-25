import Andreas from "../../assets/images/Vorstand/Vorstandsmitglieder/Andreas.jpg";
import Eugen from "../../assets/images/Vorstand/Vorstandsmitglieder/Eugen.jpg";
import Jens from "../../assets/images/Vorstand/Vorstandsmitglieder/Jens.jpg";
import Susanne from "../../assets/images/Vorstand/Vorstandsmitglieder/Susanne.jpg";
import Wilfried from "../../assets/images/Vorstand/Vorstandsmitglieder/Wilfried.jpg";

import { Member } from "./Member";

export let beisitzer: Member[] = [];
beisitzer.push(
  new Member(
    Jens,
    "Jens Loewer",
    "Beisitzer im Kreisvorstand",
    "jens.loewer@afd-soest.de",
    ["Mitglied des Kreistags", "Lehrer", "Wohnhaft in Ense", "55 Jahre alt"]
  )
);

beisitzer.push(
  new Member(
    Susanne,
    "Susanne Menke",
    "Beisitzerin im Kreisvorstand",
    "susanne.menke@afd-soest.de",
    ["Heilpraktikerin", "Wohnhaft in Warstein", "53 Jahre alt"]
  )
);

beisitzer.push(
  new Member(
    Eugen,
    "Eugen Bruhl",
    "Beisitzer im Kreisvorstand",
    "eugen.bruhl@afd-soest.de",
    [
      "Sachkundiger Bürger",
      "Kaufmännischer Angestellter",
      "Wohnhaft in Lippstadt",
      "37 Jahre alt",
    ]
  )
);

beisitzer.push(
  new Member(
    Wilfried,
    "Dr. Wilfried Jacobi",
    "Beisitzer im Kreisvorstand",
    "wilfried.jacobi@afd-soest.de",
    ["Chemiker im Ruhestand", "Wohnhaft in Bad Sassendorf", "79 Jahre alt"]
  )
);

beisitzer.push(
  new Member(
    Andreas,
    "Andreas Schacht",
    "Beisitzer im Kreisvorstand",
    "andreas.schacht@afd-soest.de",
    ["Fachkraft für Lagerlogistik", "Wohnhaft in Lippstadt", "44 Jahre alt"]
  )
);
