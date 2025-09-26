import React from 'react';
import ImageSlider from '../ImageSlider';

const ArticlePage = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-2">What is ISF Robotics?</h1>
          <p className="text-gray-500 text-sm">
            Published on January 03, 2024
          </p>
        </div>

        {/* Adjust the parent container to ensure ImageSlider spans the full width */}
        <div className="w-full mb-8">
          <ImageSlider />
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <p>
            ISF Robotics is the current project to provide underprivileged children in impoverished areas of Nepal with education in the form of robotics to ignite their curiosity, creativity, and potential for brighter futures for themselves and those around them.
          </p>

          <h2 className="text-2xl font-bold mt-4">Introduction</h2>
          <p>
            Nepal is home to many underprivileged and impoverished communities filled with children who are unable to access quality education and opportunities that shape their futures. In response to this issue, our project strives to educate these underprivileged communities in remote areas of Nepal through robotics.
          </p>
          <p>
            Our project is driven by a vision to provide these children with the tools, vital skills, and knowledge needed to navigate an increasingly technological world. We want to ignite the passion for STEM (Science, Technology, Engineering, and Math) within these young minds. Through STEM, we empower these children to unlock brighter futures for both themselves and the people around them.
          </p>

          <h2 className="text-2xl font-bold mt-4">The Vision</h2>
          <p>We plan to teach them:</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Fundamentals of the engineering design process</li>
            <li>Fundamentals of programming</li>
            <li>Solve real-world problems through innovation</li>
            <li>Soft skills that include teamwork, critical thinking, and leadership</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">Impact</h2>
          <p>By introducing STEM and robotics to underprivileged children in Nepal, we hope to:</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Inspire future innovators - We hope to inspire a generation of curious and creative minds passionate about improving and advancing the world.</li>
            <li>Access to Educational Opportunities - We will provide quality education on STEM and robotics to expose them to a wide variety of future career paths.</li>
            <li>Community development - By involving parents and community leaders in the pursuit of STEM education, we can strengthen the community to foster innovation and education.</li>
            <li>Sustainability - By exposing the community to STEM education, we hope to lay a foundation for educational development.</li>
            <li>Gender Equality - By encouraging girls, who are still the least educated population, to participate and pursue STEM fields and education, we can hope to break down gender barriers and foster equality.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">The Plan</h2>
          <p>We will:</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Utilize LEGO Spike Prime Robots to provide a simple and effective way for hands-on learning.</li>
            <li>Establish FIRST Lego League (FLL) teams in Nepal through the FIRST organization, through which the children can immerse themselves in STEM education with practical experiences.</li>
            <li>Engage them in complex problem-solving through designing, engineering, and programming the Spike Prime robot to complete tasks on the FLL game field.</li>
            <li>Foster Innovation by challenging them to identify a specific problem in their community and solve it innovatively. They will then organize their project into a compelling presentation for FLL judges.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">Who will provide the service?</h2>
          <p>
            One of our founders, Shubham Sah, will be leading the teaching and organization of this project. He has years of experience with robotics, technology, and science, and has won multiple robotics competitions. He will be assisted by software engineers, mechanical engineers, and other technical professionals to ensure the best education possible.
          </p>

          <h2 className="text-2xl font-bold mt-4">Who will supervise the event?</h2>
          <p>The president and members of the organization.</p>

          <h2 className="text-2xl font-bold mt-4">When will this program begin?</h2>
          <p>ISF Robotics is starting in January 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
