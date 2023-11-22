'use client';

export default function SideBar (props) {
    return (
        <nav className="bg-gray-300 h-screen sm:w-1/3 hidden sm:block z-20 border-r-2 border-gray-30 fixed left-0 overflow-y-scroll">
            {/* shadow-[rgba(0,0,0,0.1)_10px_0px_10px_0px] navbar right shadow*/}
            {props.children}
        </nav>
    );
}
