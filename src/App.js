
import './App.css';

function App() {

  const title= "Welcome To The New Blog";
  const likes=5;
  const person={age:25,name:"Mehmet Sait Işık",job:"Frontend / Mobile Developer"}
  return (
    <div className="App">
      <div className="content">
       <h1>{title}</h1>
       <p>Liked {likes} times</p>
        <p>{person}</p>
      </div>
    </div>
  );
}

export default App;
