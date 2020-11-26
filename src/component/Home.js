import React, {Component} from 'react';
import * as Mui from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import ControlPointSharpIcon from '@material-ui/icons/ControlPointSharp';
import ModeCommentSharpIcon from '@material-ui/icons/ModeCommentSharp';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import MenuIcon from '@material-ui/icons/Menu';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/Add';

class Home extends Component{
 render() { 
    return (
      <div style={{ backgroundSize:"cover" , backgroundImage:"url(https://lh3.googleusercontent.com/proxy/1XRLcw2QHO-DHNjzquhPDtCRpgioXVlvL02INotIhm_f58ty2g5hwPRrvmw_BJ4vAS1ldDTVD4KCg3iUOvKoqqes4JPuDg5OpCXwrX-Qud3jn139hoYNwtiNglCnAMcuj2WMNKMy3GjQLFqh7lLAda7eIjR4bZAK_BkWWPPmFw)" }}>
     <div class="navbar-fixed">     
     <nav class="#000000 black">
     <div class="nav-wrapper ">
      <a href="#" class="brand-logo">JSON-FY</a>
      <ul class="right hide-on-med-and-down">
        <li><a href=""><i class="material-icons">search</i></a></li>
        <li><a href=""><i class="material-icons">view_module</i></a></li>
        <li><a href=""><i class="material-icons">refresh</i></a></li>
        <li><a href=""><i class="material-icons">more_vert</i></a></li>
      </ul>
     </div>
     </nav>
     </div>
     <Mui.Container fixed>

      <div align="center" >
      <Mui.Grid container spacing={2}>
       <Mui.Grid item xs={12}>
          <h2 style={{ textAlign:'center', color:'white' }}>Resources & Routes</h2> 
       </Mui.Grid>   
      <Mui.Grid item xs={4}>
          <Mui.Paper >
          <GroupIcon fontSize='large'/>
             <h4> <a href="/users" style={{ textDecoration:'none' }}>Users</a></h4>
           </Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={4}>
          <Mui.Paper >
          <ControlPointSharpIcon fontSize="large" />    
          <h4> <a href="/posts" style={{ textDecoration:'none' }}>Posts</a></h4>             
          </Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={4}>
          <Mui.Paper >
          < ModeCommentSharpIcon fontSize="large"/>
             <h4> <a href="/comments" style={{ textDecoration:'none' }}>Comments</a></h4>              
          </Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={4}>
          <Mui.Paper >
          <PermMediaIcon fontSize='large'/>
          <h4> <a href="/albums" style={{ textDecoration:'none' }}>Albums</a></h4>              
           </Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={4}>
          <Mui.Paper >
          <PhotoSizeSelectActualIcon fontSize="large" />    
          <h4> <a href="/photos" style={{ textDecoration:'none' }}>Photos</a></h4>                           
          </Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={4}>
          <Mui.Paper >
          <MenuIcon fontSize="large"/>
          <h4> <a href="/categories" style={{ textDecoration:'none' }}>Categories</a></h4>              
          </Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={6}>
          <Mui.Paper >
          <ShareIcon fontSize="large" />    
          <h4> <a href="/brands" style={{ textDecoration:'none' }}>Brands</a></h4>                           
          </Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={6}>
          <Mui.Paper >
          <AddIcon fontSize="large"/>
          <h4> <a href="/items" style={{ textDecoration:'none' }}>Items</a></h4>              
          </Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={3}>
        </Mui.Grid>
        <Mui.Grid item xs={6}>
          <Mui.Paper >
          <div class="video-container" >
             <iframe src="//www.youtube.com/embed/MUKOEbleojc" frameborder="0" allowfullscreen></iframe>
          </div>
          </Mui.Paper>
        </Mui.Grid>
        <Mui.Grid item xs={3}>
        </Mui.Grid>
     </Mui.Grid>     
      </div>             
     </Mui.Container><br/><br/><br/>
     <footer class="page-footer #424242 grey darken-3">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="/users">Users</a></li>
                  <li><a class="grey-text text-lighten-3" href="/posts">Posts</a></li>
                  <li><a class="grey-text text-lighten-3" href="/comments">Comments</a></li>
                  <li><a class="grey-text text-lighten-3" href="/albums">Albums</a></li>
                  <li><a class="grey-text text-lighten-3" href="/photos">Photos</a></li>
                  <li><a class="grey-text text-lighten-3" href="/categories">Categories</a></li>
                  <li><a class="grey-text text-lighten-3" href="/brands">Brands</a></li>
                  <li><a class="grey-text text-lighten-3" href="/items">Items</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="/">Back To Top</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;