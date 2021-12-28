import logo from './logo.svg';
import './App.css';
import Test1 from './Test1';
import Header from './Header/Header';
import Goods from './Goods';


const headerData = {
  site_name: 'Freelance WebSite',
  nav: [
    {"link": "nav1", "text": "mylink1"},
    {"link": "nav2", "text": "mylink2"},
    {"link": "nav3", "text": "mylink3"}
  ]
}

const goods = [
  {"title": "apple", "cost" : 300, "image":'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-256.png'},
  {"title": "pear", "cost" : 500, "image":'https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-256.png'},
]


function App() {
  return (
    <>
    <Header data = {headerData}></Header>
    <Test1></Test1>
    {goods.map(item => <Goods title = {item.title} cost={item.cost} image={item.image} />)}
    </>
  );
}

export default App;
