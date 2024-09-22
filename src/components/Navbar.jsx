import { Link } from "react-router-dom"
import logo from "../assets/logo.webp"
import SearchBar from "./SearchBar"

const Navbar = () => {
  const NavbarItems = ["Pro", "Teams", "Pricing", "Documentation"]
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center border-b border-[#e5e5e5]">
        <div className="flex items-center px-5 w-full 2xl:w-[1500px] py-[2px] gap-1.5">
          <p className="p-2.5 text-lg text-[#333]">❤</p>
          {NavbarItems.map((item, index) => (
            <p key={index} className="p-2.5 text-sm font-medium">{item}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center shadow-lg">
        <div className="navbar flex flex-col w-full 2xl:w-[1500px]">
          <div className="flex flex-col md:flex-row w-full py-3.5 px-6 gap-2 md:gap-4 items-start ">
            <div className="flex flex-row items-start justify-between w-full gap-4">
              <Link to="/" className="h-14 w-[6rem]">
                <img src={logo} alt="" className="h-14 pr-2" />
              </Link>
              <div className="flex w-full h-fit">
                <SearchBar />
                <button className="py-2 px-8 bg-[#231f20] text-white text-sm font-semibold">Search</button>
              </div>
            </div>

            <div className="flex ml-4">
              <button className="py-[13px] px-7 border border-[#cccdcd] text-sm text-nowrap font-medium">Sign Up</button>
              <button className="py-[13px] px-7 text-sm text-nowrap font-medium">Sign In</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
