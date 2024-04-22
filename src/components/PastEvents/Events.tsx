import Picture1 from "../../assets/images/oldEvents/20240217_Infostand_Soest_(2).jpg";
import Picture2 from "../../assets/images/oldEvents/20240217_Infostand_Soest.jpg";
import Picture3 from "../../assets/images/oldEvents/20240224_Landesparteitag.jpg";
import Picture4 from "../../assets/images/oldEvents/20240302_Kreisparteitag.jpg";
import Picture5 from "../../assets/images/oldEvents/20240307_Helferich.jpg";
import Picture6 from "../../assets/images/oldEvents/20240307_Tim.jpg";
import Picture7 from "../../assets/images/oldEvents/20240316_Bezirksparteitag.jpg";
import Picture8 from "../../assets/images/oldEvents/20240323_Espendiller.jpg";
import Picture9 from "../../assets/images/oldEvents/20240323_Infostand_Werl.jpg";
import Picture10 from "../../assets/images/oldEvents/20240215_Schmidt_Keuter.jpg";
import { Event } from "./Event";

export let events: Event[] = [];

events.push(
  new Event(
    Picture8,
    "23. März 2024",
    "Infoabend mit Michael Espendiller MdB",
    [
      "Mit Dr. Michael Espendiller als Referent kam Ende März der fünfte Bundestagsabgeordnete in diesem Jahr zu uns nach Soest. Dr. Espendiller gab uns einen Einblick in seine Arbeit als Haushaltspolitiker der AfD und zeigte unteranderem auf wie viel Geld von unserer Regierung „verbrannt“ wird.",
    ]
  )
);

events.push(
  new Event(Picture9, "23. März 2024", "Infostand in Werl", [
    "Am vergangenen Samstag waren wir wieder in Werl vor Ort.",
    "Trotz der sehr windigen Lage ist es uns gelungen viele unsere Mitbürger mit unseren Flyern zu versorgen.",
  ])
);

events.push(
  new Event(Picture7, "16. März 2024", "Bezirksparteitag", [
    "Mitte März fand in Letmathe dann der Bezirksparteitag statt. Das Tagesprogramm sah die Neuwahl des Vorstandes, sowie die Neuwahl der Bundesdelegierten vor.",
    "Bezirkssprecher blieb Christian Zaum (Siegen). Aus dem Kreisverband Soest zog Manuel Linnemann als Beisitzer in den Vorstand ein.",
    "Auf der Bundesdelegierten-Liste fanden mit Dr. Wilfried Jacobi, Manuel Linnemann und Matthias Höing drei Soester einen Platz.",
  ])
);
events.push(
  new Event(
    Picture6,
    "07. März 2024",
    "Vortragsabend mit Matthias Helferich MdB und Tim Csehan",
    [
      "Anfang März folgte der nächste Infoabend. Diesmal besuchten uns Matthias Helferich MdB und Tim Csehan.",
      "Helferich berichtete von seiner Arbeit als Abgeordneter in Berlin und referierte über die Migrationspolitik der Ampelregierung. Tim Csehan thematisierte das Konzept und das Vorgehen des sogenannten Verfassungsschutzes.",
    ]
  )
);
events.push(
  new Event(Picture4, "02. März 2024", "Kreisparteitag", [
    "Heute war Kreisparteitag in Soest. Unter routinierter Leitung von Fabian Jacobi MdB wurden die Bezirks- und Landesdelegierten neugewählt.",
    "Dank für Ihre Unterstützung gilt neben Fabian Jacobi auch unseren Gästen aus dem HSK und Freya Braun.",
  ])
);
events.push(
  new Event(Picture3, "23. Februar 2024", "Landesparteitag", [
    "Ende Februar stand der diesjährige Landesparteitag an. An den zwei Tagen standen, neben der Neuwahl des Landesvorstandes, noch einige Satzungsanträge auf der Tagesordnung. Landessprecher blieb Dr. Martin Vincentz. Unser Kreisverband war mit 10 Delegierten vor Ort.",
  ])
);
events.push(
  new Event(Picture1, "17. Februar 2024", "Infostand in Soest", [
    "Am vergangenen Samstag waren wir wieder in Soest vor Ort.",
    "Gemeinsam mit der Jungen Alternative warben wir für unsere Positionen und informierten über Remigration im Sinne der AfD.",
    "Eins bleibt festzuhalten; der Zuspruch hat durch die 'Demos gegen Rechts' nicht abgenommen!",
  ])
);
events.push(
  new Event(
    Picture10,
    "15. Februar 2024",
    "Vortragsabend mit Eugen Schmidt MdB und Stefan Keuter MdB",
    [
      "Mitte Februar starteten wir mit einem Vortragsabend in das neue Jahr. Zu Besuch waren die beiden Bundestagsabgeordneten Eugen Schmidt und Stefan Keuter.",
      "Schmidt referierte über den Anschlag auf die Nordstream-Pipeline und Keuter berichtete aus dem Untersuchungsausschuss zu Afghanistan.",
    ]
  )
);
