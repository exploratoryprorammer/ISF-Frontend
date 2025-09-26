import React, { forwardRef } from 'react';

const Aboutus = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative mx-auto max-w-5xl bg-white rounded-lg flex flex-col items-center justify-center p-6 mt-20 mb-10">
      <h1 className="text-3xl font-extrabold text-center mb-4">Our Mission</h1>
      <p className="text-base text-center leading-relaxed mb-8">
        Indu Sah Foundation is an emerging non-profit organization established on December 24, 2018, registered under section 4 of act 2034 of The Government of Nepal, and affiliated with the Social Welfare Council. We are based in Loharpatti, Mahottari, Nepal which is 250 kilometers south of Kathmandu, the capital city of Nepal, and 7 kilometers west of Janakpur Dham, the capital city of province 2, Nepal.
      </p>
      <p className="text-base text-center leading-relaxed mb-8">
        The organization is a nonprofit making, non-religious, non-political, and non-governmental organization. The organization works for health, education, livelihood, water, sanitation, and hygiene as well as construction, gender equality and social inclusion, human rights, and governance through operation, research, advocacy, and capacity enhancement.
      </p>
      <p className="text-base text-center leading-relaxed">
        The Core Mission of the Indu Sah Foundation is to help underprivileged children for better health and education.
      </p>
      <h1 className="mt-16 text-3xl font-extrabold text-center mb-4">Projects</h1>
    </div>
  );
});

export default Aboutus;
