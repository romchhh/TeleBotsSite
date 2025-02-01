import { useNavbar } from '../context/NavbarContext';
import { usePagePosition } from '../hooks/usePagePosition';
import CustomNavLink from './CustomNavLink';

function Navbar() {
    const pagePosition = usePagePosition();
    const { isActiveNav } = useNavbar();

    return (
        <ul
            className={`flex ${
                pagePosition < 150 || isActiveNav ? 'text-black' : 'text-black'
            }  gap-10 z-30 lg:flex-row justify-start lg:text-lg text-2xl flex-col top-1/2 text-center`}
        >
            <li>
                <CustomNavLink to='https://telebots.site/#about'>Головна</CustomNavLink>
            </li>
            <li>
                <CustomNavLink to='https://telebots.site/prices'>Ціни</CustomNavLink>
            </li>
            <li>
                <CustomNavLink to='https://telebots.site/#portfolio'>Портфоліо</CustomNavLink>
            </li>
            <li>
                <CustomNavLink to='https://telebots.site/blog'>Блог</CustomNavLink>
            </li>
            <li className="ml-8 font-bold">
                <a href="tel:+380960908006" className="text-black-500 hover:text-black-700 transition-colors">+380960908006</a>
            </li>
        </ul>
    );
}

export default Navbar;