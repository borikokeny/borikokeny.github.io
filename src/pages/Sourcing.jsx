import { Link } from "react-router-dom";
import qingdaoVisit from "../images/qingdao-production-visit.png";
import hongKongShowroom from "../images/hong-kong-partner-showroom.png";

const sourcingMarkets = [
  {
    region: "Asia",
    label: "Trade fairs · supplier visits · purchasing",
    places: [
      {
        name: "Hong Kong",
        detail:
          "Hong Kong International Jewellery Show, Hong Kong Jewellery & Watch Fair, and visits to local factories, wholesalers and supplier showrooms.",
      },
      {
        name: "Shenzhen, China",
        detail: "Visits to local factories and wholesale suppliers.",
      },
      {
        name: "Yiwu, China",
        detail:
          "Purchasing and business relationship building at International Trade City (Futian Market).",
      },
      {
        name: "Qingdao, China",
        detail:
          "Visit to a Korean-owned manufacturing partner, production follow-up and purchasing at International Jewelry City.",
      },
      {
        name: "Bali, Indonesia",
        detail: "In-person material sourcing, particularly in Ubud.",
      },
    ],
  },
  {
    region: "Europe",
    label: "Trade fairs · purchasing · business connections",
    places: [
      {
        name: "Paris, France",
        detail: "Maison&Objet: purchasing, orders and business relationships.",
      },
      {
        name: "Sainte-Marie-aux-Mines, France",
        detail: "Mineral & Gem: purchasing.",
      },
      {
        name: "Munich, Germany",
        detail: "Munich Mineral Show: exhibiting, purchasing and business relationships.",
      },
      {
        name: "Milan, Italy",
        detail: "Hobby Show Milano: exhibiting and sourcing.",
      },
    ],
  },
  {
    region: "North America",
    label: "Trade fair · purchasing · exhibiting",
    places: [
      {
        name: "Tucson, USA",
        detail: "Tucson Gem and Mineral Show: purchasing and exhibiting.",
      },
    ],
  },
  {
    region: "Online sourcing",
    label: "Supplier relationships without personal visits",
    places: [
      {
        name: "India",
        detail: "Online sourcing of glass beads, silver-foil beads, lampwork beads and bags.",
      },
      {
        name: "Ghana",
        detail: "Online sourcing of recycled glass beads; no personal visit.",
      },
      {
        name: "Turkey",
        detail: "Online sourcing of metal crafting wires; no personal visit.",
      },
    ],
  },
];

const materialGroups = [
  {
    title: "Natural stones & minerals",
    description:
      "Semi-precious stones, tumbled stones and amethyst geodes from Brazil; polished gemstones and chains from South Africa; onyx decorative objects and fossil-salt lamps and candle holders from Pakistan; minerals from the USA.",
  },
  {
    title: "Glass & decorative beads",
    description:
      "Glass, silver-foil and lampwork beads from India; resin, lampwork and other glass beads from Indonesia; recycled glass beads from Ghana; glass beads from the USA.",
  },
  {
    title: "Jewellery components & mixed materials",
    description:
      "A broad range of Chinese components and beads in glass, metal, wood, resin, acrylic, bone, mother-of-pearl, freshwater pearl, porcelain and cinnabar, as well as jewellery findings. Wire was sourced from Turkey.",
  },
  {
    title: "Display & decorative materials",
    description:
      "Plexiglass product displays from Germany, and very thin gold and silver leaf for decorative use from France, alongside packaging and craft materials.",
  },
];

const sourcingSteps = [
  {
    number: "01",
    title: "Research & supplier selection",
    text: "Exploring markets and product ranges, identifying suppliers, and comparing offers and prices.",
  },
  {
    number: "02",
    title: "Product & sample evaluation",
    text: "Defining material, colour, shape, size and quality requirements; requesting and assessing samples before larger orders.",
  },
  {
    number: "03",
    title: "Negotiation & costing",
    text: "Discussing prices, minimum order quantities, payment and delivery terms, while considering product costs and commercial needs.",
  },
  {
    number: "04",
    title: "Purchasing & follow-up",
    text: "Selecting products and quantities, placing orders and maintaining ongoing supplier relationships.",
  },
  {
    number: "05",
    title: "Incoming quality checks",
    text: "Checking delivered goods for quantity and quality, and following up on issues when needed.",
  },
];

