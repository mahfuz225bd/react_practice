// import logo from './logo.svg';

import './App.css';

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// Font Awesome
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Jquery
import '../node_modules/jquery/dist/jquery.min'


import Profile from './components/Profile/Profile';


function App() {
  return (
    <div>
      <Profile name="Muhammad Sultan Al Mahfuz" title="Web Designer and Developer" skills={["HTML5", "CSS3", "Javascript", "Bootstrap", "JQuery", "React"]} />
    </div>
  );
}

export default App;
