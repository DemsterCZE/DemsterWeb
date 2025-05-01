import "./styles/skillcard.css"

interface SkillCardProps  {
    title: string
    images: string[]
    direction_up? : boolean
}

function SkillCard({ title, images, direction_up }: SkillCardProps) {
    return (
      <div className="skill-card">
        <h2>{title}</h2>
        <div className="image-container mt-20">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${title} icon ${index + 1}`}
              className={`floating-image ${direction_up ? "up" : "down"}`}
              style={{ animationDelay: `${index * 0.4}s` }}
            />
          ))}
        </div>
      </div>
    );
  }
    
export default SkillCard