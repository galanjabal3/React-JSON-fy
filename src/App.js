import './App.css';
import { BrowserRouter, Switch, Link } from'react-router-dom';
import Comment from'./component/Comment';
import Posts from'./component/Posts';
import Users from'./component/Users';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path='/' exact component={Users}/>
      <Link path='/comments' exact component={Comment}/>
      <Link path='/posts' exact component={Posts}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
