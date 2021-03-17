// import './App.css';
import List from './List'
import languages from './data/languages'

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Vote your  lang!</h1>
      <List languages={languages}></List>
    </div>
  );
}

export default App;
