// export default function PhysicalProducts() {
//   return (
//     <section className="main-content container my-4">
//       <h1 className="fw-bold mb-2">
//         Physical Pr<span className="accent">o</span>ducts
//       </h1>
//       <p className="text-muted mb-5">
//         Selected work in product development, design and international sourcing.
//       </p>
//       </section>
//   );
// }


import { Link } from "react-router-dom";

const focusAreas = [
  {
    number: "01",
    title: "Product Research, Development & Design",
    description:
      "Turning research, inspiration and market opportunities into original products, collections and creative concepts.",
    capabilities: [
      "Market and competitor research",
      "Product and range development",
      "Hands-on prototyping",
      "DIY kits and production preparation",
    ],
    projects: "Fun Fashion Factory · Beaded Animals · Original product collections",
  },
  {
    number: "02",
    title: "International Sourcing & Production",
    description:
      "Connecting materials, suppliers and product ideas across international markets.",
    capabilities: [
      "International sourcing and supplier selection",
      "Material research and evaluation",
      "Purchasing and supplier negotiation",
      "Production preparation and quality control",
    ],
    projects:
      "Global sourcing experience · Hungary and China production",
    link: "/international-sourcing",
    linkLabel: "Explore sourcing & production",
  },
  {
    number: "03",
    title: "Retail & Commercial Concepts",
    description:
      "Developing distinctive product assortments and retail experiences with commercial awareness.",
    capabilities: [
      "Retail and product concepts",
      "Assortment planning and pricing",
      "Packaging and visual merchandising",
      "Wholesale and retail product ranges",
    ],
    projects: "City Queen · B2B Gemstone Jewellery · Seasonal assortments",
  },
  {
    number: "04",
    title: "Creative Collaborations & Community Projects",
    description:
      "Bringing creative ideas to life through collaboration with publishers, instructors, organisations and other partners.",
    capabilities: [
      "Creative project development",
      "Workshop concepts and coordination",
      "Material selection for specific users",
      "Exhibitions and creative collaborations",
    ],
    projects: "Érintettek Lánca · Fűződe · Trade fairs and media",
  },
];

const featuredProjects = [
  {
    number: "01",
    category: "PRODUCT CONCEPT · INTERNATIONAL PRODUCTION",
    title: "Fun Fashion Factory",
    description:
      "An international DIY jewellery concept comprising 48 designs across four product categories. From range architecture and kit composition to sampling, production follow-up and sales planning.",
    tags: ["Product concept", "DIY kits", "China production"],
  },
  {
    number: "02",
    category: "PRODUCT DEVELOPMENT · PRODUCTION DOCUMENTATION",
    title: "Beaded Animals",
    description:
      "DIY seed-bead animal kits developed for a publisher's craft book. My work included creating samples, calculating materials, sourcing components and preparing production and packaging specifications.",
    tags: ["Prototyping", "Material calculation", "Packaging"],
  },
  {
    number: "03",
    category: "RETAIL CONCEPT · JEWELLERY DESIGN",
    title: "City Queen",
    description:
      "An original two-store earring and fashion accessories concept in Budapest. I developed the retail concept, designed original models and prototypes, managed sourcing and product development, and created the packaging and store presentation.",
    tags: ["Retail concept", "Product design", "Visual merchandising"],
  },
];

const additionalProjects = [
  {
    title: "B2B Gemstone Jewellery",
    description:
      "A fixed range of semi-precious stone jewellery supplied to a wholesale partner over a two-year period in a highly price-sensitive business environment.",
  },
  {
    title: "Érintettek Lánca",
    description:
      "A collaborative bead assortment and material concept for a children's support programme, developed together with my father.",
  },
  {
    title: "Fűződe",
    description:
      "A creative workshop initiative combining jewellery-making, specialist craft techniques and jewellery photography.",
  },
];

export default function PhysicalProducts() {
  return (
    <div className="physical-page">
      <section className="physical-hero">
        <p className="physical-eyebrow">PHYSICAL PRODUCTS · PORTFOLIO</p>

        <h1>Physical Products</h1>

        <h2>
          From research and creative concepts to sourcing,
          production and retail.
        </h2>

        <p className="physical-hero-text">
          My experience spans more than 20 years of hands-on
          product development, combining creative thinking,
          material knowledge, international sourcing,
          prototyping and commercial awareness.
        </p>

        <div className="physical-tags">
          <span>Product Development</span>
          <span>Product Design</span>
          <span>International Sourcing</span>
          <span>Retail Concepts</span>
        </div>
      </section>

      <section className="physical-areas">
        <div className="physical-section-heading">
          <p className="physical-eyebrow">AREAS OF EXPERIENCE</p>
          <h2>Four connected areas of expertise</h2>
          <p>
            My work connects the creative, practical and
            commercial aspects of bringing physical products
            to market.
          </p>
        </div>

        <div className="physical-area-grid">
          {focusAreas.map((area) => (
            <article className="physical-area-card" key={area.number}>
              <span className="physical-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>

              <ul>
                {area.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="physical-area-projects">
                <span>SELECTED EXPERIENCE</span>
                <p>{area.projects}</p>
              </div>

              {area.link && (
                <Link
                  to={area.link}
                  className="physical-card-link"
                >
                  {area.linkLabel} <span>→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="physical-process">
        <div className="physical-section-heading">
          <p className="physical-eyebrow">MY APPROACH</p>
          <h2>Understanding the complete product journey</h2>
          <p>
            I approach product development as a connected process,
            where creative ideas, material choices, production
            possibilities and commercial needs inform each other.
          </p>
        </div>

        <div className="physical-process-grid">
          {[
            ["01", "Research", "Market, customer and competitor insights."],
            ["02", "Concept", "Ideas, product groups and assortment opportunities."],
            ["03", "Sourcing", "Materials, suppliers and commercial evaluation."],
            ["04", "Prototyping", "Hands-on samples and product specifications."],
            ["05", "Production", "Production preparation and quality checks."],
            ["06", "Market", "Packaging, presentation and commercial context."],
          ].map(([number, title, text]) => (
            <article className="physical-process-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="physical-featured">
        <div className="physical-section-heading">
          <p className="physical-eyebrow">SELECTED PROJECTS</p>
          <h2>Product stories</h2>
          <p>
            A selection of projects illustrating different
            aspects of my product development and retail experience.
          </p>
        </div>

        <div className="physical-featured-grid">
          {featuredProjects.map((project) => (
            <article
              className="physical-featured-card"
              key={project.number}
            >
              <span className="physical-number">
                {project.number}
              </span>

              <p className="physical-project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="physical-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="physical-additional">
        <div className="physical-section-heading">
          <p className="physical-eyebrow">ADDITIONAL EXPERIENCE</p>
          <h2>Other projects and collaborations</h2>
        </div>

        <div className="physical-additional-grid">
          {additionalProjects.map((project) => (
            <article key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="physical-cta">
        <div>
          <p className="physical-eyebrow">EXPLORE MORE</p>
          <h2>International Sourcing & Production</h2>
          <p>
            Discover my experience in international markets,
            material sourcing, supplier collaboration and
            production preparation.
          </p>
        </div>

        <Link
          to="/international-sourcing"
          className="physical-cta-link"
        >
          Explore the experience <span>→</span>
        </Link>
      </section>
    </div>
  );
}
