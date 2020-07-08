import React/*, { useState }*/ from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import Header from './header'
import Dashboard from './Dashboard'

fetch('/api/').then(response => {
  console.log(response.json());
})

export const Index = () => {
  //const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Dashboard></Dashboard>
    </BrowserRouter>
  );
    /*<BrowserRouter>
      <div>Hello React!</div>
      <Header/>
      <Switch>
        <Route exact path='/'>Home</Route>
        <Route path='/about'>About</Route>
        <Route path='/dashboard'>DashBoard</Route>
        <Route>404 Not Found</Route>
      </Switch>
      <Link to='/'>Home</Link>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </BrowserRouter>*/
  };

ReactDOM.render(<Index />, document.getElementById('index'));
