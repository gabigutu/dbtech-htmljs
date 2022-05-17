// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Something from './components/Something';

function App() {
  const textHeader = "Header";
  const textFooter = "Footer";
  return (
    <div className="App">
      <header className="App-header">
        <Header text={textHeader}/>
        
        <Something></Something>

        <Footer text={textFooter}/>
        
      </header>
    </div>
  );
  // return ReactDOM.render
}

export default App;
