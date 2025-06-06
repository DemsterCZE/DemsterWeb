
interface SectionCardProps  {
    title: String
    text?: String
}

function SectionCard({title,text}:SectionCardProps){
    return(
    <div className="rounded-3xl transition duration-700 hover:scale-107">
    <div className="w-full max-w-prose p-9 text-base leading-relaxed rounded-4xl bg-gradient-to-r from-black to-black bg-opacity-50 border border-purple-900 transition duration-1000 ease-out hover:from-purple-950 hover:to-pink-950">
        <h2 className="text-5xl font-bold jost">{title}</h2>
        <p className=" mt-7 text-xl text-justify jost">{text}</p>
    </div>
    </div>
    )
} 

export default SectionCard