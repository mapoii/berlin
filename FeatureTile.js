import React from 'react';

const FeatureTile = ({ icon, title, description, delay }) => {
  return (
    <div className={`tiles-item reveal-from-bottom`} data-reveal-delay={delay}>
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className="features-tiles-item-image mb-16">
            <img src={icon} alt={`Feature tile icon`} width={64} height={64} />
          </div>
        </div>
        <div className="features-tiles-item-content">
          <h4 className="mt-0 mb-8">{title}</h4>
          <p className="m-0 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureTile;

