import Picture1 from "../../assets/images/oldEvents/img1.jpg";
import Picture2 from "../../assets/images/oldEvents/img2.jpg";
import Picture3 from "../../assets/images/oldEvents/img3.jpg";
import Picture4 from "../../assets/images/oldEvents/img4.jpg";
import Picture5 from "../../assets/images/oldEvents/img5.jpg";
import Picture6 from "../../assets/images/oldEvents/img6.jpg";
import { Event } from "./Event";

export let events: Event[] = [];

events.push(
  new Event(Picture1, "31 März,  2023", "Infoabend mit Guido Reil", [
    "Am letzten Märztag besuchte Guido Reil Soest. Als Abgeordneter des Europäischen Parlamentes berichte er über seine Arbeit in Brüssel. Reil zeigte auch auf welch Absurditäten mittlerweile zur Normalität in der EU gehören und welche sinnfreien Prozesse unser Steuergeld verbrennen. Reil machte sehr deutlich, dass die EU in der jetzigen Form abgeschafft werden muss.",
  ])
);

events.push(
  new Event(
    Picture2,
    "15 Oktober, 2022",
    "Die Junge Alternative wählt einen neuen Bundesvorstand",
    [
      "Am 15. Oktober fand im thüringischen Apolda der elfte Bundeskongress der Jungen Alternative statt.",
      "Grußworte an die Parteijugend richteten unter anderem Tino Chrupalla, Björn Höcke und ein Abgesandter der Freiheitlichen Jugend aus Österreich.",
      "Höcke warb in seiner Rede dafür, sich als Jugend noch stärker in der Mutterpartei einzubringen und dieser ein wenig auf die Finger zu klopfen.",
      "Im Laufe des Kongresses wählte die JA einen neuen Bundesvorstand und aktualisierte ihre Programmatischen Leitlinien.",
      "Der neue Bundesvorsitzende ist der Oberfeldwebel und Bundestagsabgeordnete Hannes Gnauck aus Brandenburg. Aus Nordrhein-Westfalen ist Nils Hartwig als stellvertretender Bundesvorsitzer im Vorstand vertreten.",
    ]
  )
);
events.push(
  new Event(Picture3, "23 Oktober, 2022", "Infostand in Soest", [
    "Am 23. Oktober besuchten wir mit unseren neuen Flyern den Soester Marktplatz mit einem Infostand, um über unser Programm gegen die Preissteigerungen zu informieren.",
    "Hier führten wir einige interessante Gespräche und auch wenn das allgemeine Interesse noch gering ausfiel, bleiben als Fazit des Ganzen zwei wesentliche Dinge festzuhalten:",
    "Die Hemmschwelle gegenüber unserer AfD sinkt weiter.",
    "Wir sind die einzige Partei, die zurzeit auf der Straße für Bürger ansprechbar ist.",
    "Im November wollten wir hieran anknüpfen. Zu unserem Bedauern erhielten wir keine Genehmigung, da die gesamte Fußgängerzone für den Weihnachtsmarkt geblockt ist.",
  ])
);
events.push(
  new Event(Picture4, "31 November, 2022", "Kundgebung in Lippstadt", [
    "Mit einer Kundgebung auf dem Lippstädter Rathausplatz schlossen wir diesen Monat ab.",
    "Unsere Themenschwerpunkte waren auch hier unsere Lösungen für bezahlbare Energie und zur Eindämmung der Inflation. Nach der Eröffnung der Kundgebung, durch unseren Kreissprecher Matthias Höing, folgte ein guter Mix an Rednern aus unserem Kreisverband. Als Gastredner waren Günter Koch (Kreissprecher Paderborn) und unser Abgeordneter im Landtag Dr. Christian Blex vor Ort.",
    "Gut 40 Interessenten und Parteifreunde folgten den verschiedenen Redebeiträgen. Besonders gefreut haben uns natürlich auch die Gegendemonstranten, die unsere Kundgebung verfolgt haben. Denn grade unseren roten Freunden, bringen wir gerne vernunftbasierte Politik nahe.",
    "Spaß beiseite. Es ist wieder einmal bezeichnend, wenn die Linken Parteien gemeinsam auf die Straßen gehen und der Grund nicht die gestiegenen Preise sind, sondern unsere AfD. Das sind die Prioritäten. Hieran merkt man wieder einmal sehr deutlich, dass nur noch eine Partei für die Schwächsten in unserer Gesellschaft da ist - unsere Alternative für Deutschland!",
  ])
);
