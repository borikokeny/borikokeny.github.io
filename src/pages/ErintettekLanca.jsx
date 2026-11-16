import { Link } from "react-router-dom";
import programOverview from "../images/erintettek-program-overview.png";
import kemoBeads from "../images/erintettek-kemo-beads.webp";
import citopeniaBeads from "../images/erintettek-citopenia-beads.jpg";
import "../styles/erintettek-lanca.css";

const projectFacts = [
  { label: "Programme period", value: "2017–present" },
  { label: "Context", value: "Hungary · Children's oncology" },
  { label: "Project partner", value: "Érintettek Egyesület" },
  { label: "My contribution", value: "Bead assortment & material specifications" },
];

const designConsiderations = [
  {
    number: "01",
    title: "Distinctive bead types",
    text: "Each defined treatment or examination milestone needed a bead type that could be recognised through its colour, shape, pattern or material.",
  },
  {
    number: "02",
    title: "A durable stringing system",
    text: "The beads needed sufficiently large holes to pass over a strong, durable cord, so the strand could grow over months or years of treatment.",
  },
  {
    number: "03",
    title: "Durability in everyday use",
    text: "The beads had to withstand repeated handling while remaining visually appealing and cheerful for children.",
  },
  {
    number: "04",
    title: "Cost and availability",
    text: "The assortment had to be achievable within the available budget and based on materials that could be sourced and replenished reliably.",
  },
];

