import React from 'react';
import FeatureTile from './FeatureTile';
import image1 from  './images/feature-tile-icon-01.svg';
import image2 from  './images/feature-tile-icon-02.svg';
import image3 from  './images/feature-tile-icon-03.svg';


const FeaturesTilesSection = () => {
  return (
    <section className="features-tiles section">
      <div className="container">
        <div className="features-tiles-inner section-inner">
          <div className="tiles-wrap">
            <FeatureTile
              icon= {image1}
              title="Join the system"
              description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
            />
            <FeatureTile
              icon= {image2}
              title="Join the system"
              description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
              delay={200}
            />
            <FeatureTile
              icon= {image3}
              title="Join the system"
              description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTilesSection;
