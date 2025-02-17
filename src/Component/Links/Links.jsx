export default function Links({ word }) {
  return (
    <li className="flex justify-center items-center">
      <a className="font-medium text-sm bg-[#F4F4F4] hover:bg-[#eee] shadow-sm transition-colors duration-200 py-1 px-4 rounded-md">
        {word}
      </a>
    </li>
  );
}
