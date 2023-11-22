'use client';

export default function ItemCard() {
    return (
        <article className="m-2 p-3 bg-gray-200 hover:cursor-pointer rounded-lg drop-shadow-lg">
            <h2 className="text-base font-medium text-gray-500">first line of text</h2>
            <p className="text-sm font-light text-gray-00">preview of the rest of the text lorei ipsum abcd123 the quick brown fox jumps over the lazy dog</p>
        </article>
    );
}