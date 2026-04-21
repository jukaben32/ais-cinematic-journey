import React from 'react';
import SlidePanel from './SlidePanel';

const ContentStack = () => {
  const sections = [
    {
      title: "Master AI Automation",
      content: "We've went through the journey of like an evolution of technology. Everything you need to master AI automation is right here."
    },
    {
      title: "Elite Production",
      content: "Transform your brand from static to cinematic. Our system uses frame-perfect scroll scrubbing to create an immersive experience."
    },
    {
      title: "Join the Movement",
      content: "Become part of the AI Automation Society. This is the final call to action to join the movement and change the way you build."
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
