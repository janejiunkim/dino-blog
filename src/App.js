import logo from './logo.svg';
import './App.css';
import Dino from './Dino';
import Reptile from './Reptile';

function App() {
  let dino = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
  }
  let reptile = {
    
  }
  return (
    <div className="Dino">
      <Dino
      title={dino.title}
      author={dino.author}
      body={dino.body}
      comments={dino.comments}
      />
    </div>
  );
}

export default App;
