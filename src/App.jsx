import './App.css';
import MastHead from './components/MastHead';
import About from './components/About';

function App() {
  return (
    <div className="justify-items-center my-8 max-md:mx-2">
      <div className='max-w-3xl w-full'>
        <MastHead/>
        <hr className='h-1 max-md:mx-2 my-4 border-0 rounded bg-gray-700' />
        <About />
      </div>
    </div>
  );
}

export default App;
