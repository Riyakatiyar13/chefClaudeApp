import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import image2 from './assets/react.svg';
import Header from './Component/Nav';
import Ingredient from './Component/Input';
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
   
    <div className="container">
      <Header img={image2} />
      <Ingredient />
      
    </div>
  </>
)
