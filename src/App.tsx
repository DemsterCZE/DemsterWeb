import './App.css'
import TypeWriter from './components/TypeWriter'
import SectionCard from './components/SectionCard'
import SkillCard from './components/SkillPanel'
import vitesvg from "/images/vite.svg"
import reactsvg from "/images/react.svg"
function App() {
  return(
    <>
      
      <div id='content' className='ml-auto mr-auto '>
          <TypeWriter title='DemsterSpace'/>
          <div className='lg:flex gap-10 items-start'>
              <img src="src/assets/portrait.jpg" alt="portrait" className='w-85 rounded-xl'/>
              <SectionCard title={"Petr Zemánek"} text={"Mladý vývojář s odhodláním se učit nové věci Pocházím z Kladna a mám vystudovanou střední průmyslovou školu se zaměřemím na informační technologie"}/>
          </div>
          <hr  className='mt-8'/>
          <h2 className='mt-14 text-center rubik text-5xl'>Dovednosti</h2>
          <div className='lg:flex gap-150 mt-32'>
          </div>
    </div>
    </>
  )
}


export default App
