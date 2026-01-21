import React from "react";
import  { Link } from "react-router-dom";
import hero from "../images/Hero.jpg";
import Welcome from "../components/Welcome";
import ProjectsGrid from "../components/Projectsgrid";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiFacebookLogoBold } from "react-icons/pi";

export default function Home() {
  return (
    
    <div>
<section id="home" className="full-heights position-relative">
    </section>
    <div><Welcome /></div>
    <ProjectsGrid limit={3}/>
    <Link to="/projects" className="btn btn-outline-primary mt-4 mb-6">
          View all projects
        </Link>
    </div>
  );
}
