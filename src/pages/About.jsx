import React from "react";

function About() {
  return (
    <div className="align-element py-20 flex flex-col justify-center items-center">
      <h2 className="flex items-center gap-5 text-4xl font-bold leading-none tracking-tight sm:text-6xl text-slate-600">
        We love
        <span className="bg-blue-500 text-4xl font-bold text-primary-content px-5 rounded-2xl py-4 stat-title tracking-widest">
          comfy
        </span>
      </h2>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </div>
  );
}

export default About;
