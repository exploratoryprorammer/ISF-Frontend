import React, { forwardRef } from 'react';

const LFF = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative mx-auto max-w-7xl bg-white rounded-lg flex flex-col items-center justify-center p-6 mt-20">
      <h1 className="text-3xl font-extrabold text-center mb-4">Letter from ISF Founders</h1>
      <p className="text-base text-center leading-relaxed mb-8">
        Indu Sah Foundation is an emerging non-profit organization established on December 24, 2018, registered under section 4 of act 2034 of The Government of Nepal, and affiliated with the Social Welfare Council. We are based in Loharpatti, Mahottari, Nepal which is 250 kilometers south of Kathmandu, the capital city of Nepal, and 7 kilometers west of Janakpur Dham, the capital city of province 2, Nepal.
      </p>
      <p className="text-base text-center leading-relaxed mb-8">
      My brother and I were discussing doing some charity work in the school where we were once students in high school. I had a thought about charity from the very beginning of my childhood. I used to feel happier throughout the day when I used to get many chances to do things for the disadvantaged community in my village Madhepura. We lost our mother in our childhood so I proposed the idea of Indu Sah (our late mother) Foundation (ISF).      </p>
      <p className="text-base text-center leading-relaxed mb-8">
      We agreed on healthcare and education. Our foundation is teaming up with multiple helping hands, foundations, donors, human resources in Nepal and around the world to take on some tough challenges: better healthcare and education for all the resourceless people under the extreme poverty line in every region of Nepal. Our vision is to help people all around the world. We focus on only a few issues because we think that’s the best way to have a great impact, and we focus on these issues in particular because we think they are the biggest barriers that prevent people from making the most of their lives.      </p>
      <p className="text-base text-center leading-relaxed mb-8">
      The core strategy of our foundation will be promoting health, providing health education for a better future for the family, and the children in Nepal. We have started from southern Nepal, Mahottari, where we have been grown up.  As we learn which bets pay off, we have to adjust our strategies and share the results so everyone can benefit.
      </p>
      <p className="bold text-base text-center leading-relaxed mb-8">
      We’re both optimistic and believe deeply in philanthropy. We believe by doing these things—Promoting, educating for better health. We can help every person get the chance to live a healthy and productive life.

      </p>
      <p className="font-bold text-lg text-gray-700 text-center leading-relaxed mb-8">
        -Lal Sah & Vijay Sah, Founders
      </p>
    </div>
  )
});

export default LFF