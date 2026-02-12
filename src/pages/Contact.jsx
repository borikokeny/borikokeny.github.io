import React from "react";
import { TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiFacebookLogoBold } from "react-icons/pi";
export default function Contact() {
  return (
    <section
      id="contact"
      className="min-vh-100 d-flex align-items-center"
    >
      <div className="container text-center">
        
        <div className="mb-5">
          <h1 className="fw-bold mb-3">Contact Me</h1>
          <p className="text-muted">
            Feel free to reach out through my socials or email.
          </p>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
          
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


// import React from "react";
// import { TiSocialLinkedinCircular, TiSocialGithubCircular } from "react-icons/ti";
// import { MdOutlineAlternateEmail } from "react-icons/md";
// import { PiFacebookLogoBold } from "react-icons/pi";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3"
//     >
//       <div className="mb-5">
//         <h1 className="fw-bold mb-3">Contact Me</h1>
//         <p className="text-muted">
//           Feel free to reach out through my socials or email.
//         </p>
//       </div>

//       <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
        
//         <a
//           href="https://www.linkedin.com/in/bori-kokeny-7070008a/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="contact-link d-flex align-items-center gap-2"
//         >
//           <TiSocialLinkedinCircular className="fs-1" />
//           <span>LinkedIn</span>
//         </a>

//         <a
//           href="https://github.com/borikokeny"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="contact-link d-flex align-items-center gap-2"
//         >
//           <TiSocialGithubCircular className="fs-1" />
//           <span>GitHub</span>
//         </a>

//         <a
//           href="https://www.facebook.com/bori.kokeny"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="contact-link d-flex align-items-center gap-2"
//         >
//           <PiFacebookLogoBold className="fs-1" />
//           <span>Facebook</span>
//         </a>

//         <a
//           href="mailto:bori@minerali.hu"
//           className="contact-link d-flex align-items-center gap-2"
//         >
//           <MdOutlineAlternateEmail className="fs-1" />
//           <span>bori@minerali.hu</span>
//         </a>

//       </div>
//     </section>
//   );
// }


// // import React from "react";
// // import { TiSocialLinkedinCircular } from "react-icons/ti";
// // import { MdOutlineAlternateEmail } from "react-icons/md";
// // import { PiFacebookLogoBold } from "react-icons/pi";
// // import { TiSocialGithubCircular } from "react-icons/ti";

// // export default function Contact() {
// //   return (
// //     <div>
// //       <section><h1>Contact me!</h1>
// //       <p>Feel free to take contact through my socials or email!</p></section>
// // <section id="contact" className="full-height d-flex flex-wrap align-items-center justify-content-start mt-5 mb-5 ms-5">
      
// //       <div className="ms-5 d-flex flex-column align-items-start gap-3 text-start icon-list">
// //               <a href="https://www.linkedin.com/in/bori-kokeny-7070008a/" target="_blank">
// //               <TiSocialLinkedinCircular className="icons p-1 fs-1" /> LinkedIN
// //               </a>
// //               <a href="https://github.com/borikokeny" target="_blank">
// //               <TiSocialGithubCircular className="icons p-1 fs-1" /> GitHub
// //               </a>
// //               <a href="https://www.facebook.com/bori.kokeny" target="_blank">
// //               <PiFacebookLogoBold className="icons p-1 fs-1" /> Facebook
// //               </a>
// //               <a href="mailto: bori@minerali.hu" target="_blank">
// //               <MdOutlineAlternateEmail className="icons p-1 fs-1" /> bori@minerali.hu
// //               </a>
// //             </div>
// //     </section>
// //     </div>
    
// //   );
// // }