export default function ErintettekLanca() {
  return (
    <div className="el-case">
      <div className="el-topline">
        <Link to="/physical-products" className="el-back">
          <span aria-hidden="true">←</span> Physical Products
        </Link>
        <span>COMMUNITY PROJECT · MATERIAL DEVELOPMENT · 2017–PRESENT</span>
      </div>

      <section className="el-hero">
        <div className="el-hero__copy">
          <p className="el-eyebrow">ÉRINTETTEK LÁNCA · HUNGARY</p>
          <h1>A bead for every milestone.</h1>
          <p className="el-hero__subtitle">
            Developing a thoughtful bead assortment for children navigating a long treatment journey.
          </p>
          <p className="el-hero__intro">
            Inspired by the American Beads of Courage model, the Érintettek Lánca programme gives children a tangible way to recognise and tell the story of their treatment milestones. Working together with my father, I developed the bead assortment and material specifications for the Hungarian initiative: distinctive, durable and cheerful beads, selected to work in real clinical settings as well as in a child’s hands.
          </p>
          <div className="el-tags" aria-label="Project areas">
            <span>Material selection</span>
            <span>Product specification</span>
            <span>Design for use</span>
            <span>Collaborative sourcing</span>
          </div>
        </div>
        <figure className="el-hero__image">
          <img src={programOverview} alt="Érintettek Lánca programme materials, labelled bead organisers and starter items" />
          <figcaption>The Hungarian programme materials and bead organisers.</figcaption>
        </figure>
      </section>

      <section className="el-facts" aria-label="Project at a glance">
        {projectFacts.map((fact) => (
          <div className="el-fact" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </section>

      <section className="el-section el-opportunity">
        <div className="el-section__heading">
          <p className="el-eyebrow">01 / THE OPPORTUNITY</p>
          <h2>Adapting an inspiring idea to a Hungarian care setting</h2>
        </div>
        <div className="el-prose">
          <p>
            Érintettek Egyesület, an organisation supporting families of children with cancer, approached our family business with the idea of creating a Hungarian programme inspired by the US-based Beads of Courage model.
          </p>
          <p>
            The concept is simple and meaningful: after a defined examination, treatment or procedure, a child receives a specific bead. The beads are threaded onto a long cord, gradually creating a personal record of the many milestones along the treatment journey. The strand can help children and their families see how much they have already been through and gives them something tangible to hold, share and talk about.
          </p>
          <p>
            Our task was to help turn that idea into a practical material system that could be used in Hungarian treatment centres and supported by healthcare staff as part of their existing work.
          </p>
          <div className="el-source-links">
            <a href="https://beadsofcourage.org/" target="_blank" rel="noreferrer">Beads of Courage – original programme <span>↗</span></a>
            <a href="https://erintettek.hu/erintettek-lanca/" target="_blank" rel="noreferrer">Érintettek Lánca – Hungarian programme <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="el-section">
        <div className="el-section__heading">
          <p className="el-eyebrow">02 / MATERIAL & ASSORTMENT DEVELOPMENT</p>
          <h2>A distinct bead for every milestone</h2>
          <p className="el-section__lead">
            I developed the bead assortment so that different treatment and examination events could be represented by visually distinct bead types.
          </p>
        </div>
        <div className="el-material-grid">
          <figure className="el-image-block">
            <img src={citopeniaBeads} alt="Colourful beads organised in a transparent container labelled Citopénia" loading="lazy" />
            <figcaption>A labelled bead category in the Hungarian programme assortment.</figcaption>
          </figure>
          <figure className="el-image-block">
            <img src={kemoBeads} alt="Colourful beads in a transparent organiser labelled KEMO" loading="lazy" />
            <figcaption>A close-up of the KEMO bead category.</figcaption>
          </figure>
        </div>
        <div className="el-prose el-material-copy">
          <p>
            I selected bead types that could be distinguished by their shape, colour, pattern and material. The aim was to make the categories recognisable without relying only on written labels, while giving each bead a bright, positive visual character.
          </p>
          <p>
            This was not simply a decorative assortment. The beads had to be practical components in a system that a child might use over many months or even years.
          </p>
        </div>
      </section>

      <section className="el-section el-considerations">
        <div className="el-section__heading">
          <p className="el-eyebrow">03 / DESIGNING FOR REAL-WORLD USE</p>
          <h2>Designed for children, workable for care teams</h2>
          <p className="el-section__lead">
            The material choices had to serve two connected experiences: the child collecting and keeping the beads, and the healthcare staff organising and distributing them.
          </p>
        </div>
        <div className="el-consideration-grid">
          {designConsiderations.map((item) => (
            <article className="el-consideration" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="el-user-needs">
          <div>
            <p className="el-eyebrow">FOR CHILDREN & FAMILIES</p>
            <h3>A personal, colourful record</h3>
            <p>
              The beads needed to feel joyful and engaging, withstand repeated handling and make each milestone visibly distinct. As the strand grew, it could become a personal reminder of the journey already travelled.
            </p>
          </div>
          <div>
            <p className="el-eyebrow">FOR HEALTHCARE STAFF</p>
            <h3>Simple to organise and hand out</h3>
            <p>
              Nurses and other healthcare staff would manage the bead stock on oncology and other wards, provide the initial set and help children receive the corresponding bead after a treatment or examination. Clear categories, practical organisers and easy access were important to avoid adding unnecessary complexity to their work.
            </p>
          </div>
        </div>
      </section>

      <section className="el-section el-sourcing">
        <div className="el-section__heading">
          <p className="el-eyebrow">04 / SOURCING & PRACTICAL SPECIFICATION</p>
          <h2>Balancing usability, durability and availability</h2>
        </div>
        <div className="el-sourcing-grid">
          <div className="el-prose">
            <p>
              Once the assortment had been defined, we sourced the selected beads from China together with the durable threading cords and the organisers and display solutions needed to store and distribute the materials.
            </p>
            <p>
              The bead-hole diameter was a particularly important specification: each bead had to pass over the chosen cord, while the cord itself needed to be strong enough for a strand that could become long and heavy over time.
            </p>
            <p>
              Cost, product availability and the possibility of replenishment also informed the selection. The result needed to be practical for the organisation to maintain, not only attractive at the moment of launch.
            </p>
          </div>
          <aside className="el-spec-card">
            <span>KEY PRODUCT REQUIREMENTS</span>
            <ul>
              <li>Recognisably different bead types</li>
              <li>Suitable hole diameter for the cord</li>
              <li>Durable materials for repeated handling</li>
              <li>Cheerful colours and patterns</li>
              <li>Practical organisers and storage</li>
              <li>Affordable and sourceable components</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="el-section el-collaboration">
        <div className="el-section__heading">
          <p className="el-eyebrow">05 / COLLABORATION & RESPONSIBILITIES</p>
          <h2>A shared project with clearly defined contributions</h2>
        </div>
        <div className="el-roles-grid">
          <article>
            <span>MY CONTRIBUTION</span>
            <h3>Bead assortment & material specifications</h3>
            <p>
              I selected and structured the bead assortment, defined the visual and practical differences between bead types, considered hole sizes and cord compatibility, and evaluated durability, availability and cost.
            </p>
          </article>
          <article>
            <span>COLLABORATION & ONGOING SUPPLY</span>
            <h3>Working with my father and Érintettek Egyesület</h3>
            <p>
              I developed the material concept together with my father. Érintettek Egyesület shaped and operates the programme with participating healthcare teams. My father has continued the material-supply relationship with the organisation.
            </p>
          </article>
        </div>
      </section>

      <section className="el-result">
        <figure className="el-result__image">
          <img src={programOverview} alt="The Érintettek Lánca bead programme starter materials, bead organisers and information board" loading="lazy" />
        </figure>
        <div className="el-result__copy">
          <p className="el-eyebrow">06 / THE OUTCOME</p>
          <h2>A practical material system for a deeply personal story</h2>
          <p>
            The assortment and supporting materials helped translate the programme idea into a tangible system: children could receive beads linked to treatment milestones and add them to a lasting personal strand, while healthcare staff had organised categories and supplies to work with.
          </p>
          <p>
            The Érintettek Egyesület describes the programme as having been introduced across all children’s oncology centres in Hungary. This is the organisation’s programme outcome; my contribution was the initial bead assortment and material concept, developed together with my father.
          </p>
        </div>
      </section>

      <section className="el-contribution-summary">
        <p className="el-eyebrow">MY ROLE IN SUMMARY</p>
        <h2>Material knowledge, product thinking and care for the user context.</h2>
        <p>
          This project brought together product specification, material selection, sourcing and collaborative development. It required thinking beyond the bead itself: how it would feel to a child, how it would work on a durable cord, how it would be organised on a ward and how the programme could be practically supplied over time.
        </p>
        <Link to="/physical-products">Back to Physical Products <span>→</span></Link>
      </section>
    </div>
  );
}
