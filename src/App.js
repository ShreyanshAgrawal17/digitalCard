// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="myprof.jpg" className="imgprof" alt="Profile"></img>
      <div className='middle'>
      <h3 className="name">Shreyansh Agrawal</h3>
      <h5 className="post">Data Science Student</h5>
      <h6 className='website'><a href="https://huggingface.co/spaces/Shreyansh17/TableTennis-shotprediction">shreyansh.project</a></h6>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><button className='email'><img src="email.png" className='email--img'></img>Email</button></a>
      <a href="https://www.linkedin.com/in/shreyansh-agrawal-991b98256/"><button className='linkedin'><img src="linkedin.png" className='linedin--img'></img>LinkedIn</button></a>
      <h2 className='About'>About</h2>
      <p className='About--cont'>I am an ML/DL enthusiast focused on building innovative projects while integrating new technologies thus providing a better solution to problems.
         I try to keep up with security, and am always looking for learning and implementing new things.</p>
      <h2 className='Interests'>Interests</h2>
      <p className='Interests--cont'>Playing and watching Cricket as well as spending time with friends.</p>
      <div className='bottom'>
        {/* <a href="#"><img src="twitter.png" className='social--handle' alt="X"/></a> */}
        <a href="https://www.kaggle.com/shreyanshagrawal17"><img src="kaggle.png" className='social--handle' alt="Kaggle"/></a>
        <a href="https://www.instagram.com/shreyanshagrawal17/"><img src="instagram.png" className='social--handle' alt="Instagram"/></a>
        <a href="https://github.com/ShreyanshAgrawal17"><img src="github.png" className='social--handle' alt="GitHub"/></a>
      </div>
      </div>
    </div>
  );
}

export default App;
