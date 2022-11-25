
import { useMyThemeState } from "../store/store"
import { Navbar } from "./navbar"

export const Layout = ({ children }) => {

    const [controller] = useMyThemeState()
    const { darkMode } = controller

    return (
        <main className={`px-10 md:text-center md:px-20 lg:px-40  ${darkMode ? 'dark' : ''}`}>
            <Navbar />
            {children}
        </main>
    )
}
