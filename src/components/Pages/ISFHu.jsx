import React from 'react';
import ImageSlider from '../ImageSlider';

const ISFHu = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-2">Indu Sah Foundation's Humanitarian Effort Continues...</h1>
          <p className="text-gray-500 text-sm">
            Published on February 06, 2022
          </p>
        </div>

        {/* Adjust the parent container to ensure ImageSlider spans the full width */}
        <div className="w-full mb-8">
          <ImageSlider />
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <p>
            Indu Sah Foundation is one of the leading humanitarian organizations in Nepal, which empathizes with the people living under the poverty line. ISF is always focused on its mission to uplift the lives of the underserved communities in Nepal. ISF is currently taking care of families in Mahottari. It has supported the isolated communities not once but multiple times. The ISF team values the necessities of the underprivileged community in Mahottari and always comes up with ideas to support them with food and clothes when needed.
          </p>

          <p>
            Mahottari is suffering from a severe cold, and people who survive on daily wages needed support to get through the cold wave crisis. More than 120 families needed assistance to combat the severe cold. Therefore, the ISF team came up with an idea to give warm clothes to the marginalized. NepalMed supported this noble cause, and we distributed 517 warm clothes, including jackets and trousers to children, saris to women, and blankets to all the families. The total number of families who received support was 126.
          </p>

          <p>
            It is always wonderful to extend a helping hand to those who truly deserve assistance, and Indu Sah Foundation is always there for them. The beneficiaries were delighted to receive the support and went home with smiles on their faces, which is the goal of both the Indu Sah Foundation and NepalMed. ISF is proud to have NepalMed as one of its strongest partners.
          </p>

          <p>
            We would like to extend heartfelt thanks to NepalMed, ISF volunteers, the ISF team, the local administration, and everyone who was part of this noble cause.
          </p>

          <p className="text-gray-500 text-sm">
            - Dr. Vijay Sah
          </p>
        </div>
      </div>
    </div>
  );
};

export default ISFHu;
