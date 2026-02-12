import ProjectsGrid from "../components/Projectsgrid";

export default function Projects() {
  return (
    <section className="main-content container my-4">
      
      <h1 className="mb-2">Projects</h1>
      <p className="text-muted mb-5">
        Selected frontend development work.
      </p>

      <ProjectsGrid />

      <div className="mt-5">
        <h3 className="mb-4">Collaborative Projects</h3>

        <div className="mb-4">
          <h5>Wikiforum</h5>
          <p className="text-muted">
            AI-driven white-label wiki platform built in a cross-functional team.
            Contributed to frontend structure, component logic, and UI consistency,
            working with Git workflows and pull requests.
          </p>
        </div>

        <div className="mb-4">
          <h5>Bars.com – Bobcat Coding</h5>
          <p className="text-muted">
            Contributed to the bars.com project by developing and maintaining
            a Bootstrap-based component library, ensuring UI consistency
            and scalable design standards within a collaborative team environment.
          </p>
        </div>

        <div>
          <h5>Little Parrot</h5>
          <p className="text-muted">
            Contributed to video production and API development for a
            science-based microlearning platform. Worked with Remotion.dev
            and supported backend endpoints to improve scalable video creation workflows.
          </p>
        </div>
      </div>

    </section>
  );
}
