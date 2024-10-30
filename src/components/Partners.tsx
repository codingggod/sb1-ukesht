import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLabs', logo: 'IL' },
    { name: 'FutureAI', logo: 'FA' },
    { name: 'DataSense', logo: 'DS' },
    { name: 'SmartSystems', logo: 'SS' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations to advance AI research and implementation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-32 h-32 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100"
            >
              <span className="text-2xl font-bold text-gray-400">{partner.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;