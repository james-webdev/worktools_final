import React, { useState } from 'react';
import { Link } from 'gatsby';
// import LogoIcon from '../../svg/LogoIcon';
import LogoIcon from '../../assets/images/logo.png';
import Button from '../Button';
import BurgerMenu from '../BurgerMenu';
import Menu from '../BurgerDropMenu';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const onBurgerClick = () => setMenu(!menu);

  // returns home, cyberessentials or download
  const activePage = () => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname == '/') {
        return 'home';
      } else {
        return window.location.pathname.split('/')[1];
      }
    } else {
      return '';
    }
  };

  return (
    <>
      <header
        className="sticky top-0 py-2"
        style={{
          backgroundColor: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(12px)',
          zIndex: 100
        }}
      >
        <div className="container flex justify-between items-center mx-auto py-2 px-8">
          <div className="flex items-center text-2xl">
            <div className="w-32 mr-3">
              <Link to="/">
                <img src={LogoIcon} alt="Logo" style={{ height: 25, marginTop: 5 }} />
              </Link>
            </div>
          </div>

          <div>
            <div className="mr-5 sm:hidden">
              <BurgerMenu menuOpen={menu} onClick={onBurgerClick} />
            </div>
          </div>

          <div className="hidden sm:flex mt-4 sm:mt-0 align-center">
            <Link to="/" className="poppins text-black px-4 my-auto">
              <div className="headerButton" style={{ opacity: activePage() == 'home' ? 0.5 : 1 }}>
                <p>Home</p>
              </div>
            </Link>
            <Link to="/cyberessentials" className="poppins text-black px-4 mr-4 my-auto">
              <div
                className="headerButton"
                style={{ opacity: activePage() == 'cyberessentials' ? 0.5 : 1 }}
              >
                <p>Cyber Essentials</p>
              </div>
            </Link>

            <Link to="/download" style={{ opacity: activePage() == 'download' ? 0.5 : 1 }}>
              <Button
                onClick="https://download.worktools.link/GuardianInstaller.exe"
                className="text-sm headerDownload focus:outline-none"
              >
                <p className="poppins">Download Now</p>
              </Button>
            </Link>
            {/* </div> */}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Menu menuOpen={menu} />
        </div>
      </header>
    </>
  );
};

export default Header;
