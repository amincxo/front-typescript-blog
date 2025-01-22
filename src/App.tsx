import React from 'react';
import BlogTableComponent from './components/BlogTables.tsx';
import BlogCardComponent from './components/BlogCard.tsx';
import NavBar from './components/Navbar.tsx';

function App() {
  return (
    <div className="App">
        <header className="App-header">
                <NavBar />
                <BlogTableComponent/>
                <BlogCardComponent/>
        </header>
    </div>
  );
}

export default App;
