export enum ButtonType {
    Submit = "submit",
    Forward = "forward",
    Back = "back"
}

function Button({ children, type, onClick }: { children: React.ReactNode, type: ButtonType, onClick: () => void }) {
    const commonClasses = "cursor-pointer rounded-lg font-medium leading-[120%] transition-colors duration-500";
    if(type === ButtonType.Submit) {
        return (
            <button 
                type="submit" 
                className={`${commonClasses} h-10 px-[1.375rem] text-white text-sm leading-[150%] bg-purple-600 rounded`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    } else if(type === ButtonType.Forward) {
        return (
            <button className={`${commonClasses} h-12 px-[1.531rem] bg-blue-950 text-white hover:bg-purple-400`} onClick={onClick}>
                {children}
            </button>
        );
    } else {
        return (
            <button className={`${commonClasses} text-grey bg-transparent hover:text-blue-950`} onClick={onClick}>
                {children}
            </button>
        );
    }
}

export default Button;