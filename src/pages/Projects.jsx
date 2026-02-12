import ProjectsGrid from "../components/Projectsgrid";

export default function Projects() {
  return (
    <section className="main-content container my-3">
      <h1 className="mb-2">Projects</h1>
      <p className="text-muted">
        Selected frontend development work.
      </p>
      <ProjectsGrid />
    </section>
  );
}
