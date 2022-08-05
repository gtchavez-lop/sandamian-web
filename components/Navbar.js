import { useEffect, useState } from 'react';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  const [thresholdReached, setThresholdReached] = useState(false);

  const handleScroll = (e) => {
    setThresholdReached(window.scrollY > 100);
  };

  useEffect((e) => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`p-2 flex justify-center fixed w-full z-[999] transition-all ${
          thresholdReached ? 'bg-base-100 shadow-lg py-3' : 'py-7'
        } `}
      >
        <div className="navbar gap-2 justify-between w-full max-w-5xl ">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full overflow-hidden">
              <img src={'./logo.png'} />
            </div>
            <p className="text-xl font-semibold select-none cursor-pointer hidden md:block">
              San Damian Center
            </p>
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex="0" className="btn btn-ghost">
              <HamburgerMenuIcon />
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 mt-2 shadow bg-base-100 rounded-box w-56"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <ul className="hidden lg:flex items-center gap-2">
            <li className="btn btn-ghost">Home</li>
            <li className="btn btn-ghost">Services</li>
            <li className="btn btn-ghost">About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
