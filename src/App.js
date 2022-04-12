import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance/>
       </div>
      <Layout/>
    </div>
  );
}

export default App;
