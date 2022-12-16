import { Button } from '../Button';

export function Header() {
  return (
    <header className='flex justify-between p-16'>
      <h1 className='text-xl'>Memory Game</h1>
      <div className='flex gap-2'>
        <Button bg='bg-yellow-600'>Restart</Button>
        <Button bg='bg-gray-500'>New Game</Button>
      </div>
    </header>
  );
}
