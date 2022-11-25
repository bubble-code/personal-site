import { createContext, useReducer, useMemo, useContext } from "react";

const MyThemeContext = createContext()
MyThemeContext.displayName = 'MyThemeContext';

const MyThemeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            return {
                ...state, darkMode: !state.darkMode
            }
        default:
            return state
    }
}

const MyThemeProvider = ({ children }) => {

    const initialState = {
        darkMode: false
    }

    const [controller, dispatch] = useReducer(MyThemeReducer, initialState);
    const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

    return <MyThemeContext.Provider value={value}>{children}</MyThemeContext.Provider>
}

const useMyThemeState = () => {

    const context = useContext(MyThemeContext);
    return context
}

export { useMyThemeState, MyThemeProvider }