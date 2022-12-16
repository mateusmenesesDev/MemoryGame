import { GameGrid } from './components/GameGrid';
import { Header } from './components/Header';

function App() {
  return (
    <div className='bg-gray-200 h-screen'>
      <Header />
      <GameGrid />
    </div>
  );
}

export default App;
