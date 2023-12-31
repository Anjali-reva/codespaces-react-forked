import './App.css';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header/Header';
  import LeftSideBar from './components/sidebaar/LeftSideBar';

function App() {
  return (
    <div className='relative '>
    <LeftSideBar/>  
    <Header/>  
    <CreateNotes/>  
    </div>
  );
}

export default App;
