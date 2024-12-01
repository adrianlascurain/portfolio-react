// import TechCard from './TechCard'
import './App.css'
import './TechCard.css'
import './ProjectCard.css'
import './ProjectCard'
import ProjectCard from './ProjectCard'

function App() {

  return (
    <>
    <div className="cards-container">
      <ProjectCard title='hola' description='Breve descripción del proyecto, cómo se hizo y para qué se hizo, que retos implicó desarrollarlo, con que tecnologías se desarrollo, mostrar detalles superficiales.' image='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Capivara%28Hydrochoerus_hydrochaeris%29.jpg/800px-Capivara%28Hydrochoerus_hydrochaeris%29.jpg' gif='https://preview.redd.it/07ugp5ljimc91.gif?width=730&auto=webp&s=081800fe7503f81497bc4afa324d99cf297c5553' repositoryURL='https://github.com/' liveURL='https://bienestar.edomex.gob.mx/mujeres-bienestar'/>

      <ProjectCard title='hola' description='Breve descripción del proyecto, cómo se hizo y para qué se hizo, que retos implicó desarrollarlo, con que tecnologías se desarrollo, mostrar detalles superficiales.' image='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Capivara%28Hydrochoerus_hydrochaeris%29.jpg/800px-Capivara%28Hydrochoerus_hydrochaeris%29.jpg' gif='https://preview.redd.it/07ugp5ljimc91.gif?width=730&auto=webp&s=081800fe7503f81497bc4afa324d99cf297c5553' repositoryURL='https://github.com/' liveURL=''/>

      
    </div>

    </>
  )
}

export default App
