import { FC } from "react";

interface Props{
    title?: string;
}

const NoteItem: FC<Props> = ({title}) => {
    return (
        <div>
            <div className='bg-white shadow-md rounded p-5 mt-8'>
                <h1 className='text-2xl font-bold'>List of Notes</h1>
                <p className="bg-white shadow-md rounded p-5 text-lg">{title}</p>
                <div>
                    <button className='bg-purple-400 text-white px-5 py-2 rounded mr-2 '>View</button>
                    <button className='bg-green-400 text-white px-5 py-2 rounded mr-2 '>Update</button>
                    <button className='bg-red-400 text-white px-5 py-2 rounded mr-2 '>Delete</button>
                </div>

            </div>
        </div>
    );
};

export default NoteItem;