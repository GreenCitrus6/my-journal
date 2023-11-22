import AddButton from "./buttons/addbutton";

export default function NavTop() {
    return (
        <div className="flex justify-between w-full bg-gray-200 p-2 align-middle items-center">
            <h1 className="text-3xl text-gray-600 font-semibold">My Journal</h1>
            <AddButton />
        </div>
    );
}