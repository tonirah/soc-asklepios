import Head from 'next/head';

export default function Info() {
  const title = `SOC Asklepios: Story, Mission, Refactorings, Code Smells`;

  const veggieIpsum = (
    <>
      <p>
        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
        onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo
        beet greens corn soko endive gumbo gourd. Parsley shallot courgette
        tatsoi pea sprouts fava bean collard greens dandelion okra wakame
        tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip
        greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
        amaranth water spinach avocado daikon napa cabbage asparagus winter
        purslane kale. Celery potato scallion desert raisin horseradish spinach
        carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot
        green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
        Brussels sprout coriander water chestnut gourd swiss chard wakame
        kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts
        nori azuki bean chickweed potato bell pepper artichoke. Nori grape
        silver beet broccoli kombu beet greens fava bean potato quandong celery.
        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
        parsnip.
      </p>
      <p>
        Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki
        bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley
        jÃ­cama salsify. Celery quandong swiss chard chicory earthnut pea
        potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed
        collard greens nori. Grape wattle seed kombu beetroot horseradish carrot
        squash brussels sprout chard. Pea horseradish azuki bean lettuce avocado
        asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard
        tigernut jÃ­cama green bean celtuce collard greens avocado quandong
        fennel gumbo black-eyed pea. Grape silver beet watercress potato
        tigernut corn groundnut. Chickweed okra pea winter purslane coriander
        yarrow sweet pepper radish garlic brussels sprout groundnut summer
        purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu
        plum komatsuna black-eyed pea green bean zucchini gourd winter purslane
        silver beet rock melon radish asparagus spinach.
      </p>
      <p>
        Beetroot water spinach okra water chestnut ricebean pea catsear
        courgette summer purslane. Water spinach arugula pea tatsoi aubergine
        spring onion bush tomato kale radicchio turnip chicory salsify pea
        sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion
        sorrel courgette turnip greens tigernut soybean radish artichoke wattle
        seed endive groundnut broccoli arugula. Soko radicchio bunya nuts gram
        dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels
        sprout cabbage.
      </p>
      <p>
        Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper
        napa cabbage lettuce tomato kale arugula melon sierra leone bologi
        rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower
        salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot
        winter purslane turnip greens garlic. JÃ­cama garlic courgette coriander
        radicchio plantain scallion cauliflower fava bean desert raisin spring
        onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek
        dandelion silver beet eggplant bush tomato.
      </p>
    </>
  );
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="container mx-auto py-16 px-2">
        <h1 className="font-mono text-3xl font-bold tracking-wider underline text-primary-focus decoration-warning text-center mb-10">
          {title}
        </h1>
        <div className="bg-neutral shadow-xl mx-auto py-12 max-w-6xl">
          <div className="prose lg:prose-lg mx-auto max-w-5xl px-5">
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
              Löse die Refactoring-Aufgaben, damit die Systeme nacheinander
              wieder hochgefahren werden können und das Raumschiff sicher landen
              kann.
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
            {veggieIpsum}
            <h2 id="refactorings">Liste von Refactorings</h2>
            {veggieIpsum}
          </div>
        </div>
      </div>
    </>
  );
}
