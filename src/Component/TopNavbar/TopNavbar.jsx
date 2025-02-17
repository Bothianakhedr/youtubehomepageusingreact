export default function TopNavbar() {
  return (
    <nav className="flex py-1 items-center justify-between  pt-1 ">
      <div className="youtube-icon flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="size-5 hidden lg:block w-10 h-10 ml-4 p-2 hover:bg-[#f4f4f4] rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <img
          src="https://www.gstatic.com/youtube/img/promos/growth/8c43a5bdae8abb395faf708d6858ef5007cf2336a2615c2b69dd904149812d71_122x56.webp"
          alt="youtube logo"
        />
      </div>
      <div className="search hidden lg:flex items-center gap-4">
        <div className="w-[650px] h-10 rounded-3xl ps-4 items-center flex justify-between border border-gray-300">
          <input
            type="text"
            placeholder="Search..."
            className="border-0 focus:border-0 focus:outline-0"
          />
          <button className="bg-[#F4F4F4] p-[9px] w-13 border-s-1 border-gray-300 flex items-center justify-center   rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="search-by-voice bg-[#F4F4F4] hover:bg-[#eee] transition-colors w-9 h-9 rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </div>
      </div>

      <div className="account hidden lg:flex pe-4 items-center gap-5">
        <div className="add-post py-2 px-5 flex justify-center items-center shadow-sm transition-colors font-medium gap-2 hover:bg-[#eee] bg-[#F4F4F4] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          create
        </div>
        <div className="bell flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
        <div className="profile flex justify-center items-center w-7 h-7 rounded-full text-white bg-red-800">
          B
        </div>
      </div>
      <div className="search-icon pr-4 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </nav>
  );
}
