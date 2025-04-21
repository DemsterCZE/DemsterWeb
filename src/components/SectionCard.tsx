
interface SectionCardProps  {
    titulek: String
    text?: String
}

function SectionCard({titulek,text}:SectionCardProps){
    return(
    <div className="max-w-prose p-9 text-base leading-relaxed rounded-3xl bg-gradient-to-r from-purple-950 to-pink-950">
        <h2 className="text-5xl font-bold jost">{titulek}</h2>
        <hr />
        <p className="mt-7 text-xl text-justify jost">{text}</p>
    </div>
    )
} 

export default SectionCard