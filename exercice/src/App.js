// Fichier principal

import ModifyTitle from './ModifyTitle'
import Addition from './calculator/Addition'
import Multiplication from './calculator/Multiplication'
import './App.css'

function App() {
  return (
    <div className="pad-top">
      <div className="App">
        <ModifyTitle />
        <div className="displ-grid-just-center width-marg">
          <Addition />
          <Multiplication />
        </div>
      </div>
    </div>
  )
}

export default App
