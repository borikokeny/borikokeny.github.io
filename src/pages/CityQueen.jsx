import { Link } from "react-router-dom";
import materialsImage from "../images/cityqueen-materials.png";
import earringDesignsImage from "../images/cityqueen-earring-designs.png";
import storeWideImage from "../images/cityqueen-store-wide.jpg";
import storeDisplayImage from "../images/cityqueen-store-display.jpg";
import storeSetupImage from "../images/cityqueen-store-setup.jpg";
import storeDetailImage from "../images/cityqueen-store-detail.jpg";
import "../styles/city-queen.css";

const roleAreas = [
  {
    title: "Brand & creative direction",
    text: "I developed the name, visual identity and overall creative direction. The City Queen idea captured the ambition to make every customer feel like a queen in an urban jewellery store.",
  },
  {
    title: "Product design & prototyping",
    text: "I designed original earring models, combined components into distinctive products and personally made the prototypes. Other colleagues handled series production.",
  },
  {
    title: "Sourcing & product development",
    text: "I selected materials and components through Chinese suppliers and Budapest-based sourcing, then managed the related product-development and production coordination.",
  },
  {
    title: "Retail experience & merchandising",
    text: "I developed the store concept, packaging, interior presentation, product displays, window presentation, assortment updates and pricing.",
  },
];

const storeFacts = [
  { label: "Period", value: "2008–2012" },
  { label: "Locations", value: "Two stores in Budapest" },
  { label: "First store", value: "Street-level shop near Astoria" },
  { label: "Second store", value: "Shopping-centre unit at Westend" },
];

