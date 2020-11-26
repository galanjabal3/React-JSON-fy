import './App.css';
import { BrowserRouter, Switch, Link } from'react-router-dom';
import Comment from'./component/Comment';
import Posts from'./component/Posts';
import Users from'./component/Users';
import Albums from'./component/Albums';
import Photos from'./component/Photos';
import Categories from'./component/Categories';
import Items from'./component/Items';
import Brands from'./component/Brands';
import Home from'./component/Home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path='/' exact component={Home}/>
      <Link path='/users' exact component={Users}/>
      <Link path='/comments' component={Comment}/>
      <Link path='/posts' component={Posts}/>
      <Link path='/albums' component={Albums}/>
      <Link path='/photos' component={Photos}/>
      <Link path='/categories' component={Categories}/>
      <Link path='/items' component={Items}/>
      <Link path='/brands' component={Brands}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
