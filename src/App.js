import './App.css';

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/running.jpg'})`,
      opacity : 0.75,
    }}>
        <h1 className="lg-heading">
        Run Walk <span className="text-secondary">PRO</span>
      </h1>
      <h2 className="sm-heading">Interval Timer</h2>

      <div className="link-container">
        <a href="#">
          <div className="link-btn">Training Plan Generator</div>
        </a>
        <a href="">
          <div className="link-btn">Watch App</div>
        </a>
      </div>
    </div>
  );
}

export default App;
