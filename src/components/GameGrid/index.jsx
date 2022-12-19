import { InfoBox } from '../infoBox';
import { ImageElement } from './ImageElement';

export function GameGrid() {
  return (
    <div className=' w-3/5 m-auto'>
      <div className='grid grid-cols-4 gap-5 place-items-center'>
        <ImageElement />
        <ImageElement />
        <ImageElement />
        <ImageElement />
        <ImageElement />
        <ImageElement />
        <ImageElement />
        <ImageElement />
        <ImageElement />
        <ImageElement />
        <ImageElement />
        <ImageElement />
      </div>
      <div className='flex gap-5 justify-center my-5'>
        <InfoBox info={'0:00'}>Time</InfoBox>
        <InfoBox info={'0'}>Moves</InfoBox>
      </div>
    </div>
  );
}
