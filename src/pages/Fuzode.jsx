import "../styles/fuzode.css";

import beMyBaby from "../images/fuzode-be-my-baby.png";
import forever from "../images/fuzode-forever.png";
import freshFruit from "../images/fuzode-fresh-fruit.png";
import rainbow from "../images/fuzode-rainbow.png";
import sisters from "../images/fuzode-sisters.png";
import sixteen from "../images/fuzode-sixteen.png";
import bigLove from "../images/fuzode-big-love.png";

const inHouseProjects = [
  {
    number: "03",
    title: "Be My Baby",
    description: "A colourful cord-and-bead bracelet project.",
    image: beMyBaby,
  },
  {
    number: "06",
    title: "Forever",
    description: "A pearl-look bracelet finished with small charms.",
    image: forever,
  },
  {
    number: "08",
    title: "Fresh Fruit",
    description: "Playful, colourful stud earrings with fruit-inspired details.",
    image: freshFruit,
  },
  {
    number: "02",
    title: "Rainbow",
    description: "A colourful bead-jewellery project exploring rhythm and colour.",
    image: rainbow,
  },
  {
    number: "10",
    title: "Sisters",
    description: "A coordinated set of colourful cord bracelets.",
    image: sisters,
  },
  {
    number: "05",
    title: "Sixteen",
    description: "A small accessories project featuring decorative hair pins.",
    image: sixteen,
  },
  {
    number: "09",
    title: "Big Love",
    description: "A simple cord necklace project built around a word-shaped charm.",
    image: bigLove,
  },
];

const specialistWorkshops = [
  "Horsehair rings and jewellery",
  "Jewellery photography",
  "Wire crochet techniques",
  "Upcycled rubber jewellery",
  "Embroidered and appliqué felt jewellery",
  "Soutache jewellery",
];

export default function Fuzode() {
  return (
    <main className="fuzode-page">
      <section className="fuzode-hero">
        <p className="fuzode-eyebrow">CREATIVE COLLABORATION · WORKSHOP DEVELOPMENT</p>
        <h1>Fűződe</h1>
        <h2>Scheduled creative workshops, made tangible through hands-on projects.</h2>
        <p className="fuzode-intro">
          Fűződe was a creative workshop programme developed within the Kreativ Ekszer bead shop.
          It invited customers to go beyond buying materials: they could sign up for a specific
          project, learn a technique and make something of their own in a guided session.
        </p>
        <div className="fuzode-facts">
          <div>
            <span>FORMAT</span>
            <strong>Pre-scheduled workshops</strong>
          </div>
          <div>
            <span>LOCATION</span>
            <strong>Within the Kreativ Ekszer shop</strong>
          </div>
          <div>
            <span>PARTICIPATION</span>
            <strong>Fee included the materials</strong>
          </div>
        </div>
      </section>

      <section className="fuzode-section fuzode-concept">
        <div className="fuzode-section-heading">
          <p className="fuzode-eyebrow">01 / THE IDEA</p>
          <h2>Turning a bead shop into a place to learn by making.</h2>
        </div>
        <div className="fuzode-concept-copy">
          <p>
            The idea was to create an experience around the materials already available in the shop.
            Rather than only purchasing beads and components, customers could book a place at an
            advertised workshop and leave with a finished piece they had made themselves.
          </p>
          <p>
            Each session had a defined date and a specific project. The participation fee included
            the materials, making the offer clear and practical for participants.
          </p>
        </div>
      </section>

      <section className="fuzode-section">
        <div className="fuzode-section-heading">
          <p className="fuzode-eyebrow">02 / IN-HOUSE WORKSHOPS</p>
          <h2>Accessible projects, ready to make.</h2>
          <p>
            Simpler jewellery-making sessions were hosted by me and my colleagues. The programme
            included defined projects with their own names and finished-product examples.
          </p>
        </div>

        <div className="fuzode-project-grid">
          {inHouseProjects.map((project) => (
            <article className="fuzode-project-card" key={project.title}>
              <div className="fuzode-project-image-wrap">
                <img src={project.image} alt={`${project.title} workshop project example`} loading="lazy" />
              </div>
              <div className="fuzode-project-copy">
                <span className="fuzode-project-number">PROJECT {project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="fuzode-image-note">
          Project examples from the original Fűződe workshop material. The photographs show the
          pieces participants could make; they are not photographs of the workshop venue.
        </p>
      </section>

      <section className="fuzode-specialist">
        <div className="fuzode-specialist-inner">
          <div className="fuzode-section-heading">
            <p className="fuzode-eyebrow">03 / SPECIALIST-LED WORKSHOPS</p>
            <h2>Making room for less familiar techniques.</h2>
            <p>
              For more specialised subjects, I invited practitioners with expertise in the relevant
              craft. This brought techniques and skills into the shop that customers might not
              otherwise have had the opportunity to try.
            </p>
          </div>
          <div className="fuzode-technique-list">
            {specialistWorkshops.map((workshop, index) => (
              <div className="fuzode-technique" key={workshop}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{workshop}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fuzode-section fuzode-programme">
        <div className="fuzode-section-heading">
          <p className="fuzode-eyebrow">04 / PROGRAMME & COLLABORATION</p>
          <h2>A curated programme with two ways to learn.</h2>
        </div>
        <div className="fuzode-programme-grid">
          <article>
            <span className="fuzode-number">01</span>
            <h3>In-house sessions</h3>
            <p>
              I and my colleagues hosted the more accessible projects, using materials and
              components available through the shop.
            </p>
          </article>
          <article>
            <span className="fuzode-number">02</span>
            <h3>Guest specialists</h3>
            <p>
              I identified and coordinated external experts for workshops requiring specialist
              knowledge or techniques.
            </p>
          </article>
          <article>
            <span className="fuzode-number">03</span>
            <h3>Clearly defined sessions</h3>
            <p>
              Dates, projects and participation fees were announced in advance. The fee included
              the materials needed for the session.
            </p>
          </article>
        </div>
      </section>

      <section className="fuzode-role">
        <div>
          <p className="fuzode-eyebrow">05 / MY ROLE & CONTRIBUTION</p>
          <h2>From workshop idea to a coordinated creative offer.</h2>
        </div>
        <ul>
          <li>Developed the workshop concept within the Kreativ Ekszer shop.</li>
          <li>Selected and structured the workshop projects and techniques.</li>
          <li>Coordinated instructors and specialist collaborators.</li>
          <li>Hosted simpler sessions together with colleagues.</li>
          <li>Connected the workshop offer with suitable materials and components.</li>
          <li>Helped shape a clear programme with advertised dates, projects and material-inclusive fees.</li>
        </ul>
      </section>

      <section className="fuzode-outcome">
        <p className="fuzode-eyebrow">A CREATIVE CHAPTER AT KREATIV EKSZER</p>
        <h2>Making creativity part of the shop experience.</h2>
        <p>
          Fűződe was a relatively short-lived initiative. It was an additional creative programme
          within the bead shop, combining sessions hosted by the shop team with workshops led by
          invited specialists. The programme came to a close around my maternity leave and
          subsequent move to Norway.
        </p>
      </section>
    </main>
  );
}
