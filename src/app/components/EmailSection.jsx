import React from 'react';

const EmailSection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 justify-items-center place-items-center my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-4xl font-barlow font-bold text-white my-2 uppercase py-4">
          Let&apos;s Connect
        </h5>
        <p className="text-white text-base font-light mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          get back to you ASAP!
        </p>
      </div>
      <div>
        <a type="button" href="mailto:kongyangmakrystal@gmail.com" className="px-6 py-3 w-full font-barlow sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-slate-600">Email Me! </a>
      </div>
    </section>
  );
};

export default EmailSection;