import React from 'react';
import ImageSlider from '../ImageSlider';

const ISFCovid = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-2">ISF COVID-19 Help 2021</h1>
          <p className="text-gray-500 text-sm">
            Published on June 13, 2021
          </p>
        </div>

        {/* Adjust the parent container to ensure ImageSlider spans the full width */}
        <div className="w-full mb-8">
          <ImageSlider />
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <p>
            The pandemic has yet to let people breathe normally in Nepal. The double mutant Covid-19 forced the Nepal government to lock the nation down for the second time from April 29, 2021. While the lockdown has helped prevent the spread of the disease, it has also caused a hunger crisis among people who rely on daily wages. Science indicates that a nutritious diet is crucial for strong immunity, but those living on daily wages struggle with hunger, impacting their ability to fight the disease.
          </p>

          <p>
            Indu Sah Foundation empathizes with those in need and offers help during crises. Having assisted more than a hundred families in 2020, ISF continued its efforts by helping the small village of Sukhainiya in the rural Mahottari district of Nepal with food supplies for a month, supported by NepalMed. ISF extends its appreciation to NepalMed for their assistance.
          </p>

          <p>
            On June 12, 2021, ISF Volunteers distributed essential food items including rice, daal, potatoes, salt, oil, soybeans, beaten rice, and clothes, providing relief to over 100 families for a month.
          </p>

          <p>
            In addition to food distribution, ISF Volunteers also provided awareness and education on Covid-19 and its prevention. This initiative was eye-opening for the underserved attendees. ISF looks forward to extending further help to those suffering from hunger due to nationwide restrictions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ISFCovid;
