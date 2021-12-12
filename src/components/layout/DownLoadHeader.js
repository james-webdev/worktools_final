import React, { useState } from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import BurgerMenu from '../BurgerMenu';
import Menu from '../Menu';

const DownLoadHeader = () => {
  const [menu, setMenu] = useState(false);
  const onBurgerClick = () => setMenu(!menu);

  return (
    <>
      <header className="rounded sticky top-0 z-20 bg-white shadow">
        <div className="container flex justify-between items-center mx-auto py-2 px-8">
          <div className="flex items-center text-2xl">
            <div className="w-32 mr-3">
              <LogoIcon />
            </div>
          </div>

          <div>
            <div className="mr-10 sm:hidden">
              <BurgerMenu menuOpen={menu} onClick={onBurgerClick} />
            </div>
          </div>

          <div className="hidden md:flex mt-4 sm:mt-0">
            <Link to="/" className="poppins text-black font-semibold px-4" href="#features">
              Home
            </Link>
            <Link to="/" className="poppins text-black font-semibold px-4" href="#pricing">
              Cyber Essentials
            </Link>
          </div>
          <div className="hidden md:block">
            <Button
              onClick="https://download.worktools.link/GuardianInstaller.exe"
              className="text-sm"
            >
              Download Now
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Menu menuOpen={menu} />
        </div>
      </header>
    </>
  );
};

export default DownLoadHeader;
