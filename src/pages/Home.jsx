import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import List from '../components/List';
const Home = () => {
  return (
    <div className="bg-main-color overflow-hidden">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
