import React from "react";
import { LiaSearchLocationSolid } from "react-icons/lia";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiFacebookLogoBold } from "react-icons/pi";
export default function Contact() {
  return (
    <section id="contact" className="min-vh-100 d-flex align-items-center">
      <div className="container text-center">
        <div className="mb-5">
          <h1 className="fw-bold mb-3">
            C<span className="accent">o</span>ntact Me
          </h1>
          <p className="text-muted">
            Feel free to reach out through my socials or email.
          </p>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
          <div className="contact-link d-flex align-items-center gap-2">
            <LiaSearchLocationSolid className="fs-1" />
            <span>Fredrikstad, Norway</span>
          </div>
          <a
            href="https://www.linkedin.com/in/bori-kokeny-7070008a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link d-flex align-items-center gap-2"
          >
            <TiSocialLinkedinCircular className="fs-1" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/borikokeny"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link d-flex align-items-center gap-2"
          >
            <TiSocialGithubCircular className="fs-1" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.facebook.com/bori.kokeny"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link d-flex align-items-center gap-2"
          >
            <PiFacebookLogoBold className="fs-1" />
            <span>Facebook</span>
          </a>

          <a
            href="mailto:bori@minerali.hu"
            className="contact-link d-flex align-items-center gap-2"
          >
            <MdOutlineAlternateEmail className="fs-1" />
            <span>bori@minerali.hu</span>
          </a>
        </div>
      </div>
    </section>
  );
}
