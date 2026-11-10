import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

import therapistWebsite from "../images/Terepauta.jpg";
import printingCompany from "../images/Karika.png";

const content = {
  no: {
    nav: {
      home: "Hjem",
      projects: "Prosjekter",
      about: "Om meg",
      contact: "Kontakt",
    },

    hero: {
      role: "Webdesigner & frontendutvikler",
      title:
        "Jeg designer og utvikler nettsider – fra idé til ferdig nettside.",
      text: "Jeg hjelper deg med å finne ut hva nettsiden din trenger, hvordan den bør struktureres og hvordan den skal fungere for de som besøker den. Deretter gjør jeg ideen om til et tydelig design og en funksjonell, responsiv nettside.",
      work: "Se arbeidet mitt",
      contact: "Ta kontakt",
    },

    process: {
      eyebrow: "HVORDAN JEG JOBBER",
      title: "Fra idé til ferdig nettside",

      steps: [
        {
          number: "01",
          title: "Forstå",
          text: "Vi snakker om virksomheten din, målene dine og hva nettsiden skal oppnå.",
        },
        {
          number: "02",
          title: "Strukturere",
          text: "Vi finner ut hvilken informasjon som trengs og hvordan siden bør organiseres.",
        },
        {
          number: "03",
          title: "Designe",
          text: "Jeg lager et tydelig og moderne design som passer virksomheten din og målgruppen din.",
        },
        {
          number: "04",
          title: "Utvikle",
          text: "Jeg bygger nettsiden og sørger for at den fungerer på ulike skjermer og enheter.",
        },
        {
          number: "05",
          title: "Publisere",
          text: "Jeg tester siden, kobler til domene og gjør den klar for lansering.",
        },
      ],
    },

    services: {
      eyebrow: "DETTE KAN JEG HJELPE DEG MED",
      title: "Hva trenger du hjelp med?",

      items: [
        {
          title: "Nettsider",
          text: "Moderne og responsive nettsider for små bedrifter, personlige merkevarer og kreative prosjekter.",
        },
        {
          title: "Landingssider",
          text: "Fokuserte sider for tjenester, produkter, kampanjer eller arrangementer.",
        },
        {
          title: "Tilpassede funksjoner",
          text: "Skjemaer, bookingsystemer, brukerkontoer og andre interaktive løsninger.",
        },
        {
          title: "Forbedringer",
          text: "Oppdateringer, nye sider, responsiv tilpasning, designforbedringer og mindre funksjonalitetsendringer.",
        },
        {
          title: "Flerspråklige nettsider",
          text: "Nettsider som fungerer godt på tvers av flere språk og målgrupper.",
        },
      ],

      more: "Har du noe mer spesifikt i tankene? La oss ta en prat om hva du trenger.",
    },

    projects: {
      eyebrow: "UTVALGTE PROSJEKTER",
      title: "Nettsider & webprosjekter",

      items: [
        {
          title: "Terapeut nettside",
          category: "Client project",
          text: "En rolig og tillitsvekkende nettside med tydelig tjenestepresentasjon og online timebestilling.",
          link: "/projects",
          image: therapistWebsite,
        },
        {
          title: "Trykkeri nettside",
          category: "Client project",
          text: "En informativ nettside som presenterer tjenester og gjør det enkelt for besøkende å finne informasjon.",
          link: "/projects",
          image: printingCompany,
        },
        {
          title: "Rockeband nettside",
          category: "Client project",
          text: "Et visuelt konsept for et rockeband med fokus på musikk, konserter og nyheter.",
          link: "/projects",
        },
      ],

      allProjects: "Se alle prosjekter",
    },

    development: {
      eyebrow: "UTVIKLERBAKGRUNN",
      title: "Teknologi & utvikling",
      text: "Jeg har solid erfaring med moderne frontend-utvikling og liker å kombinere teknisk implementasjon med struktur, design og gode brukeropplevelser.",
      link: "Se utviklingsprosjekter",
    },

    contactSection: {
      title: "Har du en idé til et prosjekt?",
      text: "Enten du starter helt fra bunnen av eller ønsker å forbedre en eksisterende nettside – jeg hjelper deg gjerne.",
      button: "Ta kontakt",
    },
  },

  hu: {
    nav: {
      home: "Főoldal",
      projects: "Munkáim",
      about: "Rólam",
      contact: "Kapcsolat",
    },

    hero: {
      role: "Webdesigner & Front-End Developer",
      title:
        "Weboldalakat tervezek és készítek – az ötlettől a kész weboldalig.",
      text: "Segítek átgondolni, hogy mire van szükséged, hogyan érdemes felépíteni az oldalad, és milyen információkat kell a látogatóknak könnyen megtalálniuk. Ezután az ötletből letisztult designt és működő, reszponzív weboldalt készítek.",
      work: "Munkáim",
      contact: "Beszéljünk róla",
    },

    process: {
      eyebrow: "ÍGY DOLGOZOM",
      title: "Az ötlettől a kész weboldalig",

      steps: [
        {
          number: "01",
          title: "Megértés",
          text: "Átbeszéljük a vállalkozásodat, a céljaidat és azt, hogy mit kell elérnie a weboldaladnak.",
        },
        {
          number: "02",
          title: "Struktúra",
          text: "Kitaláljuk, milyen információkra van szükség, és hogyan érdemes felépíteni az oldalt.",
        },
        {
          number: "03",
          title: "Design",
          text: "Letisztult, modern designt készítek, amely illik hozzád és a célközönségedhez.",
        },
        {
          number: "04",
          title: "Fejlesztés",
          text: "Megépítem a weboldalt, és gondoskodom róla, hogy különböző eszközökön is jól működjön.",
        },
        {
          number: "05",
          title: "Publikálás",
          text: "Letesztelem az oldalt, beállítom a domaint, és segítek élesíteni.",
        },
      ],
    },

    services: {
      eyebrow: "AMIBEN SEGÍTENI TUDOK",
      title: "Mire van szükséged?",

      items: [
        {
          title: "Weboldalak",
          text: "Modern, reszponzív weboldalak kisvállalkozásoknak, személyes márkáknak és kreatív projektekhez.",
        },
        {
          title: "Landing oldalak",
          text: "Fókuszált oldalak szolgáltatásokhoz, termékekhez, kampányokhoz vagy eseményekhez.",
        },
        {
          title: "Egyedi funkciók",
          text: "Űrlapok, időpontfoglalás, felhasználói fiókok és egyéb interaktív megoldások.",
        },
        {
          title: "Meglévő oldalak fejlesztése",
          text: "Tartalomfrissítés, új oldalak, reszponzív javítások, designfrissítés és kisebb funkciómódosítások.",
        },
        {
          title: "Többnyelvű weboldalak",
          text: "Olyan weboldalak, amelyek több nyelven és több célközönség számára is jól működnek.",
        },
      ],

      more: "Valami konkrétabb elképzelésed van? Beszéljük át, mire van szükséged.",
    },

    projects: {
      eyebrow: "VÁLOGATOTT MUNKÁIM",
      title: "Weboldalak & webprojektek",

      items: [
        {
          title: "Terapeuta weboldal",
          category: "Ügyfélprojekt",
          text: "Nyugodt, bizalmat építő weboldal jól strukturált szolgáltatásbemutatással és online időpontfoglalással.",
          link: "/projects",
          image: therapistWebsite,
        },
        {
          title: "Nyomda weboldal",
          category: "Ügyfélprojekt",
          text: "Áttekinthető üzleti weboldal a szolgáltatások bemutatására és az információk könnyű megtalálására.",
          link: "/projects",
          image: printingCompany,
        },
        {
          title: "Rockzenekar weboldal",
          category: "Ügyfélprojekt",
          text: "Egy karakteres vizuális koncepció zenekarnak, a zenére, koncertekre és hírekre fókuszálva.",
          link: "/projects",
        },
      ],

      allProjects: "Összes projekt megtekintése",
    },

    development: {
      eyebrow: "FEJLESZTŐI HÁTTÉR",
      title: "Technológia & fejlesztés",
      text: "Modern frontend fejlesztési tapasztalattal rendelkezem, és szeretem a technikai megvalósítást átgondolt struktúrával, designnal és jó felhasználói élménnyel ötvözni.",
      link: "Fejlesztési projektek",
    },

    contactSection: {
      title: "Van egy weboldal-ötleted?",
      text: "Akár teljesen az alapoktól indulsz, akár egy meglévő weboldalt szeretnél fejleszteni – szívesen segítek.",
      button: "Beszéljünk róla",
    },
  },
};

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "REST API",
  "Git",
];

