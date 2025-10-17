const TrustBadges = () => {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* FCC GROL Badge */}
          <div className="flex items-center space-x-3 group">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-primary-600 group-hover:text-primary-700 transition-colors"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shield with radio waves */}
                <path
                  d="M32 4L12 12V28C12 42 20 52 32 60C44 52 52 42 52 28V12L32 4Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M32 24V32M32 24C28 28 24 30 20 32M32 24C36 28 40 30 44 32"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="32"
                  cy="38"
                  r="3"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">FCC Licensed</div>
              <div className="text-xs text-gray-600">General Radiotelephone Operator</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          {/* FAA Part 107 Badge */}
          <div className="flex items-center space-x-3 group">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-primary-600 group-hover:text-primary-700 transition-colors"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shield with drone */}
                <path
                  d="M32 4L12 12V28C12 42 20 52 32 60C44 52 52 42 52 28V12L32 4Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Simplified drone icon */}
                <circle cx="24" cy="28" r="2" fill="currentColor" />
                <circle cx="40" cy="28" r="2" fill="currentColor" />
                <circle cx="24" cy="38" r="2" fill="currentColor" />
                <circle cx="40" cy="38" r="2" fill="currentColor" />
                <rect
                  x="28"
                  y="30"
                  width="8"
                  height="6"
                  rx="1"
                  fill="currentColor"
                />
                <line x1="26" y1="30" x2="24" y2="28" stroke="currentColor" strokeWidth="1.5" />
                <line x1="38" y1="30" x2="40" y2="28" stroke="currentColor" strokeWidth="1.5" />
                <line x1="26" y1="36" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" />
                <line x1="38" y1="36" x2="40" y2="38" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">FAA Certified</div>
              <div className="text-xs text-gray-600">Part 107 Commercial UAS Operator</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
