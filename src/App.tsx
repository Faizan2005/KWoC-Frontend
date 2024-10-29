import './styles/App.css'
import { HeroComponent } from './components/Hero'
import Snowfall from 'react-snowfall';

function App() {

  return (
    <div className='App'>
      <Snowfall // the image can be edited into anything we want, feel free to change 
        snowflakeCount={150}
        speed={[0.5, 1]} // array takes [min, max]
        wind={[-0.5, 0.5]}
        radius={[0.5, 1.5]}
      />
      <div className='hero-container'>
        <HeroComponent />
      </div>
    </div>
  )
}

export default App
