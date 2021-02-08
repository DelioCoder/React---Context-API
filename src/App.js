import './App.css';

/** Components */
import Profile from './Components/Profile';
import UserList from './Components/UserList';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// CONTEXT

import UserState from './Context/User/UserState';

function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>    
    </UserState>
  );
}

export default App;
