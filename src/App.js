import './App.css';
import Feed from './Components/Feed';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';

function App({ Logged=true }) {
  
  return (
    <div className="App">
      {Logged ? <Login /> : <><Sidebar />
      <Feed />
      <Widgets /></>}
    </div>
  );
}

export default App;
