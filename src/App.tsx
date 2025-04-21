import './App.css'
import TypeWriter from './components/TypeWriter'
import SectionCard from './components/SectionCard'
function App() {
  return(
    <>
      <div id='content' className='ml-auto mr-auto '>
          <TypeWriter title='DemsterSpace'/>
          <div className='flex gap-20'>
          <img src="src/assets/portrait.jpg" alt="portrait" className='w-85'/>
          <SectionCard titulek={"Petr Zemánek"} text={""}/>
          </div>
          <hr  className='mt-8'/>
          <h2 className='mt-14 text-center rubik text-5xl'>Dovednosti</h2>
    </div>
    </>
  )
}


export default App
