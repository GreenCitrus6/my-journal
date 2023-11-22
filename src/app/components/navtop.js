'use client';
import AddButton from "./buttons/addbutton";
import ExportButton from "./buttons/exportentries";

export default function NavTop() {
    let headerName = "My Journal";
    function handleChangeHeader() {
        console.log('test change header');
    }
    
    return (
        <div className="flex justify-between w-full bg-gray-200 p-2 align-middle items-center">
            <h1 className="text-3xl text-gray-600 font-semibold" onClick={handleChangeHeader}>{ headerName }</h1>
            <div>
                <ExportButton />
                <AddButton />
            </div>
        </div>
    );
}