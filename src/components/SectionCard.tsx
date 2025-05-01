
interface SectionCardProps  {
    title: String
    text?: String
}

function SectionCard({title,text}:SectionCardProps){
    return(
    <div className="rounded-3xl hover:scale-103 transition h-auto">
    <div className="w-full max-w-prose p-9 text-base leading-relaxed rounded-3xl bg-gradient-to-r from-purple-950 to-pink-950 h-auto">
        <h2 className="text-5xl font-bold jost">{title}</h2>
        <p className=" mt-7 text-xl text-justify jost">{text}</p>
    </div>
    </div>
    )
} 

export default SectionCard