export default function CityQueen() {
  return (
    <div className="cq-case">
      <div className="cq-topline">
        <Link to="/physical-products" className="cq-back">
          <span aria-hidden="true">←</span> Physical Products
        </Link>
        <span>RETAIL CONCEPT · PRODUCT DESIGN · 2008–2012</span>
      </div>

      <section className="cq-hero">
        <div className="cq-hero__copy">
          <p className="cq-eyebrow">BUDAPEST · FASHION JEWELLERY & ACCESSORIES</p>
          <h1>City Queen</h1>
          <p className="cq-hero__subtitle">
            From a playful idea to a distinctive two-store jewellery concept.
          </p>
          <p className="cq-hero__intro">
            City Queen was an original retail concept developed within Kreativ
            Ekszer. Between 2008 and 2012, it grew into two Budapest stores
            focused primarily on colourful, oversized statement earrings and
            fashion accessories. I shaped the concept from the brand idea and
            product range to sourcing, prototypes, packaging and the in-store
            experience.
          </p>
          <div className="cq-tags" aria-label="Project areas">
            <span>Brand concept</span>
            <span>Jewellery design</span>
            <span>Retail experience</span>
            <span>Product development</span>
          </div>
        </div>
        <figure className="cq-hero__image">
          <img
            src={storeWideImage}
            alt="Original City Queen store interior with colourful orange and pink walls and earring displays"
          />
          <figcaption>City Queen store interior and product presentation.</figcaption>
        </figure>
      </section>

      <section className="cq-facts" aria-label="Project at a glance">
        {storeFacts.map((fact) => (
          <div className="cq-fact" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </section>

      <section className="cq-section cq-opportunity">
        <div className="cq-section__heading">
          <p className="cq-eyebrow">01 / THE OPPORTUNITY</p>
          <h2>Making everyday style feel expressive and accessible</h2>
        </div>
        <div className="cq-prose">
          <p>
            The concept grew from a clear customer insight. In that market and
            community, colourful, large statement earrings were a popular way
            to change or complete an outfit. Earrings were particularly
            accessible: they were not size-dependent, relatively affordable
            and easy to give as a gift.
          </p>
          <p>
            Their accessible price also made it natural for customers to choose
            more than one pair — for different outfits, colours and occasions.
            This created an opportunity for a retail concept built around a
            broad, constantly refreshed assortment rather than a small number
            of basic styles.
          </p>
          <p>
            City Queen was developed as a retail concept within Kreativ Ekszer,
            drawing partly on the family business's existing jewellery
            component and material sourcing network.
          </p>
        </div>
      </section>

      <section className="cq-section cq-brand">
        <div className="cq-section__heading">
          <p className="cq-eyebrow">02 / BRAND IDENTITY & CREATIVE DIRECTION</p>
          <h2>A name, a feeling and a colourful visual world</h2>
        </div>
        <div className="cq-brand__grid">
          <div className="cq-prose">
            <h3>The name: City Queen</h3>
            <p>
              The name first came from a playful conversation with a friend,
              when we jokingly referred to ourselves as “City Queens”. I later
              recognised how well it suited the store: an urban place where
              every customer could feel like a queen.
            </p>
            <h3>From a family collage to store graphics</h3>
            <p>
              The visual direction began with a personal creative interest in
              retro and vintage imagery. During a family creative activity, we
              made collages from vintage pictures and many small decorative
              objects. Those original collages were later enlarged into posters
              and became a distinctive part of the store interiors.
            </p>
            <p>
              I developed the overall visual concept, including the bold
              orange-and-pink palette, graphic atmosphere and how the jewellery
              displays would sit within the space.
            </p>
          </div>
          <figure className="cq-image-block cq-image-block--portrait">
            <img
              src={storeDetailImage}
              alt="Detail of the City Queen store's earring display and enlarged decorative artwork"
              loading="lazy"
            />
            <figcaption>
              A store detail showing the earring panels and enlarged decorative
              artwork.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cq-section">
        <div className="cq-section__heading">
          <p className="cq-eyebrow">03 / PRODUCT DESIGN & DEVELOPMENT</p>
          <h2>Turning a wide choice of components into original products</h2>
          <p className="cq-section__lead">
            Access to a broad range of components through Chinese suppliers
            gave me room to experiment with colour, shape, texture and scale.
          </p>
        </div>
        <div className="cq-product-grid">
          <figure className="cq-image-block">
            <img
              src={materialsImage}
              alt="A visual selection of colourful jewellery components and decorative materials"
              loading="lazy"
            />
            <figcaption>Materials and component variety used as a product-development reference.</figcaption>
          </figure>
          <figure className="cq-image-block">
            <img
              src={earringDesignsImage}
              alt="A colourful assortment of statement earring styles and product combinations"
              loading="lazy"
            />
            <figcaption>Examples of the colourful, varied product direction.</figcaption>
          </figure>
        </div>
        <div className="cq-two-column cq-prose">
          <div>
            <h3>Original designs and selected supplier products</h3>
            <p>
              I worked in two complementary ways: designing original earring
              models from the available components, and selecting products from
              supplier ranges that could strengthen the overall assortment.
              I then combined and developed these into a distinctive product
              offer for the City Queen customer.
            </p>
          </div>
          <div>
            <h3>Hands-on prototyping</h3>
            <p>
              I personally made the prototypes for my original designs. The
              finished models were then produced by others. My role focused on
              the product idea, material and component selection, prototype and
              the related product-development and production coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="cq-section cq-sourcing">
        <div className="cq-section__heading">
          <p className="cq-eyebrow">04 / SOURCING & PRODUCT DEVELOPMENT</p>
          <h2>Building a product range through international sourcing</h2>
        </div>
        <div className="cq-sourcing__grid">
          <div className="cq-prose">
            <p>
              I managed sourcing for the stores from China and Budapest. Chinese
              suppliers provided access to a wide variety of components, giving
              me the flexibility to develop original combinations and products
              rather than relying only on ready-made supplier designs.
            </p>
            <p>
              I selected materials and components for the store, developed
              original product models and managed the related production
              development and coordination. The resulting assortment combined
              my own designs with carefully selected supplier products.
            </p>
          </div>
          <aside className="cq-note">
            <span>CONNECTED TO A WIDER SOURCING PRACTICE</span>
            <p>
              This project drew on the international sourcing and supplier
              relationships developed through Kreativ Ekszer. The broader
              sourcing process, material categories and international markets
              are documented separately.
            </p>
            <Link to="/international-sourcing">
              Explore International Sourcing & Production <span>→</span>
            </Link>
          </aside>
        </div>
      </section>

      <section className="cq-section cq-retail">
        <div className="cq-section__heading">
          <p className="cq-eyebrow">05 / RETAIL DESIGN & CUSTOMER EXPERIENCE</p>
          <h2>Two stores, one recognisable identity</h2>
          <p className="cq-section__lead">
            The retail concept was carried into two different Budapest settings:
            a street-level store near Astoria, followed by a shopping-centre
            location at Westend. The two stores were very well received and, as
            you described, became a highly successful retail concept.
          </p>
        </div>
        <figure className="cq-image-block cq-image-block--wide">
          <img
            src={storeDisplayImage}
            alt="Original City Queen retail interior with orange and pink walls, earring displays and central presentation tables"
            loading="lazy"
          />
          <figcaption>
            The store concept combined vivid wall colours, large graphic
            artwork, organised earring panels and central product tables.
          </figcaption>
        </figure>
        <div className="cq-retail-grid">
          <article>
            <span>01 / ASTORIA</span>
            <h3>Street-level store</h3>
            <p>The first City Queen location, opened near Astoria in Budapest.</p>
          </article>
          <article>
            <span>02 / WESTEND</span>
            <h3>Shopping-centre store</h3>
            <p>The second location, opened later in the Westend shopping centre.</p>
          </article>
          <article>
            <span>03 / ASSORTMENT</span>
            <h3>Always evolving</h3>
            <p>
              I managed assortment updates and pricing to keep the offer
              colourful, varied and relevant to customers.
            </p>
          </article>
        </div>
        <div className="cq-retail__image-row">
          <figure className="cq-image-block">
            <img
              src={storeSetupImage}
              alt="City Queen store interior during setup, showing the colourful interior and large decorative artwork"
              loading="lazy"
            />
            <figcaption>Store interior during setup.</figcaption>
          </figure>
          <figure className="cq-image-block">
            <img
              src={storeWideImage}
              alt="Wide view of the City Queen store's product displays and merchandising"
              loading="lazy"
            />
            <figcaption>Product presentation across the store.</figcaption>
          </figure>
        </div>
      </section>

      <section className="cq-section cq-launch">
        <div className="cq-section__heading">
          <p className="cq-eyebrow">06 / LAUNCH & BRAND EXPERIENCE</p>
          <h2>A playful opening celebration</h2>
        </div>
        <div className="cq-launch__content">
          <div className="cq-prose">
            <p>
              For the opening celebration, we made several hundred edible
              earrings from mini pretzels, gummy sweets and other food items.
              It was a playful extension of the brand's colourful and
              unconventional personality — and an unexpected way to introduce
              the new store.
            </p>
          </div>
          <div className="cq-launch__quote">
            <span>THE CITY QUEEN SPIRIT</span>
            <p>Colourful, playful, expressive — and never afraid to stand out.</p>
          </div>
        </div>
      </section>

      <section className="cq-section cq-role">
        <div className="cq-section__heading">
          <p className="cq-eyebrow">07 / MY ROLE & CONTRIBUTION</p>
          <h2>From the first idea to the in-store experience</h2>
        </div>
        <div className="cq-role-grid">
          {roleAreas.map((area, index) => (
            <article key={area.title}>
              <span>0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
        <div className="cq-role__clarification">
          <strong>Operational responsibilities</strong>
          <p>
            Store sales were handled by shop assistants, and warehouse
            deliveries were coordinated by other colleagues. My contribution
            focused on the concept, product development, sourcing, pricing and
            retail presentation rather than the stores' day-to-day sales or
            warehouse distribution.
          </p>
        </div>
      </section>

      <section className="cq-closing">
        <p className="cq-eyebrow">CITY QUEEN · 2008–2012</p>
        <h2>A retail concept where product, place and personality worked together.</h2>
        <p>
          City Queen brought together my interests in product design, sourcing,
          visual creativity and commercial product development — creating a
          distinctive jewellery experience across two Budapest stores.
        </p>
        <div className="cq-closing__links">
          <Link to="/physical-products">← Back to Physical Products</Link>
          <Link to="/international-sourcing">International Sourcing & Production →</Link>
        </div>
      </section>
    </div>
  );
}
