// export default function FunFashionFactory() {
//   return (
//     <section className="main-content container my-5">
//       <p>PRODUCT DEVELOPMENT · CASE STUDY</p>

//       <h1>Fun Fashion Factory</h1>

//       <h2>
//         From product concept to an international DIY jewellery collection.
//       </h2>

//       <p>
//         A collection of 48 DIY jewellery designs developed
//         for an international retail concept.
//       </p>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import displayImage from "../images/fff-display.jpg";
import productRangeImage from "../images/fff-product-range.png";
import kitInstructionsImage from "../images/fff-kit-instructions.jpg";
import "../styles/fun-fashion-factory.css";

const productGroups = [
  { name: "Necklaces", count: "12 designs" },
  { name: "Earrings", count: "12 designs" },
  { name: "Bracelets", count: "12 designs" },
  { name: "Accessories", count: "12 designs" },
];

const kitPrinciples = [
  {
    title: "Contents & quantities",
    text: "I calculated which components and quantities belonged in each kit, balancing design variety, cost and the requirements of the finished jewellery.",
  },
  {
    title: "Packaging logic",
    text: "I planned which components could share a bag and which needed separate packaging, keeping each kit organised and easy to understand.",
  },
  {
    title: "Beginner-friendly making",
    text: "The designs were intended to be achievable by first-time makers with basic scissors or pliers, without specialist tools.",
  },
  {
    title: "A varied range",
    text: "The collection brought together different styles so customers could find a design that matched their taste.",
  },
];

const processSteps = [
  "Recognise customer interest in ready-made bead and DIY sets",
  "Develop the concept and structure the four product categories",
  "Select designs, materials and kit components",
  "Calculate kit contents, quantities and costs",
  "Create first-draft visual instructions and evaluate samples",
  "Follow production and contribute to sales planning",
];

