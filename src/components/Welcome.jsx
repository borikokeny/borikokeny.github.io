// export default function Welcome() {
//   return (
//     <div className="mt-3 pt-lg-5">
//       <div className="container">
//         <h4>
//           <strong>
//             Front-End Developer with strong business and design background.
//           </strong>{" "}
//           With over 20 years of experience in product development, purchasing,
//           and business operations, I bring real-world business understanding
//           into modern frontend development..
//         </h4>
//         <h3>
//           Here are the <strong>projects</strong> I was working on lately:
//         </h3>
//       </div>
//     </div>
//   );
// }

export default function Welcome() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Front-End Developer with strong business and design background
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          With over 20 years of experience in product development, purchasing,
          and business operations, I bring real-world business understanding
          into modern frontend development.
        </p>

      </div>
    </section>
  );
}
