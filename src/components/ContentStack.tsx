import React from 'react';
import SlidePanel from './SlidePanel';

const ContentStack = () => {
  const sections = [
    {
      title: "Crystal Clear Precision",
      content: "We don't just clean; we restore. Our specialized treatment plans ensure your water is always ready for a dip. Crystal clear, pH-balanced, and safe for the whole family."
    },
    {
      title: "Expert Maintenance",
      content: "From pump repairs to robotic cleaner maintenance. We handle the technical side of pool ownership so you can focus on the leisure. Weekly checks included."
    },
    {
      title: "Smart Monitoring",
      content: "Real-time water quality tracking and automated chemical balancing. We use the latest technology to keep your pool in peak condition year-round."
    }
  ];

  return (
    <div className="content-stack">
      {sections.map((section, i) => (
        <SlidePanel key={i} title={section.title} content={section.content} />
      ))}
    </div>
  );
};

export default ContentStack;
