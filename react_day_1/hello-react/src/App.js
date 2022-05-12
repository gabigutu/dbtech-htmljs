// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const textHeader = "Header";
  const textFooter = "Footer";
  return (
    <div className="App">
      <header className="App-header">
        <Header text={textHeader}/>
        

        <Footer text={textFooter}/>
        
      </header>
    </div>
  );
}

export default App;
