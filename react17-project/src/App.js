// import logo from './logo.svg';
// import './App.css';
import React from 'react';
const Header = React.lazy(() => import('app1/Header'));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading CartService">
        <Header/>
      </React.Suspense>
      <div>project-app</div>
    </div>
  );
}

export default App;
