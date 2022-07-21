import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto/>
        <FullName/>
        <Address/>
      </header>
    </div>
  );
}

export default App;
