import { FC } from "react";


interface Props{
    title?:string;
    type?: "danger" | "normal" | "regular"; 
    onClick?(): void;

}

const AppButton:FC<Props> = ({title,type, onClick}) => {

    let color = '';

    switch(type){
        case 'danger':
            color = 'bg-red-400';
            break;
        case 'normal':
            color = 'bg-blue-500';
            break;
        case 'regular':
            color = 'bg-purple-700';
            break;
        
    }
    return (
        <div>
            <button onClick={onClick} className={color+' text-white px-5 py-2 rounded mr-2 '}>{title}</button>
        </div>
    );
};

export default AppButton;