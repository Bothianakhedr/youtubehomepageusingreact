import { useState } from "react";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
   isOpen===true ? setIsOpen(false) : setIsOpen(true)
  }
  return (
    <div className="youtube-icon mt-5  pe-7   ">
      <div className="flex ">
        <button className=" " onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="size-5 mx-auto hidden lg:block w-10 h-10 ml-4 p-2 hover:bg-[#f4f4f4] rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <img
          className=""
          src="https://www.gstatic.com/youtube/img/promos/growth/8c43a5bdae8abb395faf708d6858ef5007cf2336a2615c2b69dd904149812d71_122x56.webp"
          alt="youtube logo"
        />
      </div>

      {isOpen === true ? (
        <div className="w-45 ">
          <ul className="mt-3">
            <li className="bg-white hover:bg-[#F4F4F4] px-4 py-2 rounded-md mb-2 flex gap-5 items-center">
              <svg
                className="w-5  size-6"
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
              <span className="text-md ">Home</span>
            </li>
            <li className="bg-white hover:bg-[#F4F4F4] px-4 py-2 rounded-md mb-2 flex gap-5 items-center">
              <svg
                className="w-5  size-6"
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
              <span className="text-md">Shorts</span>
            </li>
            <li className="bg-white hover:bg-[#F4F4F4] px-4 py-2 rounded-md mb-2 flex gap-3 items-center">
              {" "}
              <svg
                className="w-5  size-6"
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
              <span className="text-md ms-1">Subscriptions</span>
            </li>
            <hr className="text-gray-200 mx-auto"/>
          </ul>
          <h3 className="text-left ps-4">you</h3>
          <ul className="mt-3">
            <li className="bg-white hover:bg-[#F4F4F4] px-4 py-2 rounded-md mb-2 flex gap-5 items-center">
              <svg
                className="w-5  size-6"
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
              <span className="text-md ">History</span>
            </li>
            <li className="bg-white hover:bg-[#F4F4F4] px-4 py-2 rounded-md mb-2 flex gap-5 items-center">
              <svg
                className="w-5  size-6"
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
              <span className="text-md">PlayList</span>
            </li>
            <li className="bg-white hover:bg-[#F4F4F4] px-4 py-2 rounded-md mb-2 flex gap-3 items-center">
              <svg
                className="w-5  size-6"
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
              <span className="text-md ms-1">Your Videos</span>
            </li>
            <hr className="text-gray-200 mx-auto"/>
          </ul>
        </div>
      ) : (
        <aside className="hidden lg:block text-center mt-5">
          <div className="home w-13   mx-auto p-1   mb-5 hover:bg-[#F4F4F4] transition-colors  rounded-lg">
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
          <div className="shorts w-13   mx-auto  p-1 mb-5 hover:bg-[#F4F4F4] transition-colors  rounded-lg">
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
          <div className="subscriptions flex items-center justify-center flex-col   mx-auto  w-13 mb-5 hover:bg-[#F4F4F4] transition-colors  rounded-lg">
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

            <span className="text-[11px] ms-1">Subscriptions</span>
          </div>
          <div className="account   mx-auto p-1 hover:bg-[#F4F4F4] transition-colors w-13 rounded-lg">
            <div className="w-7 h-7 mx-auto rounded-full bg-red-800 text-white flex items-center justify-center">
              B
            </div>
            <span className="text-[11px]">You</span>
          </div>
        </aside>
      )}
    </div>
  );
}
