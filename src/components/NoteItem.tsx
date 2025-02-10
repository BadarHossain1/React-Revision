import { FC } from "react";
import AppButton from "./AppButton";

interface Props{
    title?: string;
    description?: string;

}

const NoteItem: FC<Props> = ({title}) => {
    return (
        <div>
            <div className='bg-white shadow-md rounded p-5 mt-8'>
                <h1 className='text-2xl font-bold'>List of Notes</h1>
                <p className="bg-white shadow-md rounded p-5 text-lg">{title}</p>
                <div className="flex justify-start mt-5">
                    <AppButton title='Edit' type='normal'></AppButton>
                    <AppButton title='Delete' type='danger'></AppButton>
                    <AppButton title='View' type='regular' onClick={
                        ()=>{
                            alert('Viewing the note');
                        }
                    }></AppButton>
                    
                </div>

            </div>
        </div>
    );
};

export default NoteItem;