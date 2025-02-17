export default function Aside() {
  return (
    <aside className="hidden lg:block text-center mt-5">
      <div className="home mb-5 hover:bg-[#F4F4F4] transition-colors py-2 rounded-lg">
        <svg
          className="w-5 mx-auto size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span className="text-[11px]">Home</span>
      </div>
      <div className="shorts mb-5 hover:bg-[#F4F4F4] transition-colors py-2 rounded-lg">
        <svg
          className="w-5 mx-auto size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
        <span className="text-[11px]">Shorts</span>
      </div>
      <div className="subscriptions mb-5 hover:bg-[#F4F4F4] transition-colors py-2 rounded-lg">
        <svg
          className="w-5 mx-auto size-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-5.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>

        <span className="text-[11px] ms-1">subscriptions</span>
      </div>
      <div className="account hover:bg-[#F4F4F4] transition-colors py-2 rounded-lg">
        <div className="w-7 h-7 mx-auto rounded-full bg-red-800 text-white flex items-center justify-center">
          B
        </div>
        <span className="text-[11px]">you</span>
      </div>
    </aside>
  );
}
