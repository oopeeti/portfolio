"use client";

type NavigationProps = {
    onScrollChange: (offset: number) => void
}

const Navigation = ({ onScrollChange }: NavigationProps) => {

    const scrollTo = (offset: number) => {
        onScrollChange(offset);
    };

    return (
        <div className="w-full flex flex-row items-center justify-center text-gray-100 uppercase space-x-5 lg:space-x-10 z-20">
            <button onClick={() => scrollTo(0.314)} className="bg-transparent px-5 py-1 rounded-md hover:bg-slate-100 border-2 hover:text-black transition duration-200">About</button>
            <button onClick={() => scrollTo(0.651)} className="bg-transparent px-5 py-1 rounded-md hover:bg-slate-100 border-2 hover:text-black transition duration-200">Experience</button>
            <button onClick={() => scrollTo(1)} className="bg-transparent px-5 py-1 rounded-md hover:bg-slate-100 border-2 hover:text-black transition duration-200">Projects</button>
        </div>
    );
}

export default Navigation;
