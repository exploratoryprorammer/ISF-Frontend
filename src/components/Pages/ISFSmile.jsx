import React from 'react';
import ImageSlider from '../ImageSlider';

const ISFSmile = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-2">ISF SMILE: Serves 3000 Dental Patients for Free</h1>
          <p className="text-gray-500 text-sm">
            Published on August 08, 2021
          </p>
        </div>

        {/* Adjust the parent container to ensure ImageSlider spans the full width */}
        <div className="w-full mb-8">
          <ImageSlider />
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <p>
            Indu Sah Foundation is committed to the underserved community since 2018. ISF has been with the community in every situation from natural disasters to the Covid-19 crisis, providing better healthcare and education. In pursuit of better healthcare for the unreached, ISF launched an Oral Healthcare Project called “ISF SMILE” with the purpose of educating and treating 3000 dental patients every year in remote Nepal, from the plains to the Himalayas.
          </p>

          <p>
            ISF Smile is a visionary initiative of the Indu Sah Foundation. Under this project, ISF started a Mobile Dental Clinic, the first of its kind in Nepal. The ISF Mobile Dental Clinic (ISFMDC) is committed to providing all kinds of dental treatments available in a well-equipped dental clinic. The ISFMDC aims to offer the best dental care for free to those in the community who cannot afford expensive treatments.
          </p>

          <p>
            ISF Smile is designed to educate, create awareness, and treat patients with optimal care. The treatments include tooth brushing training, oral prophylaxis, composite restoration, root canal treatment, dental prosthesis, fluoride application, GIC restoration, tooth extraction, minor oral surgeries, oral cancer screening, and more.
          </p>

          <p>
            The project began in Loharpatti, Mahottari, in July. The ISF Smile was officially launched at Madhepura on July 20. The Free Dental Treatment and Oral Cancer Screening Camp provided treatment and education to more than 1000 people in the area. The program, which ran from July 20 to July 29, was supported by dental surgeons and volunteers. The ISF is now equipped with proactive volunteers passionate about social service, and ISF extends heartfelt gratitude to every volunteer, who were crucial to the success of the first ISF Smile event.
          </p>

          <p>The following services were provided at the ISFMDC first event:</p>
          <ol className="list-decimal ml-5 mt-2">
            <li>
              <strong>Oral Health Screening:</strong> As the free oral health service was new to the region, there was significant excitement among the community. Hundreds of people attended daily for oral health checkups and treatment, resulting in over a thousand people receiving education on the importance of oral health.
            </li>
            <li>
              <strong>Oral Cancer Screening:</strong> The ISF team also provided oral cancer screening and awareness to all tobacco and areca nut consumers, addressing symptoms like reduced mouth opening and tissue changes in the intraoral regions.
            </li>
            <li>
              <strong>Tooth Brushing Training:</strong> Many beneficiaries were using bamboo sticks for cleaning their teeth, leading to severe plaque and calculus buildup. Training was provided on the importance of toothbrushes and proper brushing techniques.
            </li>
            <li>
              <strong>Tooth Extraction:</strong> More than 500 people received tooth extractions, including difficult cases. Additionally, around 120 children had their deciduous teeth extracted.
            </li>
            <li>
              <strong>GIC Restorations:</strong> Many children with decayed teeth received GIC fillings, addressing their dental health needs.
            </li>
            <li>
              <strong>Composite Restoration:</strong> Adults with decayed teeth received composite restorations, a more permanent solution.
            </li>
            <li>
              <strong>Fluoride Application:</strong> Fluoride application was provided to around 110 children to prevent dental caries, which was an essential yet costly treatment.
            </li>
            <li>
              <strong>Root Canal Treatment:</strong> Although limited by time, root canal treatments were provided to 15 people, with access openings done for 25 patients and referrals made.
            </li>
            <li>
              <strong>Crown and Bridge Prosthesis:</strong> Limited fixed partial dentures were provided due to time constraints, with plans to expand this service in future phases.
            </li>
            <li>
              <strong>Oral Hygiene Kits Distribution:</strong> Oral hygiene kits were given to every beneficiary, whether they received treatment or just a screening.
            </li>
            <li>
              <strong>Mouth Mask Distribution:</strong> Around 250 masks were distributed to protect the community from Covid-19.
            </li>
          </ol>

          <p>
            Due to technical issues, oral prophylaxis was not provided but will be included in the next phase of the program.
          </p>

          <p>
            We appreciate NepalMed and Humble Smile Foundation for their support and the ISF volunteers for their tireless efforts in making the program a huge success.
          </p>

          <p className="text-gray-500 text-sm">
            - Dr. Vijay Sah
          </p>
        </div>
      </div>
    </div>
  );
};

export default ISFSmile;
