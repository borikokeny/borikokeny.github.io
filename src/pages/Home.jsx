// 

import React from "react";
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";
import ProjectsGrid from "../components/Projectsgrid";

export default function Home() {
  return (
    <main className="main-content">

      {/* HERO */}
      {/* <section
        id="home"
        className="full-heights position-relative"
      /> */}

      {/* SPACE AFTER HERO */}
      <div className="mt-24">
        <Welcome />
      </div>

      {/* PROJECTS SECTION */}
      <section className="mt-32 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
            Selected recent projects
          </h2>

          <ProjectsGrid limit={3} />

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="btn btn-outline-primary"
            >
              View all projects
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
