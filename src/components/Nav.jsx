import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../const';
const Nav = () => {
  return (
    <header className='padding-x py-8 w-full z-10 absolute'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} 
                    width={130}
                    height={30}
                    alt='Nike Logo'
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>{/* hidden on large screens */}
              {
                navLinks.map((item) => (
                    <li key={item.label} >
                        <a href={item.href} className='text-gray-400 font-montserrat text-lg leading-normal'>
                          {/*() instead of {} will return immediatly without return st and also we need one component or to be wrapped as one in it*/}
                          {item.label}
                        </a>
                    </li>
                ))
              }
            </ul>
            <div>
              <img src={hamburger} width={20} height={20} alt='Navicon' className='hidden max-lg:block'>{/* hidden then make it visible on large screens */}
              </img>
            </div>
        </nav>
    </header>
  )
}

export default Nav;