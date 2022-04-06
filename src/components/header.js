// Icon
import { ReactComponent as SearchleIcon } from "../images/icons/search.svg";
import { ReactComponent as BellIcon } from "../images/icons/bell.svg";

// component
import Dropdown from "../components/userProfileBTN";

const notification_count = 3;

const Header = () => {
  return (
    <header>
      <div className="w-full h-20 align-middle py-3 border-b flex justify-between px-8">
        <div className=" flex flex-wrap w-5/12 rounded-lg bg-lightergray">
          <input
            type="text"
            class="flex-shrink flex-grow flex-auto  w-px flex-1 border-0 h-10 px-3 not-italic  self-center rounded-lg  bg-lightergray outline-none"
            placeholder="Ask us anyquestion"
          />
          <div class="flex -mr-px">
            <span class="bg-lightergray rounded-lg flex items-center leading-normal   border-0 px-3 text-gray-600">
              <SearchleIcon />
            </span>
          </div>
        </div>
        <div className="profile ">
          <div className="border py-1 border-stroke rounded-md flex flex-row items-center flex-wrap ">
            <div className="px-4 flex justify-center items-center">
              <BellIcon />
              <div className="bg-red p-1 mx-2 rounded-md w-5 h-5 flex justify-center items-center text-white font-medium">
                {notification_count}
              </div>
            </div>
            <div className="border-l h-full border-stroke">&nbsp;</div>
            <div className="px-2">
              <Dropdown />
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-8 border-b">
      <ul className="flex">
        <li className="flex mr-3">
          <a className="text-center block border-b-2 border-purple-500 py-2 px-4 hover:text-black text-black" href="/">
            Efficiency
          </a>
        </li>
        <li className="flex mr-3">
          <a className="text-center block py-2 px-4 hover:text-black text-gray-500" href="/">
            Volume
          </a>
        </li>
        <li className="flex mr-3">
          <a className="text-center block py-2 px-4 hover:text-black text-gray-500" href="/">
            Custmer Satisfaction
          </a>
        </li>
        <li className="flex mr-3">
          <a className="text-center block py-2 px-4 hover:text-black text-gray-500" href="/">
            Backlog
          </a>
        </li>
      </ul>
      </div>
    </header>
  );
};

export default Header;
