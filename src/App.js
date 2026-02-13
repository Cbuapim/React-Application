import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sidebar 1</p>
        <Sidebar initialMenuItems={[
            'Rick Grimes',
            'Daryl Dixon',
            'Michonne',
            'Carol Peletier',
            'Negan',
            'Glenn Rhee',
            'Maggie Greene'
          ]}></Sidebar>
      </header>
    </div>
  );
}

export default App;
