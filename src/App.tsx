import './App.css'
import TypeWriter from './components/TypeWriter'
import SectionCard from './components/SectionCard'
import SkillCard from './components/SkillPanel'
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

function App() {
  return(
    <>
      <div id='content' className='ml-auto mr-auto '>
          <TypeWriter title='DemsterSpace'/>
          <div className='lg:flex gap-10 items-start'>
              <img src="src/assets/portrai.jpg" alt="portrait" className='w-85 rounded-xl'/>
              <SectionCard title={"Petr Zemánek"} text={"Mladý vývojář s odhodláním se učit nové věci. Pocházím z Kladna a mám vystudovanou střední průmyslovou školu se zaměřemím na informační technologie."}/>
          </div>
          <hr  className='mt-8'/>
          <h2 className='mt-17 text-center rubik text-5xl'>Dovednosti</h2>
          <div className='lg:flex gap-28 mt-20'>
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
           <h2 className='mt-18 mb-18 text-center rubik text-5xl'>Kontakty</h2>
              <p className='text-2xl'>Email: <a href="mailto:petr@example.com" className="text-blue-400 underline">petr@example.com</a></p>
              <p className='text-2xl'>GitHub: <a href="https://github.com/username" target="_blank" className="text-blue-400 underline">github.com/username</a></p>
              <p className='text-2xl'>LinkedIn: <a href="https://linkedin.com/in/username" target="_blank" className="text-blue-400 underline">linkedin.com/in/username</a></p>

          </div>
    </>
  )
}


export default App
