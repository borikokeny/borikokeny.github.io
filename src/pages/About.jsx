// import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="d-flex align-items-center justify-content-center min-vh-100 w-100 overflow-hidden"
    >
      <div className="container overflow-auto p-3" style={{ maxHeight: "90vh" }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="mb-3 mt-2">Hi There!</h1>
            <p className="mb-3">
              I am a <strong>Front-End Developer</strong> with experience in
              HTML, CSS, JavaScript, React, and WordPress, as well as API
              integrations and Adobe XD. I have a strong background in{" "}
              <strong>
                digital marketing, conversion optimization, and strategy
                development
              </strong>
              . With over 20 years of experience in product development,
              purchasing, and business development, I am now completing a
              front-end education to combine{" "} 
              <strong>
                  technical expertise with market-driven innovation
              </strong>
              .
            </p>
            <h4 className="mb-2">Technical Skills</h4>
            <ul className="text-start d-inline-block ps-3">
              <li><strong>Front-End Development:</strong> HTML, CSS, JavaScript, React, Next.js, API integration</li>
              <li><strong>CMS & Databases:</strong> WordPress, SQL</li>
              <li><strong>Styling & Frameworks:</strong> Bootstrap, Tailwind, Sass</li>
              <li><strong>Design & Tools:</strong> Adobe XD, UI/UX Design</li>
              <li><strong>Analytics & Optimization:</strong> SEO, Google Ads, Hotjar</li>
              <li><strong>Other:</strong> Excel, ChatGPT</li>
            </ul>
            <div className="container mt-3">
              <div className="row">
                <div className="col-lg-8 col-12 d-flex flex-column text-start">
                  <h4>Work Experience</h4>
                  <h5>Creative Director and Merchandiser</h5>
                  <p>
                    Co-Manager for Hungary’s largest retail and wholesale
                    company specializing in beads, jewelry, and Do-It-Yourself
                    (DIY) products (annual revenue of 16+ million NOK). Led
                    product development, production, and procurement from Asia,
                    as well as negotiated with suppliers. Developed over a
                    thousand product concepts. Held personnel and budget
                    responsibilities and established a creative workshop for
                    jewelry and interior product design. Responsible for
                    maintaining the company's website and social media channels.
                  </p>
                </div>
                <div className="col-lg-4 col-12 d-flex flex-column text-start">
                  <h4>Education</h4>
                  <p><strong>Eötvös Loránd University</strong></p>
                  <p className="lh-1">Master's degree - Scandinavian Studies</p>
                  <p><strong>Noroff School of Technology and Digital Media</strong></p>
                  <p className="lh-1">Front-End Development Studies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
