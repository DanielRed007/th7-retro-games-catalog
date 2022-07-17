import React from 'react';
import './App.css';
import { GamesProvider } from "./context/GamesProvider";
import Layout from "./modules/layout/Layout";
import GamesList from "./modules/gamesList/GamesList";

function App() {
  return (
    <GamesProvider>
      <Layout>
        <GamesList />
      </Layout>
    </GamesProvider>
  );
}

export default App;
