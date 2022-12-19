export function InfoBox({ children, info }) {
  return (
    <div className='bg-gray-300 flex w-52 py-5 px-3 justify-between rounded-lg'>
      <div className='text-lg'>{children}</div>
      <div className='font-bold text-2xl'>{info}</div>
      <pre>{process.env.API_KEY}</pre>
    </div>
  );
}
