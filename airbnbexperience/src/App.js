import './App.css';
import Nav from "./Nav.js";
import Card from "./card";

function App() {
  return (
    <div>
      <Nav />
      <Card 
        img = "./public/images/image 12.png"
        rating = "5.0"
        reviewCount = "(6)"
        country = ".USA"
        title = "Life lessons with Katie Zaferes "
        price = "$136"/>

      <Card 
        img = "./public/images/image 12.png"
        rating = "5.0"
        reviewCount = "(6)"
        country = ".USA"
        title = "Life lessons with Katie Zaferes "
        price = "$136"/>

      <Card 
        img = "./public/images/image 12.png"
        rating = "5.0"
        reviewCount = "(6)"
        country = ".USA"
        title = "Life lessons with Katie Zaferes "
        price = "$136"/>
      {/* <nav className = "App">
        <img src = {logo} className = "App-logo" alt = "logo" />
      </nav> */}
      <div className = "root">
        {/* <header>
          <h1>Online Experience</h1>
        </header> */}

        

        {/* <div className = "card-container">
          <div className = "card">
            <img src = {image} className = "card--image" alt = "image1"/>
              <div className = "card--stats">
                <img src = {star} className = "star--image" alt = "star"/>
                <span>5.0(6)</span> 
                <span style = {{color: 'gray', marginLeft: '0.3rem'}}>•USA</span>
              </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span style={{fontWeight: 'bold'}}>From $136</span>/person</p>
          </div>
        </div> */}
    
      </div>

    </div>
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
    
  );
}

export default App;
