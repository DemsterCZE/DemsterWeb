import './App.css'
import TypeWriter from './components/TypeWriter'
import SectionCard from './components/SectionCard'
import SkillCard from './components/SkillPanel'
import ProjectCard from './components/ProjectCard'
import vitesvg from "/images/vite.svg"
import reactsvg from "/images/react.svg"
import htmlsvg from "/images/html.svg"
import tailwindsvg from "/images/tailwindcss.svg"
import typescriptsvg from "/images/typescript.svg"
import jirasvg from "/images/jira.svg"
import mysqlsvg from "/images/mysql.svg"
import javasvg from "/images/java.svg"
import pythonsvg from "/images/python.svg"
import springsvg from "/images/spring.svg"
import postgresqlsvg from "/images/postgresql.svg"
import gitsvg from "/images/git.svg"
import dockersvg from "/images/docker.svg"
import postmansvg from "/images/postman.svg" 
import vscodesvg from "/images/vscode.svg"
import intelijsvg from "/images/intelij.svg"
import pycharmsvg from "/images/pycharm.svg"
import godotsvg from "/images/godot.svg"


function App() {
  return(
    <>
    <div className='antialiased selection:bg-purple-950'>
      <div id='content' className='ml-auto mr-auto container'>
          <div className='h-screen flex flex-col items-center justify-center'>
              <TypeWriter title='DemsterSpace'/>
          </div>
          <main>
          <div className='relative lg:flex gap-10 items-start z-50'>
              <img src="/images/portrai.jpg" alt="portrait" className='w-85 rounded-xl'/>
                
                <SectionCard title={"Petr Zemánek"} 
                text={"Mladý vývojář s odhodláním se učit nové věci. Pocházím z Kladna a mám vystudovanou střední průmyslovou školu se zaměřemím na informační technologie."}/>
          </div>
          <hr  className='mt-10'/>
          <h2 className='mt-17 text-center rubik text-5xl text-shadow-md text-shadow-purple-950'>Dovednosti</h2>
          <div className='lg:flex gap-28 mt-18'>
            <div className="flex-1">
              <SkillCard title='Frontend 👨‍💻' images={[htmlsvg,reactsvg,tailwindsvg,typescriptsvg,vitesvg]} />
            </div>
            <div className="flex-1">
              <SkillCard title='Backend 💻' images={[javasvg,pythonsvg,mysqlsvg,springsvg,postgresqlsvg]} />
            </div>
            <div className="flex-1">
              <SkillCard title='DevOps ⚙️' images={[jirasvg,gitsvg,dockersvg]} />
            </div>
            <div className="flex-1">
              <SkillCard title='Tools 🛠️' images={[vscodesvg,postmansvg,intelijsvg,pycharmsvg]} />
            </div>
          </div>
          <hr />
              <div id='projects' className="ml-auto mr-auto mt-17 mb-18">
                  <h2 className='text-center rubik text-5xl mb-20 text-shadow-md text-shadow-purple-950'>Projekty</h2>
                  <ProjectCard ProjectName={"Hra PING | Maturitní projekt"} 
                  ProjectDescription={<>
                  Projekt se skládá ze tří částí (Webová aplikace, Desktopová aplikace a Backend) Jedná se o jednoduchou 2D hru vytvořenou v herním enginu Godot.
                  Projekt je dostupný 
                  na <a className='text-blue-400 underline hover:text-blue-300' href="https://github.com/DemsterCZE/Maturita" target="_blank" rel="noopener noreferrer">GitHubu</a>
                  </>} 
                  TechIcons={[pythonsvg,mysqlsvg,gitsvg,htmlsvg,godotsvg]}/>
              </div>
              <hr />
              <div id='contact' className='ml-auto mr-auto mt-17 mb-18'>
                  <h2 className='text-center rubik text-5xl mb-2 text-shadow-md text-shadow-purple-950'>Kontakt</h2>
                  <div className='flex ml-auto mr-auto'>
                      <div className='flex-1'>
                          <h3 className='text-center'>GitHub</h3>

                      </div>
                      <div className='flex-1'>
                          <h3 className='text-center'>LinkedIN</h3>

                      </div>
                  </div>
              </div>
              </main>
          </div>
        </div>
    </>
  )
}


export default App 
