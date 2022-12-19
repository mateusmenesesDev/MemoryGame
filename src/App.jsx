import { GameGrid } from './components/GameGrid';
import { Header } from './components/Header';

function App() {
  return (
    <div className='bg-gray-200 h-screen'>
      {console.log(process.env.REACT_APP_ACCESS_KEY)};
      <Header />
      <GameGrid />
    </div>
  );
}

export default App;
