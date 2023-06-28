import logoIcon from '../assets/logoIcon.svg'


export const Logo: React.FC = () => {
    return (  
        <div className="flex gap-x-2 items-center">
            <img 
                src={logoIcon} 
                alt="logo" 
                className="w-10 h-10 md:w-14 md:h-14"
            />
            <h1 className="flex flex-col font-extrabold uppercase">
                <span className="whitespace-nowrap text-xl md:text-3xl text-sky-500">
                    To Do
                </span>
                <span className="text-sm md:text-xl text-sky-200">
                    App
                </span>
            </h1>
        </div>
    );
}
 
