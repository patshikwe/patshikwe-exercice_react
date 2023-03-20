import ModifyTitle from'./ModifyTitle'
import Addition from'./calculator/Addition'
import Multiplication from'./calculator/Multiplication'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ModifyTitle/>
      <div>
      <Addition/>
      <Multiplication/>
      </div>
    </div>
  );
}

export default App;
