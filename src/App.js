import './App.css';
import Feed from './Components/Feed';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
