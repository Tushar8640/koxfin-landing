export default function Navbar() {
  return (
    <div className="bg-bg_gray z-10">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="../../../public/images/logo.png" alt="" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-[50px] text-[#EAEAEC]">Products</a>
            <a className="mr-[50px] text-[#EAEAEC]">Solutions</a>
            <a className="mr-[50px] text-[#EAEAEC]">consulting</a>
            <a className="mr-[50px] text-[#EAEAEC]">Careers</a>
            <a className=" text-[#EAEAEC]">Contact</a>
          </nav>
          <div className="flex items-center md:space-x-4 relative">
            <button
              type="submit"
              title="Search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#fff] rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

            <button className="text-[#FC5F45] font-semibold text-[20px]">Log in</button>
          </div>
        </div>
      </header>
    </div>
  );
}
