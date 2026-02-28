import React, { useState } from 'react';
import { Award } from 'lucide-react';
import SectionTitle from './SectionTitle';
import RhceBadge from '../assets/images/image.png';
import RhcsaBadge from '../assets/images/image (1).png';
import RhcsBadge from '../assets/images/image (2).png';
import ZeroSchoolBadge from '../assets/images/zero.png';
import RhcsaCert from '../assets/images/RHCSA.16393eb5a3fccb604917.png'; // Full certificate image
import RhceCert from '../assets/images/RHCE.png';
import Do188Cert from '../assets/images/Do188.png';
import ZeroCert from '../assets/images/Zc certificate .png';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState('rhcsa');

  const certifications = {
    'rhcsa': { name: 'Red Hat Certified System Administrator', logo: RhcsaBadge },
    'rhce': { name: 'Red Hat Certified Engineer', logo: RhceBadge },
    'rhcs-specialist': { name: 'Red Hat Container Specialist', logo: RhcsBadge },
    'zero-schools': { name: 'Zero Schools Web Developer', logo: ZeroSchoolBadge },
  };

  return (
    <section id="certifications" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Certifications</SectionTitle>
        <div className="flex justify-center flex-wrap gap-8 mb-12">
          {Object.entries(certifications).map(([key, cert]) => (
            <button
              key={key}
              className={`p-6 w-56 h-56 flex flex-col items-center justify-center bg-gray-900 rounded-xl transition-all duration-300 shadow-lg text-center ${selectedCert === key ? 'ring-2 ring-red-500 scale-110' : 'opacity-70 hover:opacity-100'}`}
              onClick={() => setSelectedCert(key)}
            >
              <img src={cert.logo} alt={cert.name} className="h-24 mb-4 object-contain" />
              <span className="text-white font-semibold text-md mt-2">{cert.name}</span>
            </button>
          ))}
        </div>
        <div className="max-w-4xl mx-auto bg-gray-900 p-4 sm:p-8 rounded-lg shadow-lg border border-gray-700">
          {selectedCert === 'rhcsa' ? (
            <img src={RhcsaCert} alt="Red Hat Certified System Administrator Certificate" className="w-full h-auto rounded-md" />
          ) : null}
          {selectedCert === 'rhce' ? (
            <img src={RhceCert} alt="Red Hat Certified Engineer" className="w-full h-auto rounded-md" />
          ) : null}

          {selectedCert === 'rhcs-specialist' ? (
            <img src={Do188Cert} alt="Red Hat Certified System Administrator Certificate" className="w-full h-auto rounded-md" />
          ) :null}
      
          {selectedCert === 'zero-schools' ? (
            <img src={ZeroCert} alt="Red Hat Certified System Administrator Certificate" className="w-full h-auto rounded-md" />
          ) :null}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
