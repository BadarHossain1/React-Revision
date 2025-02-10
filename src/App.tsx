import './index.css'
import NoteItem from './components/NoteItem'
import { ChangeEvent, useState } from 'react';
import axios from 'axios';

function App() {

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

  const [notes, setNotes] = useState<{ id: string, title?: string, description?: string }[]>([])
  const [values, setValues] = useState({
    title: '',
    description: ''
  })


  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = target;
    setValues({
      ...values,
      [name]: value
    })
  }
  return (
    <div className='container mx-auto max-w-3xl '>
      <div className=''>
        <form onSubmit={async (evt) => {
          evt.preventDefault();
          const { data } = await axios.post('http://localhost:8000/note/create', {
            title: values.title,
            description: values.description
          })
          // console.log(data);
          setNotes([data.note, ...notes])
          setValues({
            title: "",
            description: ""
          })
        }}
          className='bg-white shadow-md rounded p-5'>
          <h1 className='text-4xl font-extrabold text-blue-400  text-center'>Note Application</h1>
          <div className='space-y-5 mt-5'>
            <div className='mt-5'>

              <input type="title" placeholder='Title' className='border-b-4 border-gray-700 w-full outline-none' onChange={(e) => {
                handleChange(e)
              }} name='title' />

            </div>
            <div className='mt-6'>
              <textarea placeholder='Description' className='border-b-4 border-gray-700 w-full resize-none h-[36]' onChange={(e) => {
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
          return <NoteItem key={note.title} title={note.title} />
        })
      }


    </div>
  )
}

export default App

