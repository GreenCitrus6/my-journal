'use client';

export default function EntryField() {
    function handleAutoSave() {
        {/* once the user begins typing, the contents of the entry field will be saved to the coresponding entry after 3 seconds of inactivity */}
        let typingTimer;
        let autoSaveTimer = 3000;
        document.getElementById("noteInput").addEventListener("keyup", () => {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(saveEntry, autoSaveTimer);
        });
        document.getElementById("noteInput").addEventListener("keypress", () => {
            clearTimeout(typingTimer);
        })
    }

    function saveEntry() {
        // console.log('testing autosave');
        
    }
    
    return (
        <textarea className="w-full h-screen sm:w-2/3 bg-gray-200 p-2 pl-5 pt-5 text-gray-700 fixed focus:ring-0 focus:outline-none" id="noteInput" onKeyPress={handleAutoSave}>
        </textarea>
    );
}