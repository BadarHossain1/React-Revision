import './index.css'
import NoteItem from './components/NoteItem'
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

type noteType = {
  
  id: string,
  title: string,
  description?: string
}

function App() {

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

  const [notes, setNotes] = useState<noteType[]>([])
  
  const [values, setValues] = useState({
    title: '',
    description: ''
  })
  const [selectedNoteId, setSelectedNoteId] = useState("")
  const [noteToView, setNoteToView] = useState<noteType>();



  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = target;
    setValues({
      ...values,
      [name]: value
    })



  }


  useEffect(() => {
    const getNote = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/note')
        setNotes(data.notes)
      }
      catch (err) {
        console.log(err);
      }
    }
    getNote();
  }, [])

  return (
    <div className='container mx-auto max-w-3xl '>
      <div className=''>
        <form onSubmit={async (evt) => {
          evt.preventDefault();
          if (selectedNoteId) {

            const { data } = await axios.patch('http://localhost:8000/note/' + selectedNoteId, {
              title: values.title,
              description: values.description
            });
            console.log(data.note);
            const updatedNote = notes.map((note) => {
              if (note.id === selectedNoteId) {
                note.title = data.note.title;
                note.description = data.note.description;
              }
              return note;
  
            });
            setNotes([...updatedNote]);
            setValues({
              title: "",
              description: ""
            });
            return;
          }
        }}
          className='bg-white shadow-md rounded p-5'>
          <h1 className='text-4xl font-extrabold text-blue-400  text-center'>Note Application</h1>
          <div className='space-y-5 mt-5'>
            <div className='mt-5'>

              <input value={values.title} type="title" placeholder='Title' className='border-b-4 border-gray-700 w-full outline-none' onChange={(e) => {
                handleChange(e)
              }} name='title' />

            </div>
            <div className='mt-6'>
              <textarea value={values.description} placeholder='Description' className='border-b-4 border-gray-700 w-full resize-none h-[36]' onChange={(e) => {
                handleChange(e)


              }}
                name='description' />

            </div>
            <div>
              <button
                className='bg-blue-400 text-white px-5 py-2 rounded mx-auto w-full'>Submit</button>

            </div>

          </div>
        </form>
      </div>
      {
        notes.map((note) => {
          return <NoteItem

          onViewClick={() => {
            if(noteToView){
              setNoteToView(undefined); // here we are setting the note to view to undefined because we want to close the note that is currently open
            }
            else{
              setNoteToView(note);
            }
          }}

          onDeleteClick= {async() =>{
            const result = confirm('Are you sure you want to delete this note?');
            if(result){
              const {data} = await axios.delete('http://localhost:8000/note/'+note.id)
              console.log(data);
              const filteredNotes = notes.filter((n) => n.id !== note.id);
              setNotes(filteredNotes);
            }
          }}
          
          onEditClick={() => {
            setSelectedNoteId(note.id)
            setValues({
              title: note.title || "",
              description: note.description || ""
            })

          }} key={note.id} title={note.title} description={noteToView?.id === note.id ? noteToView.description: ""} />
        })
      }


    </div>
  )
}

export default App

