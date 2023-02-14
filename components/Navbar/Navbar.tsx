import nav from './nav.module.css';
import Image from 'next/image';
import logo from '../../public/gobeyond.png';
import ChangeLanguage from '../ChangeLanguage';
import Button from '@mui/material/Button';

const folder = '/images/';

const Navbar = () => {
  return (
    <div className={nav.nav_container}>
      <div>
        <Image src={logo} alt="Logo header" className={nav.nav_logo} />
      </div>
      <div className={nav.content}>
        <div className={nav.nav_right}>
          <div>
            <Button variant='contained' className={nav.button}>SIGN IN</Button>
          </div>
        </div>
        <div className={nav.containerMovil}>
          <div className={nav.contentMovil}>
            <button>
              <Image
                src={folder + 'iconProfile.svg'}
                alt="Burger menu"
                width={80}
                height={80}
              />
            </button>
          </div>
          <ChangeLanguage />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
