import "./styles/skillcard.css"

interface SkillCardProps  {
    title: string
    images: string[]
}

function SkillCard({ title, images}: SkillCardProps) {
  const interval = 1.2;
  const totalDuration = interval * images.length;

  return (
    <div className="skill-card mb-15">
      <h2 className="grand text-3xl">{title}</h2>
      <div className="image-container mt-23">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title}_icon_${index + 1}`}
            className={`floating-image  transition ease-linear hover:scale-107`}
            style={{
              animationDelay: `${index * interval}s`,
              animationDuration: `${totalDuration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
    
export default SkillCard