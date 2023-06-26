import React from 'react';
import clients01 from './images/clients-01.svg';
import clients02 from './images/clients-02.svg';
import clients03 from './images/clients-03.svg';
import clients04 from './images/clients-04.svg';
import clients05 from './images/clients-05.svg';

const ClientsSection = () => {
  return (
    <section className="clients section reveal-fade">
      <div className="container">
        <div className="clients-inner section-inner has-top-divider has-bottom-divider">
          <ul className="list-reset">
          <li>
              <img src={clients01} alt="Clients 01" />
            </li>
            <li>
              <img src={clients02} alt="Clients 02" />
            </li>
            <li>
              <img src={clients03} alt="Clients 03" />
            </li>
            <li>
              <img src={clients04} alt="Clients 04" />
            </li>
            <li>
              <img src={clients05} alt="Clients 05" />
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
