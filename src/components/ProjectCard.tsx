interface ProjectProps {
    ProjectName : string
    ProjectDescription? : React.ReactNode
    TechIcons? : string[]
}


function ProjectCard({ProjectName,ProjectDescription,TechIcons}:ProjectProps){
    return(
        <div className="mb-20">
            <h3 className="text-3xl text-white mb-1">{ProjectName}</h3>
            <p className="text-gray-400 text-xl">{ProjectDescription}</p>
            <div className="flex gap-3 mt-4">
                {TechIcons?.map((src,index)=> 
                <img className="w-9" src={src} alt={src+"_"+index.toString()} />
                )}
            </div>
        </div>
    )
}

export default ProjectCard