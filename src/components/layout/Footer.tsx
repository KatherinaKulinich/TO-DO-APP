export const Footer:React.FC = () => {
    return (
        <footer className="lg:container lg:mx-auto px-2 lg:px-4 xl:px-0">
            <div className="py-3 md:py-5 flex items-center justify-center md:justify-end">
                <div className="flex flex-col  items-center md:items-end">
                    <p className="uppercase text-md text-sky-300">
                        To do app
                    </p>
                    <p className="uppercase text-xs text-sky-500">
                        created by Kateryna Kulinich
                    </p>
                </div>
            </div>
        </footer>
    )
}