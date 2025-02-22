"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 border-t-[1px] border-[#C6CFF3] bg-white py-8 dark:bg-gray-dark">
        <div className="grid place-items-center">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo/BMW-M-Logo.webp"
              alt="logo"
              className="w-full"
              width={80}
              height={20}
            />
          </Link>
          <p className="mt-4 text-center text-base leading-relaxed text-[#0363AF] dark:text-[#E5E5E5]">
            Büyükçekmece Gizli Özellik
          </p>
          <div className="mt-4 flex items-center justify-center">
            <a
              href="https://www.instagram.com/buyukcekmecegizliozellik/"
              aria-label="instagram-link"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 mr-4 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-6 h-6 w-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=905306002800"
              aria-label="whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 2.05.533 4.001 1.553 5.737L0 24l6.264-1.637c1.454.799 3.121 1.225 4.827 1.225 6.627 0 12-5.373 12-12S18.627 0 12 0zm5.36 16.303c-.358.988-2.276 1.896-3.123 2.048-.813.157-1.992-.38-2.598-.852a5.37 5.37 0 01-2.345-2.028c-.303-.453-.563-1.15-.067-1.885l.334-.488c.319-.453.569-.614.85-.643.273-.032.535-.032.85.177.273.177.823.557 1.005.643.204.094.37.094.514.063.144-.032.312-.141.443-.258.144-.157.256-.295.35-.403.144-.126.294-.204.447-.22.16-.016.319.063.501.258.2.236.588.704.67.784.104.126.157.189.222.204.065.015.13.015.224-.079.104-.111 1.157-1.333 1.461-2.022.32-.792.144-1.515.032-1.721-.127-.189-.32-.268-.448-.306-.144-.032-.273-.079-.379-.016-.096.047-.221.157-.314.274-.111.143-.191.31-.287.485-.126.231-.274.452-.452.644-.189.21-.352.362-.563.452-.225.095-.452.095-.669.032-.241-.063-.513-.189-.755-.516-.263-.368-1.206-1.123-1.36-1.237-.14-.094-.254-.095-.352-.063-.127.032-.408.142-.608.63-.112.216-.645 1.243-.738 1.461-.081.204-.159.38-.254.516-.095.111-.236.189-.358.204-.144.032-.286-.016-.394-.111-.112-.111-.639-.665-.727-.784-.08-.095-.111-.142-.159-.189-.064-.063-.191-.189-.191-.189-.112-.111-.236-.189-.37-.204-.158-.032-.319.032-.479.157-.203.173-.748.679-.833.768-.112.126-.063.236 0 .358.064.111.333.784.333.784.012.016.143.204.276.409.236.347.492.726.908.94.752.368 1.772.36 2.433.301.66-.063 1.464-.319 1.92-.548a6.933 6.933 0 001.08-.548c.238-.173.445-.365.605-.495.191-.158.286-.236.381-.333.063-.063.126-.111.16-.142.048-.047.096-.063.128-.079.048-.032.128-.063.191.032.064.095.045.252-.048.408z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
