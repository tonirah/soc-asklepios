import Head from 'next/head';
import Link from 'next/link';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

export default function About() {
  const title = `Über „SOC Asklepios“`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="container mx-auto text-left pt-12 pb-32 px-2">
        <h1 className="font-mono text-3xl font-bold tracking-wider underline text-primary-focus decoration-accent text-center mb-4">
          {title}
        </h1>
        <div className="bg-neutral border border-neutral mx-auto py-12 max-w-3xl rounded-box">
          <div className="prose lg:prose-lg mx-auto px-5">
            <p>
              Das Serious Game <strong>„SOC Asklepios“</strong> soll
              Softwareentwicklerinnen und Softwareentwicklern das Erlernen und
              Trainieren von Software Refactorings ermöglichen. Refaktorisierung
              bezeichnet die systematische Veränderung / Verbesserung von
              Programmcode, wobei das beobachtbare Verhalten des Programms
              unverändert bleibt. Durch Refactorings kann die Lesbarkeit,
              Wartbarkeit und Erweiterbarkeit von Code in Softwareprojekten
              nachhaltig verbessert werden.
            </p>
            <p>
              <strong>„SOC Asklepios“</strong> wurde als fakultative Ressource
              für den Kurs „Moderne Programmiertechniken und -methoden“ der
              FernUniversität in Hagen entworfen und implementiert, welcher am
              {` `}
              <a
                href="https://www.fernuni-hagen.de/ps/"
                target="_blank"
                rel="noreferrer"
              >
                Lehrgebiet Programmiersysteme
              </a>
              {` `}
              angeboten wird. Studierende des Kurses können somit durch aktives,
              spielerisches Üben die Kursinhalte im Bereich Refactorings
              verinnerlichen und trainieren.
            </p>
            <p>
              Alle Refactorings des Kurstextes kommen im Spiel vor, sie sind auf
              der{` `}
              <Link href="/info">
                <a>Infoseite</a>
              </Link>
              {` `}zudem aufgelistet. Sie beruhen auf dem Buch{` `}
              <a
                href="https://martinfowler.com/books/refactoring.html"
                target="_blank"
                rel="noreferrer"
              >
                Refactoring: Improving the Design of Existing Code
              </a>
              {` `}
              von Martin Fowler, wobei die Bezeichnungen auf der ersten Ausgabe
              (1999) des Buches basieren. Die Aufgaben passen thematisch zum
              Narrativ „Raumschiff“ und wurden selbstständig entworfen. Die
              Mechanik der Aufgaben ist oftmals vom Kurstext und somit von
              Fowlers Beispielen inspiriert.
            </p>
            <h2>Haftung / Datenschutz / Kontakt</h2>
            <p>
              Trotz großer Sorgfalt beim Erstellen von Spiel und Aufgaben wird
              keine Gewähr übernommen für die Korrektheit, Vollständigkeit,
              Aktualität und Funktionalität des Spiels.
            </p>
            <p>
              Für die Funktionalität des Spiels ist es technisch notwendig, dass
              der Spielstand lokal im Browser im Local Storage
              zwischengespeichert wird. Es werden keine personenbezogenen Daten
              erhoben oder ausgewertet.
            </p>
            <p>
              Der Quelltext des Spiels ist öffentlich verfügbar:
              <a
                href="https://github.com/tonirah/soc-asklepios"
                target="_blank"
                rel="noreferrer"
              >
                github.com/tonirah/soc-asklepios
              </a>
              .
            </p>
            <p>
              Eine Kontaktaufnahme ist über GitHub möglich:{` `}
              <a
                href="https://github.com/tonirah"
                target="_blank"
                rel="noreferrer"
              >
                github.com/tonirah
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link href="/#soc-asklepios" scroll={false}>
            <a className="btn">
              <ArrowCircleLeftIcon className="h-5 w-5 mr-1" />
              SOC Asklepios
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