export default function InternationalSourcing() {
  return (
    <div className="iss-page">
      <section className="iss-hero">
        <div className="iss-hero-copy">
          <p className="iss-eyebrow">SELECTED EXPERIENCE · GLOBAL SOURCING</p>
          <h1>International Sourcing <span>&amp;</span> Production</h1>
          <h2>Connecting materials, suppliers and product ideas across markets.</h2>
          <p className="iss-lead">
            My experience combines international purchasing, material selection,
            supplier relationships, hands-on prototyping and production
            preparation. I worked with suppliers and manufacturing partners
            across Europe, Asia, Africa and the Americas, turning product
            opportunities into carefully sourced and production-ready products.
          </p>
          <div className="iss-tags" aria-label="Areas of experience">
            <span>International Sourcing</span>
            <span>Supplier Negotiation</span>
            <span>Materials & Components</span>
            <span>Prototype Development</span>
            <span>Quality Control</span>
          </div>
        </div>

        <figure className="iss-hero-photo">
          <img src={qingdaoVisit} alt="Business meeting during a production-related visit in Qingdao, China" />
          <figcaption>Qingdao, China · Production-related visit with our Hong Kong business partner</figcaption>
        </figure>

        <div className="iss-stats">
          <div>
            <strong>5</strong>
            <span>continents represented in sourcing origins</span>
          </div>
          <div>
            <strong>~2</strong>
            <span>international business trips per year</span>
          </div>
          <div>
            <strong>1–2</strong>
            <span>months between regular purchasing cycles</span>
          </div>
        </div>
        <p className="iss-fine-print">
          Figures describe the historical purchasing rhythm of the business.
        </p>
      </section>

      <section className="iss-section" id="sourcing-markets">
        <div className="iss-section-heading">
          <p className="iss-eyebrow">01 · GLOBAL SOURCING NETWORK</p>
          <h2>Working across markets and supplier networks.</h2>
          <p>
            The sourcing process combined international trade fairs and in-person
            supplier visits with regular purchasing and online supplier
            relationships. International trips took place approximately twice a
            year, alongside purchasing cycles every one to two months.
          </p>
        </div>

        <div className="iss-market-grid">
          {sourcingMarkets.map((market) => (
            <article className="iss-market-card" key={market.region}>
              <p className="iss-card-kicker">{market.label}</p>
              <h3>{market.region}</h3>
              <ul>
                {market.places.map((place) => (
                  <li key={place.name}>
                    <strong>{place.name} </strong>
                    <span>{place.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="iss-origin-note">
          <strong>Additional sourcing origins</strong>
          <p>
            Product origins also included Brazil (semi-precious stones and
            minerals), South Africa (polished gemstones and chains), Pakistan
            (onyx and salt-based decorative objects).
            These are listed as sourcing origins; personal visits have not been
            specified for these markets.
          </p>
        </div>
      </section>

      <section className="iss-section iss-materials-section" id="materials">
        <div className="iss-section-heading">
          <p className="iss-eyebrow">02 · MATERIALS & PRODUCT KNOWLEDGE</p>
          <h2>A broad, hands-on understanding of materials.</h2>
          <p>
            Sourcing involved more than finding products. It required evaluating
            material characteristics, finish, colour, size, quality and how each
            component could work within a product range.
          </p>
        </div>

        <div className="iss-material-grid">
          {materialGroups.map((group, index) => (
            <article className="iss-material-card" key={group.title}>
              <span className="iss-material-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="iss-section iss-supplier-section" id="supplier-process">
        <div className="iss-section-heading">
          <p className="iss-eyebrow">03 · SUPPLIER RELATIONSHIPS & PURCHASING</p>
          <h2>From supplier research to incoming quality checks.</h2>
          <p>
            I took an active role throughout the sourcing process: researching
            suppliers, evaluating options, negotiating terms, placing orders and
            checking the goods received.
          </p>
        </div>

        <div className="iss-supplier-layout">
          <figure className="iss-supplier-photo">
            <img src={hongKongShowroom} alt="Product displays at a Hong Kong business partner's showroom" />
            <figcaption>Hong Kong · A business partner's showroom</figcaption>
          </figure>
          <div className="iss-steps">
            {sourcingSteps.map((step) => (
              <article className="iss-step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="iss-commercial-note">
          <p className="iss-eyebrow">COMMERCIAL DECISION-MAKING</p>
          <h3>Balancing product opportunities with business realities.</h3>
          <p>
            I led product selection and sourcing recommendations for jewellery
            components and creative materials, making decisions independently or
            jointly with the business owner depending on the product category.
            Purchasing plans were discussed in light of the company's current
            financial position and available budget. Mineral decorative objects
            were a separate category, with purchasing decisions led by the
            business owner, who held overall financial responsibility.
          </p>
          <p>
            Supplier prices, minimum order quantities, payment and delivery terms
            were part of the purchasing discussions. Product costs, pricing and
            commercial priorities informed the final selection.
          </p>
        </div>
      </section>

      <section className="iss-section" id="production">
        <div className="iss-section-heading">
          <p className="iss-eyebrow">04 · PROTOTYPING & PRODUCTION</p>
          <h2>Preparing products for successful production.</h2>
          <p>
            My production experience covered hands-on prototype development and
            production preparation in Hungary, as well as international
            manufacturing collaboration in China.
          </p>
        </div>

        <div className="iss-production-grid">
          <article className="iss-production-card">
            <p className="iss-card-kicker">HUNGARY</p>
            <h3>Prototype development & production preparation</h3>
            <ul>
              <li>Personally created product prototypes and early DIY kits.</li>
              <li>Developed bead-animal kits and other beading sets.</li>
              <li>Prepared production documentation and product specifications.</li>
              <li>Checked the quality of the first returned production samples and communicated required changes.</li>
              <li>Prepared bulk-purchased beads, components, tools, wool and threading materials for smaller retail packs.</li>
              <li>Provided hands-on support with weekly production materials, deliveries and quality checks when a colleague was absent.</li>
            </ul>
            <p className="iss-role-clarification">
              Long-term serial production was managed by a dedicated colleague;
              my main responsibility was prototyping, documentation and initial
              production quality feedback.
            </p>
          </article>

          <article className="iss-production-card iss-production-card-accent">
            <p className="iss-card-kicker">QINGDAO, CHINA</p>
            <h3>International manufacturing collaboration</h3>
            <ul>
              <li>DIY kits for Fun Fashion Factory were manufactured at a Korean-owned facility in Qingdao.</li>
              <li>Contributed to product concept, kit composition, sample evaluation and production follow-up.</li>
              <li>Worked with support from the Hong Kong business partner during the China production process.</li>
              <li>Visited the manufacturing partner and also sourced products at International Jewelry City.</li>
            </ul>
            <p className="iss-role-clarification">
              My involvement in China was collaborative, with local support from
              our Hong Kong partner.
            </p>
          </article>
        </div>
      </section>

      <section className="iss-closing">
        <p className="iss-eyebrow">FROM SOURCING TO PRODUCT DEVELOPMENT</p>
        <h2>Materials, ideas and production — understood as one connected process.</h2>
        <p>
          International sourcing was closely connected to my wider product
          development work: understanding materials, recognising opportunities,
          selecting suppliers and preparing products for production and market.
        </p>
        <Link to="/projects" className="iss-link">
          Explore selected projects <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
