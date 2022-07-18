import { Refactoring } from '@/modules/tasks';
import { parseRequiredInt } from '@/common/utils/';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import { CodeBlock, TaskProgressIcon } from '@/common/components';
import Link from 'next/link';
import Head from 'next/head';
import { TaskProgress } from '@/common/hooks';

const MIN_CHARACTERS_FOR_COMBOBOX = parseRequiredInt(
  process.env.MIN_CHARACTERS_FOR_COMBOBOX,
);

const sampleCode = `interface ISample {
  void sampleMethod();

  // ...
}`;

export default function Info() {
  const title = `Story, Mission, Refactorings`;

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
            <h2 className="text-secondary underline decoration-accent">
              Story
            </h2>
            <p className="lead">
              „Im Jahr 2094. Du befindest dich auf einer interplanetaren Reise,
              und warst bis gerade eben im Hyperschlaf. Die AI (SOLID) des
              Schiffes 'SOC Asklepios' hat dich geweckt. Du musst ihr helfen,
              die Boardsoftware zu prüfen und zu refaktorisieren, um sicher auf
              dem Planet 'YAGNI' landen zu können.“
            </p>
            <h3 className="text-secondary underline decoration-accent">
              Mission
            </h3>
            <p>
              <strong>
                Löse die Refactoring-Aufgaben, damit die Systeme nacheinander
                wieder hochgefahren werden können und das Raumschiff sicher
                landen kann.
              </strong>
            </p>
            <p>
              <strong>
                Für jede Codestelle musst du passende Refactorings eingeben
              </strong>
              . Mögliche Eingaben sind weiter unten auf dieser Seite
              aufgelistet.
            </p>
            <p>
              Als Input-Elemente werden <strong>Comboboxen</strong> verwendet,
              diese sind eine Kombination Textfeld und Auswahlliste.{` `}
              <strong>Es gibt 2 Aufgabenarten:</strong>
            </p>
            <ol>
              <li>
                Alle Auswahl-Optionen werden beim Klick in das Textfeld
                angezeigt (Multiple-Choice).
              </li>
              <li>
                Es müssen mindestens {MIN_CHARACTERS_FOR_COMBOBOX} Buchstaben
                eingegeben werden, damit mögliche Auswahl-Optionen angezeigt
                werden. Es kann die deutsche oder englische Bezeichnung
                verwendet werden.
              </li>
            </ol>
            <p>
              Über den Schalter <strong>„Codestellen hervorheben“</strong>
              {` `}
              können optional verdächtige Zeilen hervorgehoben werden:
            </p>
            <div className="bg-base-200 rounded-box">
              <CodeBlock
                code={sampleCode}
                highlightedLines="2"
                isLineHintActive={true}
              />
            </div>
            <p>
              <strong>Die Aufgaben sind auf zwei Wegen zugänglich:</strong>
            </p>
            <ol>
              <li>
                Beim Klick auf einen Bereich des Raumschiffs wird zufällig eine
                (noch nicht gelöste) Aufgabe angezeigt.
              </li>
              <li>
                Über den Menüpunkt „Liste kritischer Codestellen“ können
                Aufgaben direkt ausgewählt werden.
              </li>
            </ol>
            <p>
              In der „Liste kritischer Codestellen“ ist der{` `}
              <strong>Status der Aufgaben</strong> ersichtlich: Offen (
              {
                <TaskProgressIcon
                  taskProgress={undefined}
                  className="h-7 inline-block"
                />
              }
              ), begutachtet (
              {
                <TaskProgressIcon
                  taskProgress={TaskProgress.Visited}
                  className="h-7 inline-block"
                />
              }
              ) und gelöst (
              {
                <TaskProgressIcon
                  taskProgress={TaskProgress.Solved}
                  className="h-7 inline-block"
                />
              }
              ).
            </p>
            <p>
              Über den Menüpunkt{` `}
              <strong
                className="bg-base-300 text-base-content p-2 rounded-box"
                data-theme="light"
              >
                „Helles Design“
              </strong>
              {` `}
              bzw.{` `}
              <strong
                className="bg-base-300 text-base-content p-2 rounded-box"
                data-theme="dark"
              >
                „Dunkles Design“
              </strong>
              {` `}
              kann das Erscheinungsbild entsprechend eingestellt werden.
            </p>
            <p>
              Weitere Informationen über „SOC Asklepios“ sind{` `}
              <Link href="/about">
                <a>hier</a>
              </Link>
              {` `}
              zu finden.
            </p>
            <h3 className="text-secondary underline decoration-accent">
              Details
            </h3>
            <p>
              Du bist Astronautin und Softwareentwicklerin, und der einzige
              wache Mensch auf dem Schiff. Andere können nicht geweckt werden,
              da die SOLID entschieden hat, dass immer nur 1 Mensch zur gleichen
              Zeit wach ist, um Konflikten vorzubeugen. Die Erde ist zu weit weg
              um kurzfristig Kontakt aufzunehmen.
            </p>
            <p>
              Bevor du wach wurdest waren andere Softwareentwicklerinnen und
              Softwareentwickler wach, und haben die Systeme weiterentwickelt.
              Dadurch ist die Codebase dynamisch gewachsen und die
              Softwarequalität lässt zu wünschen übrig. Es gibt Unit-Tests, aber
              die Testabdeckung ist nicht ideal.
            </p>
            <p>
              SOLID kann den Code nur grob analysieren, und daher die
              Zuverlässigkeit der Systeme und die Softwarequalität nicht adäquat
              einschätzen. Sie kann nicht sicher feststellen ob Refactorings
              nötig sind, und sie kann diese auch nicht durchführen. Daher hat
              sie die einzelnen Systeme auf ein Minimum heruntergefahren.
            </p>

            {/*<h2 id="code-smells">Liste von Code Smells</h2>*/}
            {/*<ul>*/}
            {/*  {Object.values(CodeSmell).map((codeSmell) => (*/}
            {/*    <li key={codeSmell}>{codeSmell}</li>*/}
            {/*  ))}*/}
            {/*</ul>*/}
            <h2
              id="refactorings"
              className="text-secondary underline decoration-accent"
            >
              Liste von Refactorings
            </h2>
            <p>Die folgenden Refacotrings kommen in „SOC Asklepios“ vor:</p>
            <ol className="leading-relaxed">
              {Object.values(Refactoring)
                .sort()
                .map((refactoring) => (
                  <li key={refactoring}>{refactoring}</li>
                ))}
            </ol>
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
