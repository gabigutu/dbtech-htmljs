// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const text = "Header";
  return (
    <div className="App">
      <header className="App-header">
        <Header text={text}/>
        

        <Footer/>
        
      </header>
    </div>
  );
}

export default App;
