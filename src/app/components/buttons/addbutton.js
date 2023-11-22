'use client';

export default function AddButton() {
    function handleNewNote() {
        console.log('create new note');
    }

    return (
        <button className="h-8 w-8 border-gray-400 border-2  mr-2 text-center rounded-lg text-gray-400 font-semibold bg-gray-200 items-center" onClick={handleNewNote}>+</button>
    );
}