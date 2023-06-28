import './ThemeSwitch.css';

interface SwitchProps {
    onChangeTheme: () => void
}

export const Switch: React.FC<SwitchProps> = ({onChangeTheme}) => {

    return (  
        <div className='flex items-center gap-x-2'>
            <p className='font-extrabold uppercase text-sm md:text-xl text-sky-500'>
                Theme
            </p>
            <label className="switch" >
                <input 
                    type="checkbox" 
                    onChange={onChangeTheme}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
}
 
