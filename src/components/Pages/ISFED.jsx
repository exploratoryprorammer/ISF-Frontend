import React from 'react';
import ImageSlider from '../ImageSlider';

const ISFED = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-2">ISF Education: Child Abuse Prevention Awareness in Rajbiraj, Nepal</h1>
          <p className="text-gray-500 text-sm">
            Published on March 02, 2023
          </p>
        </div>

        {/* Adjust the parent container to ensure ImageSlider spans the full width */}
        <div className="w-full mb-8">
          <ImageSlider />
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <p>
            Child abuse has been one of the prime issues in Nepal. 8 out of 10 children are suffering from different types of abuse, which needs to be addressed. If children are not safe, how will a nation succeed? Indu Sah Foundation is always working towards the betterment of the community. We believe that the problems should be addressed from the atomic level, and educating children in schools could be the best tool to prevent any social issues.
          </p>

          <p>
            This time, the ISF team conducted another child abuse prevention program at Shiva International Secondary School in Rajbiraj, Nepal. About 300 children were educated by Dr. Sneha Mahato, a dentist in Nepal, and Dr. Vijay Sah, a dentist in the United States. Additionally, Ms. Anita Kumari assisted in the program as a volunteer.
          </p>

          <p>
            The program was entirely dedicated to providing awareness education to all the kids. Dr. Sah and Dr. Mahato discussed various issues, how to identify what abuse means, what child abuse is, and how to prevent it. It was an interaction-based educational program where the kids were fully involved in the learning process. They also asked questions and answered accordingly. To encourage engagement, the children were rewarded for paying attention.
          </p>

          <p>The agenda of the educational activity was as follows:</p>
          <ul className="list-disc ml-5 mt-2">
            <li>What child abuse is</li>
            <li>How to identify child abuse</li>
            <li>How to protect yourself</li>
            <li>How to inform your parents about it</li>
            <li>Why you should not keep any secret</li>
            <li>The "MY BODY IS MY BODY" program, which emphasizes how to identify and report child abuse</li>
          </ul>

          <p>
            In conclusion, the ISF team would like to thank the school’s family for providing a great platform to educate all the children, Dr. Mahato, and all the volunteers involved in the program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ISFED;
