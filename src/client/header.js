import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div id="header">
        <div className="navbar navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </a>
              <Link to='/' className="brand" >title</Link>
              <div className="nav-collapse">
                <ul className="nav">
                  <li><Link to='/contests'>Contests</Link></li>
                  <li><Link to='/problems'>Problems</Link></li>
                  <li><Link to='/submissions'>Submissions</Link></li>
                  {
                    /* if admin */ <li><Link to='/settings'>Site Config</Link></li>
                  }
                </ul>
                <ul className="nav pull-right">
                  {/* if user */}
                    <li><p><Link to='/users/index/$userid'>$username</Link></p></li>
                    <li className="divider-vertical"></li>
                    <li><Link to='/users/setting'>Settings</Link></li>
                    <li><Link to='/users/logout'>Logout</Link></li>
                  {/* else */}
                    <li><Link to='/users/register'>Register</Link></li>
                    <li><Link to='/users/login'>Login</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
