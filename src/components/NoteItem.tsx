import { FC } from "react";
import AppButton from "./AppButton";

interface Props{
    title?: string;
    description?: string;
    onEditClick?(): void;
    onDeleteClick?(): void;
    onViewClick?(): void;

}

const NoteItem: FC<Props> = ({title, description,  onEditClick, onDeleteClick, onViewClick}) => {
    return (
        <div>
            <div className='bg-white shadow-md rounded p-5 mt-8'>
                <h1 className='text-2xl font-bold'>List of Notes</h1>
                <p className="bg-white shadow-md rounded p-5 text-lg">{title}</p>
                { description ? <p className="bg-white shadow-md rounded p-5 text-lg">{description}</p>: null}
                <div className="flex justify-start mt-5">
                    <AppButton onClick={onEditClick} title='Edit' type='normal'></AppButton>
                    <AppButton onClick={onDeleteClick} title='Delete' type='danger'></AppButton>
                    <AppButton onClick={onViewClick} title='View' type='regular' 
                    ></AppButton>
                    
                </div>

            </div>
        </div>
    );
};

export default NoteItem;