export default function FunFashionFactory() {
  return (
    <div className="fff-case">
      <div className="fff-case__topline">
        <Link to="/physical-products" className="fff-case__back">
          <span aria-hidden="true">←</span> Physical Products
        </Link>
        <span>PRODUCT DESIGN CASE STUDY · 2008</span>
      </div>

      <section className="fff-hero">
        <div className="fff-hero__copy">
          <p className="fff-eyebrow">INTERNATIONAL DIY JEWELLERY CONCEPT</p>
          <h1>Fun Fashion Factory</h1>
          <p className="fff-hero__subtitle">
            From market insight to an international DIY jewellery experience.
          </p>
          <p className="fff-hero__intro">
            A product concept developed from an established family jewellery-supply
            business and shaped for international retail. The project brought
            together customer insight, product range development, sourcing,
            prototyping and production collaboration.
          </p>
          <div className="fff-tags" aria-label="Project areas">
            <span>Product concept</span>
            <span>DIY jewellery kits</span>
            <span>International production</span>
          </div>
        </div>
        <figure className="fff-hero__image">
          <img
            src={displayImage}
            alt="Fun Fashion Factory retail display presenting DIY jewellery kits across four product categories"
          />
          <figcaption>Retail display presenting the four product groups.</figcaption>
        </figure>
      </section>

      <section className="fff-stats" aria-label="Project at a glance">
        <div><strong>48</strong><span>individual designs</span></div>
        <div><strong>4</strong><span>product categories</span></div>
        <div><strong>12</strong><span>designs per category</span></div>
        <div><strong>6</strong><span>intended markets</span></div>
      </section>

      <section className="fff-section fff-overview">
        <div className="fff-section__heading">
          <p className="fff-eyebrow">01 / THE OPPORTUNITY</p>
          <h2>Turning an observed need into a product range</h2>
        </div>
        <div className="fff-prose">
          <p>
            The idea grew out of years of direct contact with jewellery-making
            customers. The family business began as a mineral shop in Budapest
            and expanded into the wholesale and retail supply of gemstone beads
            and jewellery components. At trade fairs in Europe, the United States
            and Asia, we saw that customers were already drawn to ready-made bead
            and DIY sets.
          </p>
          <p>
            Early experiments — repacking selected jewellery components with
            simple assembly instructions — were especially well received, both
            as gifts and as creative projects. This suggested an opportunity for
            a more considered and recognisable DIY jewellery range.
          </p>
          <p>
            During an Asian sourcing trip, I presented my ideas to a Hong Kong-based
            business contact who saw international potential. We then co-founded
            Fun Fashion Factory with two partners and developed a concept for a
            wider market.
          </p>
        </div>
      </section>

      <section className="fff-section">
        <div className="fff-section__heading">
          <p className="fff-eyebrow">02 / RANGE ARCHITECTURE</p>
          <h2>A coherent range, with room for different tastes</h2>
          <p className="fff-section__lead">
            I structured the collection around four product groups, with twelve
            designs in each category.
          </p>
        </div>
        <div className="fff-category-grid">
          {productGroups.map((group, index) => (
            <article className="fff-category" key={group.name}>
              <span>0{index + 1}</span>
              <h3>{group.name}</h3>
              <p>{group.count}</p>
            </article>
          ))}
        </div>
        <figure className="fff-image-block">
          <img
            src={productRangeImage}
            alt="Selection of Fun Fashion Factory DIY jewellery kit packaging and designs"
            loading="lazy"
          />
          <figcaption>
            Examples from the collection, showing the product packaging and
            different jewellery designs.
          </figcaption>
        </figure>
        <div className="fff-highlight">
          <span>DESIGN INTENTION</span>
          <p>
            A broad mix of styles — from bohemian and classic to punk, elegant
            and sporty — while keeping the kits attractive, affordable and
            achievable with basic tools.
          </p>
        </div>
      </section>

      <section className="fff-section fff-experience">
        <div className="fff-section__heading">
          <p className="fff-eyebrow">03 / DESIGNING THE EXPERIENCE</p>
          <h2>Making the first attempt feel possible</h2>
          <p className="fff-section__lead">
            The kit was not just a collection of components. It was a guided
            experience: customers needed to understand what was included,
            identify each part and complete the jewellery without specialist
            knowledge or equipment.
          </p>
        </div>
        <div className="fff-experience__grid">
          <figure className="fff-image-block fff-image-block--contained">
            <img
              src={kitInstructionsImage}
              alt="A DIY jewellery kit with separated components, product packaging and illustrated assembly instructions"
              loading="lazy"
            />
            <figcaption>
              A kit example with its components and visual assembly sheet.
            </figcaption>
          </figure>
          <div className="fff-prose">
            <h3>A visual, language-light assembly guide</h3>
            <p>
              I created the first, hand-drawn versions of the assembly sheets.
              My goal was to make the steps easy to follow for a first-time maker,
              relying on clear illustrations rather than lengthy text. A graphic
              designer then refined the drawings into the finished technical
              illustrations.
            </p>
            <h3>Details behind a usable kit</h3>
            <p>
              I calculated the components and quantities for each design and
              planned which items could share a bag and which needed separate
              packaging. The aim was to keep the kit understandable, practical
              and accessible.
            </p>
            <p>
              Packaging was developed with graphic-design support. The retail
              display was designed and commissioned by my father.
            </p>
          </div>
        </div>
        <div className="fff-principles">
          {kitPrinciples.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fff-section">
        <div className="fff-section__heading">
          <p className="fff-eyebrow">04 / SOURCING, VALIDATION & DELIVERY</p>
          <h2>Balancing desirability, quality and cost</h2>
        </div>
        <div className="fff-two-column">
          <div className="fff-prose">
            <h3>Material selection and kit costing</h3>
            <p>
              Drawing on my sourcing experience across Asia, Europe and the
              United States, I identified market reference styles and worked
              with the manufacturer to develop comparable designs using
              attractive, affordable materials.
            </p>
            <p>
              I maintained detailed spreadsheets defining the contents and
              quantities for each kit. More expensive components were included
              only in the quantities needed, while lower-cost elements could be
              used more generously. The aim was to preserve the look and
              perceived value of each design while meeting strict wholesale
              price targets.
            </p>
          </div>
          <div className="fff-prose">
            <h3>Sample checks and production collaboration</h3>
            <p>
              Together with the manufacturer, I finalised material selection and
              reviewed samples before production. I checked whether each piece
              could be assembled as intended, whether metal components were
              sufficiently strong and durable, whether finishes discoloured,
              and whether elastic elements stretched or lost performance.
            </p>
            <p>
              I regularly visited the production partner in Qingdao and also
              contributed to sales planning.
            </p>
          </div>
        </div>
        <div className="fff-process-strip">
          {processSteps.map((step, index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fff-section fff-roles">
        <div className="fff-section__heading">
          <p className="fff-eyebrow">05 / COLLABORATION & RESPONSIBILITIES</p>
          <h2>A collaborative process with clearly defined roles</h2>
          <p className="fff-section__lead">
            The project combined my product and range development work with
            specialist contributions from manufacturing, graphic design,
            retail display and international sales.
          </p>
        </div>
        <div className="fff-role-grid">
          <article className="fff-role-card fff-role-card--lead">
            <span>MY RESPONSIBILITY</span>
            <h3>Product concept & development</h3>
            <ul>
              <li>Product concept and range architecture</li>
              <li>Design and component selection</li>
              <li>Kit composition and cost calculations</li>
              <li>First-draft hand-drawn assembly instructions</li>
              <li>Sample evaluation and production follow-up</li>
              <li>Contribution to sales planning</li>
            </ul>
          </article>
          <article className="fff-role-card">
            <span>PROJECT COLLABORATORS</span>
            <h3>Specialist contributions</h3>
            <ul>
              <li><strong>Manufacturer:</strong> final material and production decisions</li>
              <li><strong>Graphic designer:</strong> finished technical illustrations and packaging design</li>
              <li><strong>My father:</strong> retail display design and commissioning</li>
              <li><strong>Hong Kong partner:</strong> international sales</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="fff-section fff-market">
        <div className="fff-market__copy">
          <p className="fff-eyebrow">06 / INTERNATIONAL PRESENTATION</p>
          <h2>Taking the concept to an international audience</h2>
          <p>
            The range was presented at the Hong Kong Jewellery Show in
            September 2008. Intended markets included Australia, Norway,
            Hungary, Germany, the United Kingdom and the United States.
          </p>
          <p>
            The presentation coincided with the global financial crisis, which
            significantly affected attendance at the show. This provides
            context for the commercial launch; it does not change the product
            development work behind the collection.
          </p>
        </div>
        <div className="fff-market__facts">
          <div><strong>2008</strong><span>Hong Kong presentation</span></div>
          <div><strong>6</strong><span>intended international markets</span></div>
        </div>
      </section>

      <section className="fff-section fff-reflection">
        <p className="fff-eyebrow">07 / FROM PHYSICAL TO DIGITAL</p>
        <h2>What this experience brings to digital product design</h2>
        <p className="fff-reflection__intro">
          The medium has changed, but several principles continue to shape
          how I approach product design: understand the people using the
          product, structure complexity, make the next step clear, balance
          user needs with business constraints, and work closely with the
          people who make the solution real.
        </p>
        <div className="fff-transfer-grid">
          <article><strong>Physical product experience</strong><span>Transferable digital perspective</span></article>
          <article><p>Customer and market contact</p><p>Discovery grounded in real user and market needs</p></article>
          <article><p>Four categories and 48 designs</p><p>Information architecture and scalable product structures</p></article>
          <article><p>Illustrated assembly instructions</p><p>Clear user flows and progressive guidance</p></article>
          <article><p>Kit contents, quantities and price limits</p><p>Balancing user value and business requirements</p></article>
          <article><p>Manufacturer and partner collaboration</p><p>Cross-functional teamwork and communicating design intent</p></article>
          <article><p>Sample checks for durability and usability</p><p>Iteration, validation and attention to quality</p></article>
        </div>
        <blockquote>
          “I enjoy making complex things feel clear and approachable — whether
          that means a first-time customer assembling a piece of jewellery or
          a user navigating a digital product.”
        </blockquote>
        <p className="fff-reflection__note">
          Since this project, I have built on my product and business background
          with formal frontend development training and hands-on work in React,
          TypeScript and JavaScript.
        </p>
      </section>

      <footer className="fff-case__footer">
        <p>
          Case study based on my work with Fun Fashion Factory. Product and
          range development were led by me, with contributions from manufacturing,
          graphic design, retail-display and sales partners.
        </p>
        <div className="fff-case__footer-links">
          <Link to="/physical-products">← Back to Physical Products</Link>
          <Link to="/international-sourcing">International Sourcing & Production →</Link>
        </div>
      </footer>
    </div>
  );
}
