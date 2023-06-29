import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import { Logo } from "../Logo"
import { Switch } from "../buttons/ThemeSwitch/ThemeSwitch"


export const Header:React.FC = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <header className="w-full lg:container lg:mx-auto px-2 lg:px-3 xl:px-0">
           <div className="py-3 md:py-5 flex items-center justify-between">
                <Logo/>
                <Switch onChangeTheme={toggleTheme} />
           </div>
        </header>
    )
}