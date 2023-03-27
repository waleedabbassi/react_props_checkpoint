
import './App.css';
import Profile from './profile/Profile';
import Image from './profile/walid.jpg';

function App() {

  const handleName = (fullName) => {
    alert(`Profile user  ${fullName}`);
  };

  return (
    <div className="App">

    <Profile

        fullName="walid abbassi "
        bio="to be a fullstack  developer"
        profession="Software Engineer"
        handleName={handleName}
    
    >

    {Image}

    </Profile>
    </div>
  );
};

export default App;
