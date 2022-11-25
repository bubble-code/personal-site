import Link from 'next/link'
import { useMyThemeState } from '../store/store'

import { BsFillMoonStarsFill } from 'react-icons/bs'

export const Navbar = () => {
    const [controller, dispatch] = useMyThemeState()

    function toggleDarkMode() {
        dispatch({ type: 'TOGGLE_DARK_MODE' })
    }
    return (
        <nav className={`py-10 mb-8 flex justify-end`}>
            <ul className='flex items-center gap-2'>
                <li> <Link href={'/contact'}>Conctact</Link> </li>
                <li> <Link href={'/blog'}>Blog</Link> </li>
                <li><BsFillMoonStarsFill className='cursor-pointer text-lg text-teal-500' onClick={toggleDarkMode} /></li>
            </ul>
        </nav>
    )
}

