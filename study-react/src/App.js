import logo from './logo.svg';
import './App.css';
import Test1 from './Test1';
import Header from './Header/Header';


const headerData = {
  site_name: 'Freelance WebSite',
  nav: [
    {"link": "nav1", "text": "mylink1"},
    {"link": "nav2", "text": "mylink2"},
    {"link": "nav3", "text": "mylink3"}
  ]
}


function App() {
  return (
    <>
    <Header data = {headerData}></Header>
    <Test1></Test1>
    </>
  );
}

export default App;
