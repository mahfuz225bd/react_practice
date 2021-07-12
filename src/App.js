import "./App.css";

import Profile from "./components/Profile/Profile";

const skills = ["HTML5", "CSS3", "Javascript", "Bootstrap", "JQuery", "React"]

const socialLinks = [
  {
    icon: 'fab fa-facebook-f',
    url: '',
    label: 'Facebook'
  },
  {
    icon: 'fab fa-twitter',
    url: '',
    label: 'Twitter'
  },
  {
    icon: 'fab fa-linkedin',
    url: '',
    label: 'LinkedIn'
  },
  {
    icon: 'fab fa-github',
    url: '',
    label: 'GitHub'
  }
]

function App() {
  return (
    <div>
      <Profile
        name="Muhammad Sultan Al Mahfuz"
        title="Web Designer and Developer"
        skills={skills}
        socialLinks={socialLinks}        
      />
    </div>
  );
}

export default App;
