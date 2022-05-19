import Head from 'next/head';
import { CodeSmell, Refactoring } from '@/modules/tasks';
import { parseRequiredInt } from '@/common/utils/parseRequired';

const MIN_CHARACTERS_FOR_COMBOBOX = parseRequiredInt(
  process.env.MIN_CHARACTERS_FOR_COMBOBOX,
);

export default function Info() {
  const title = `SOC Asklepios: Story, Mission, Refactorings, Code Smells`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="container mx-auto py-16 px-2">
        <h1 className="font-mono text-3xl font-bold tracking-wider underline text-primary-focus decoration-warning text-center mb-10">
          {title}
        </h1>
        <div className="bg-base-300 border border-neutral shadow-xl mx-auto py-12 max-w-3xl">
          <div className="prose lg:prose-lg mx-auto px-5">
            <h2>Story</h2>
            <p className="lead">
              „Im Jahr 2094. Du befindest dich auf einer interplanetaren Reise,
              und warst bis gerade eben im Hyperschlaf. Die AI (SOLID) des
              Schiffes 'SOC Asklepios' hat dich geweckt. Du musst ihr helfen,
              die Boardsoftware zu prüfen und zu refaktorisieren, um sicher auf
              dem Planet 'Yagni' landen zu können.“
            </p>
            <h3>Mission</h3>
            <p>
              <strong>
                Löse die Refactoring-Aufgaben, damit die Systeme nacheinander
                wieder hochgefahren werden können und das Raumschiff sicher
                landen kann.
              </strong>
            </p>
            <p>
              Für jede Codestelle musst du passende Refactorings und/oder Code
              Smells eingeben. Mögliche Eingaben sind weiter unten auf dieser
              Seite aufgelistet.
            </p>
            <p>
              Sobald du mindestens{` `}
              {MIN_CHARACTERS_FOR_COMBOBOX} Buchstaben eingegeben hast werden
              dir mögliche Eingaben vorgeschlagen (Combobox mit Autosuggest).
            </p>
            <h3>Details</h3>
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

            <h2 id="code-smells">Liste von Code Smells</h2>
            <ul>
              {Object.values(CodeSmell).map((codeSmell) => (
                <li key={codeSmell}>{codeSmell}</li>
              ))}
            </ul>
            <h2 id="refactorings">Liste von Refactorings</h2>
            <ul>
              {Object.values(Refactoring).map((refactoring) => (
                <li key={refactoring}>{refactoring}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
