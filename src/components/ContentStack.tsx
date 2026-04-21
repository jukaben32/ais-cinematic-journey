import React from 'react';
import SlidePanel from './SlidePanel';

const ContentStack = () => {
  const sections = [
    {
      title: "Claridad de Cristal",
      content: "No solo limpiamos; restauramos. Nuestros planes de tratamiento especializado garantizan que tu agua esté siempre lista para un chapuzón. Cristalina, con pH balanceado y segura para toda la familia."
    },
    {
      title: "Mantenimiento Experto",
      content: "Desde reparaciones de bombas hasta mantenimiento de limpiadores robóticos. Nos encargamos del lado técnico de tu piscina para que tú te concentres en el descanso. Incluye revisiones semanales."
    },
    {
      title: "Monitoreo Inteligente",
      content: "Seguimiento en tiempo real de la calidad del agua y balance químico automatizado. Usamos la última tecnología para mantener tu piscina en óptimas condiciones todo el año."
    },
    {
      title: "Renovación de Superficies",
      content: "Pintura especializada, reparación de mosaicos y sellado profesional. Devolvemos el brillo y la vida a las piscinas que han perdido su color original."
    },
    {
      title: "Iluminación LED Premium",
      content: "Transforma tus noches con sistemas de iluminación LED subacuática de bajo consumo. Crea ambientes paradisíacos con control de colores desde tu smartphone."
    },
    {
      title: "Sistemas de Sal y Salud",
      content: "Olvídate del fuerte olor a cloro. Instalamos sistemas de cloración salina que son más suaves para la piel y los ojos, garantizando una salud total en cada chapuzón."
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
