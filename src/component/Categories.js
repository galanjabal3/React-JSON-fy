import React, {Component} from 'react';
import * as Mui from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
 
class Categories extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonfy.com/categories';
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => this.setState({data: data}));
 }


  render() {
    const {data} = this.state;

    return (
      <div>
      <Mui.AppBar position="fixed">
        <Mui.Toolbar>
          <Mui.IconButton
            edge="start"            
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </Mui.IconButton>
          <Mui.IconButton
            edge="start"            
            color="inherit"
            aria-label="open drawer" 
            href="/"
            >
            <HomeIcon />
          </Mui.IconButton>
          <Mui.Typography variant="h6" noWrap>
          <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Mui.Button href="/users">Users</Mui.Button>
            <Mui.Button href="/posts">Posts</Mui.Button>
            <Mui.Button href="/comments">Comments</Mui.Button>
            <Mui.Button href="/albums">Albums</Mui.Button>
            <Mui.Button href="/photos">Photos</Mui.Button>
            <Mui.Button href="/categories">Categories</Mui.Button>
            <Mui.Button href="/brands">Brands</Mui.Button>
            <Mui.Button href="/items">Items</Mui.Button>
          </Mui.ButtonGroup>
          </Mui.Typography>
         
        </Mui.Toolbar>
      </Mui.AppBar><br/>
     <Mui.Container fixed>
     <h1 style={{ textAlign:'center', backgroundColor:'black', color:'white' }}>Data Categories</h1>
        <table border="1">
          <tr style={{ textAlign:'center', backgroundColor:'red' }}>
            <td>Id</td>
            <td>Name</td>
            <td>Parent</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id} style={{ textAlign:'center', color :'white', backgroundSize:"cover" ,backgroundImage:"url(https://lh3.googleusercontent.com/proxy/1XRLcw2QHO-DHNjzquhPDtCRpgioXVlvL02INotIhm_f58ty2g5hwPRrvmw_BJ4vAS1ldDTVD4KCg3iUOvKoqqes4JPuDg5OpCXwrX-Qud3jn139hoYNwtiNglCnAMcuj2WMNKMy3GjQLFqh7lLAda7eIjR4bZAK_BkWWPPmFw)" }}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.parent}</td>
            </tr>
            )}
        </table>
      </Mui.Container>
      </div>
    );
  }
}

export default Categories;