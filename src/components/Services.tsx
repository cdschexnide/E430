const Services = () => {
  const services = [
    {
      title: 'RF Radio Services',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8L32 20M32 8C28 12 24 16 20 20M32 8C36 12 40 16 44 20M32 8C40 16 48 24 56 32M32 8C24 16 16 24 8 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M20 28L20 52L44 52L44 28L32 20L20 28Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 34H38M26 42H38" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M20 52L16 56L48 56L44 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Expert consulting, installation, and repair services for radio frequency systems and wireless communications equipment.',
      features: ['System Design & Installation', 'Troubleshooting & Repairs', 'Performance Optimization', 'Compliance Testing']
    },
    {
      title: 'IT Services',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="3"/>
          <path d="M8 38L56 38L56 44L8 44L8 38Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 44L28 50L36 50L36 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 50L44 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M20 20L28 28M28 20L20 28M40 24H48M40 32H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Comprehensive IT support and consulting services to keep your technology infrastructure running smoothly.',
      features: ['System Administration', 'Hardware & Software Support', 'Security Solutions', 'Cloud Services']
    },
    {
      title: 'Computer Networking',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="3"/>
          <circle cx="52" cy="12" r="6" stroke="currentColor" strokeWidth="3"/>
          <circle cx="12" cy="52" r="6" stroke="currentColor" strokeWidth="3"/>
          <circle cx="52" cy="52" r="6" stroke="currentColor" strokeWidth="3"/>
          <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3"/>
          <path d="M17 15L25 28M39 28L47 15M17 49L25 36M39 36L47 49" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Professional network design, implementation, and maintenance for reliable and secure connectivity.',
      features: ['Network Design & Setup', 'Router & Switch Configuration', 'Network Security', 'Performance Monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary-500 border-2 border-transparent"
            >
              {/* Icon */}
              <div className="mb-6 text-primary-600 group-hover:text-primary-700 transition-colors duration-300 group-hover:scale-110 transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
