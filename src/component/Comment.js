import React, {Component} from 'react';
import * as Mui from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class Comment extends Component{
  constructor(props){
   super(props);

  this.state ={
   data: [],
  };
}

 componentDidMount(){
   const apiUrl = 'https://jsonfy.com/comments';
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
          <Mui.Typography variant="h6" noWrap>
          <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Mui.Button href="/">Users</Mui.Button>
            <Mui.Button href="/posts">Posts</Mui.Button>
            <Mui.Button href="/comments">Comments</Mui.Button>
          </Mui.ButtonGroup>
          </Mui.Typography>
         
        </Mui.Toolbar>
      </Mui.AppBar><br/><br/>
     <Mui.Container fixed>
     <h1 style={{ textAlign:'center', backgroundColor:'black', color:'white' }}>Data Comment</h1>
        <table border="1">
          <tr style={{ textAlign:'center', backgroundColor:'red' }}>
            <td>Id</td>
            <td>Use_Com_Fk</td>
            <td>Pos_Com_Fk</td>
            <td>Comment</td>
            <td>Date_Add</td>
            <td>Date_Upd</td>
          </tr>
          {data.map(todo =>
            <tr key={todo.id} style={{ textAlign:'center'  }}>
              <td>{todo.id}</td>
              <td>{todo.use_com_fk}</td>
              <td>{todo.pos_com_fk}</td>
              <td>{todo.comment}</td>
              <td>{todo.date_add}</td>
              <td>{todo.date_upd}</td>
            </tr>
            )}
        </table>
      </Mui.Container>
      </div>
    );
  }
}

export default Comment;