function Home() {
  const [language, setLanguage] = useState("no");

  const t = content[language];

  return (
    <div className="home">
      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="home__header">
        <Link to="/" className="home__logo">
          BORI<span>.</span>
        </Link>

        <nav className="home__nav">
          <Link to="/">{t.nav.home}</Link>
          <Link to="/projects">{t.nav.projects}</Link>
          <Link to="/about">{t.nav.about}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </nav>

        <div className="language-switcher">
          <button
            className={language === "no" ? "active" : ""}
            onClick={() => setLanguage("no")}
          >
            NO
          </button>

          <span>|</span>

          <button
            className={language === "hu" ? "active" : ""}
            onClick={() => setLanguage("hu")}
          >
            HU
          </button>
        </div>
      </header>

      <main>
        {/* =========================
            HERO
        ========================== */}
        <section className="hero">
          <div className="hero__content">
            <p className="hero__eyebrow">BORI KOKENY</p>

            <h1>{t.hero.role}</h1>

            <h2>{t.hero.title}</h2>

            <p className="hero__text">{t.hero.text}</p>

            <div className="hero__buttons">
              <Link to="/projects" className="button button--primary">
                {t.hero.work}
                <span>→</span>
              </Link>

              <Link to="/contact" className="button button--secondary">
                {t.hero.contact}
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="hero__visual">
            <div className="hero__shape"></div>

            <div className="hero__browser">
              <div className="hero__browser-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="hero__browser-content">
                <p>Professional</p>
                <p>website design</p>

                <div className="hero__browser-line"></div>

                <div className="hero__browser-button">
                  {language === "no" ? "Bestill time" : "Időpontfoglalás"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            PROCESS
        ========================== */}
        <section className="process section">
          <div className="section-heading">
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2>{t.process.title}</h2>
          </div>

          <div className="process__grid">
            {t.process.steps.map((step) => (
              <article className="process__item" key={step.number}>
                <span className="process__number">{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            SERVICES
        ========================== */}
        <section className="services section">
          <div className="section-heading">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2>{t.services.title}</h2>
          </div>

          <div className="services__grid">
            {t.services.items.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-card__number">0{index + 1}</span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <p className="services__more">{t.services.more}</p>
        </section>

        {/* =========================
            SELECTED PROJECTS
        ========================== */}
        <section className="projects section">
          <div className="section-heading">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
          </div>

          <div className="projects__grid">
            {t.projects.items.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div
                  className={`project-card__image project-card__image--${index + 1}`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <span>PROJECT 0{index + 1}</span>
                  )}
                </div>

                <div className="project-card__content">
                  <span className="project-card__category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>

                  <Link to={project.link}>
                    {language === "no"
                      ? "Se prosjekt →"
                      : "Projekt megtekintése →"}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="projects__button">
            <Link to="/projects" className="button button--secondary">
              {t.projects.allProjects}
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* =========================
            DEVELOPMENT
        ========================== */}
        <section className="development">
          <div className="development__content">
            <p className="eyebrow">{t.development.eyebrow}</p>

            <h2>{t.development.title}</h2>

            <p>{t.development.text}</p>

            <Link to="/projects">
              {t.development.link} <span>→</span>
            </Link>
          </div>

          <div className="technology-list">
            {technologies.map((technology) => (
              <div className="technology" key={technology}>
                {technology}
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            CONTACT CTA
        ========================== */}
        <section className="contact-cta">
          <div className="contact-cta__content">
            <p className="eyebrow">
              {language === "no" ? "LA OSS SNAKKE" : "BESZÉLJÜNK"}
            </p>

            <h2>{t.contactSection.title}</h2>

            <p>{t.contactSection.text}</p>
          </div>

          <Link to="/contact" className="button button--primary">
            {t.contactSection.button}
            <span>→</span>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;

// export default function Home() {
//   return (
//     <section className="main-content hero d-flex align-items-center">
//       <div className="container">
//         <h1 className="display-3 fw-bold mt-5">
//           B<span className="accent">o</span>ri Kokeny
//         </h1>
//         <h2 className="fw-light mt-3">Business-aware Front-End Developer</h2>

//         <p className="mt-4 lead">
//           I design and build structured digital products with a strategic
//           perspective.
//         </p>

//         <div className="mt-4 d-flex gap-4">
//           <a href="/projects" className="btn btn-dark">
//             View Projects
//           </a>

//           <a href="/contact" className="btn btn-outline-dark">
//             Contact
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
