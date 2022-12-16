export function Button({ children, bg }) {
  return (
    <button
      className={`py-4 px-14 ${bg} text-sm text-white rounded-full hover:bg-red-500`}
    >
      {children}
    </button>
  );
}
