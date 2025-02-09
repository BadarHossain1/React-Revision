import './index.css'
import NoteItem from './components/NoteItem'

function App() {
  return (
    <div className='container mx-auto max-w-3xl '>
      <div className=''>
        <div className='bg-white shadow-md rounded p-5'>
          <h1 className='text-4xl font-extrabold text-blue-400  text-center'>Note Application</h1>
          <div className='space-y-5 mt-5'>
            <div className='mt-5'>
              <input type="text" placeholder='Title' className='border-b-4 border-gray-700 w-full outline-none' />
            </div>
            <div className='mt-6'>
              <input type="text" placeholder='Description' className='border-b-4 border-gray-700 w-full resize-none h-[36]' />
            </div>
            <div>
              <button className='bg-blue-400 text-white px-5 py-2 rounded mx-auto w-full'>Submit</button>

            </div>

          </div>
        </div>
      </div>
     <NoteItem title='Badar ka routine'></NoteItem>
     <NoteItem></NoteItem>
     <NoteItem></NoteItem>
      
      
    </div>
  )
}

export default App