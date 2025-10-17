const Certifications = () => {
  const certifications = [
    {
      title: "FCC GROL",
      fullName: "General Radiotelephone Operator License",
      agency: "Federal Communications Commission",
      icon: (
        <svg
          className="w-20 h-20"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield outline */}
          <path
            d="M40 8L16 18V38C16 56 26 68 40 78C54 68 64 56 64 38V18L40 8Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Radio tower */}
          <path
            d="M40 28L40 44M40 28C35 33 30 36 24 38M40 28C45 33 50 36 56 38"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M40 28C37 31 34 33 30 35M40 28C43 31 46 33 50 35"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="40"
            cy="50"
            r="4"
            fill="currentColor"
          />
          <path
            d="M36 44L44 44L44 48L36 48L36 44Z"
            fill="currentColor"
          />
        </svg>
      ),
      description:
        "E430 Technologies holds the FCC General Radiotelephone Operator License, the premier certification for commercial radio communications operations and maintenance.",
      benefits: [
        "Authorized to install, maintain, and repair commercial radio equipment",
        "Expert knowledge of FCC regulations and radio frequency operations",
        "Qualified for advanced RF system troubleshooting and optimization",
        "Licensed for commercial two-way radio service and repair",
      ],
      background: "bg-gradient-to-br from-primary-50 to-blue-50"
    },
    {
      title: "FAA Part 107",
      fullName: "Commercial UAS Operator Certificate",
      agency: "Federal Aviation Administration",
      icon: (
        <svg
          className="w-20 h-20"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield outline */}
          <path
            d="M40 8L16 18V38C16 56 26 68 40 78C54 68 64 56 64 38V18L40 8Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Drone icon */}
          <circle cx="30" cy="36" r="3" fill="currentColor" />
          <circle cx="50" cy="36" r="3" fill="currentColor" />
          <circle cx="30" cy="48" r="3" fill="currentColor" />
          <circle cx="50" cy="48" r="3" fill="currentColor" />
          <rect
            x="35"
            y="38"
            width="10"
            height="8"
            rx="1.5"
            fill="currentColor"
          />
          <line x1="33" y1="38" x2="30" y2="36" stroke="currentColor" strokeWidth="2" />
          <line x1="47" y1="38" x2="50" y2="36" stroke="currentColor" strokeWidth="2" />
          <line x1="33" y1="46" x2="30" y2="48" stroke="currentColor" strokeWidth="2" />
          <line x1="47" y1="46" x2="50" y2="48" stroke="currentColor" strokeWidth="2" />
          {/* Camera indicator */}
          <circle cx="40" cy="42" r="1.5" fill="white" />
        </svg>
      ),
      description:
        "E430 Technologies is FAA Part 107 certified for commercial unmanned aircraft systems (UAS) operations, enabling professional aerial services for infrastructure inspection and surveying.",
      benefits: [
        "Licensed commercial drone operations for site surveys and inspections",
        "Aerial photography and documentation of RF installations",
        "Tower and rooftop infrastructure assessment from the air",
        "Network facility mapping and campus layout documentation",
      ],
      background: "bg-gradient-to-br from-primary-50 to-purple-50"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Licensed & Certified
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            E430 Technologies maintains professional certifications ensuring compliance, expertise, and industry-leading service quality
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background gradient */}
              <div className={`${cert.background} p-8`}>
                {/* Icon */}
                <div className="mb-6 text-primary-600 group-hover:text-primary-700 transition-colors duration-300 group-hover:scale-105 transform">
                  {cert.icon}
                </div>

                {/* Title and Agency */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary-700 mb-1">
                    {cert.fullName}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {cert.agency}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Benefits */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                    Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, idx) => (
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
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Our certifications demonstrate our commitment to professional excellence and regulatory compliance.{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              Contact us
            </a>{' '}
            to learn how our certified expertise can benefit your project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
