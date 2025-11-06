import React from "react";
import GridCard from "./ui/GridCard";

// Example icons (you can replace these with your actual icons)
const FileIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm2 2h8v2H6V5zm0 4h8v2H6V9zm0 4h5v2H6v-2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
      clipRule="evenodd"
    />
  </svg>
);

const BotIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
  </svg>
);

const SecurityIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
  </svg>
);

const GridCardDemo: React.FC = () => {
  const cardData = [
    {
      title: "Smart Document Processing",
      description:
        "AI-powered document analysis and extraction with advanced OCR capabilities. Process thousands of documents in minutes with high accuracy.",
      icon: <FileIcon />,
    },
    {
      title: "Global Connectivity",
      description:
        "Connect with clients and services worldwide through our robust network infrastructure.",
      icon: <GlobeIcon />,
    },
    {
      title: "AI Assistant",
      description:
        "24/7 intelligent support with natural language processing and machine learning capabilities.",
      icon: <BotIcon />,
    },
    {
      title: "Data Management",
      description:
        "Secure, scalable database solutions with real-time analytics and backup systems.",
      icon: <DatabaseIcon />,
    },
    {
      title: "Enterprise Security",
      description:
        "Military-grade encryption and security protocols to protect your sensitive data and operations.",
      icon: <SecurityIcon />,
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Reliable cloud services with 99.9% uptime and automatic scaling capabilities.",
      icon: <CloudIcon />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Our Services
      </h2>

      {/* Responsive grid: Mobile (1 col), Tablet (2 cols), Desktop (3 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {cardData.map((card, index) => {
          // Define specific spanning for certain cards
          let colSpan: 1 | 2 = 1;
          let rowSpan: 1 | 2 = 1;

          // Make the first card span 2 columns
          if (index === 0) {
            colSpan = 2;
          }
          // Make the third card span 2 rows
          if (index === 2) {
            rowSpan = 2;
          }
          // Make the last card span both 2 columns and 2 rows (feature card)
          if (index === cardData.length - 1) {
            colSpan = 2;
            rowSpan = 2;
          }

          return (
            <GridCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              colSpan={colSpan}
              rowSpan={rowSpan}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridCardDemo;
