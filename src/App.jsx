import React from 'react';
import AlertBox from './components/AlertBox';
import './App.css';

export default function App() {
  return (
    <main className="app-container">
      <h2>Experiment 05 - Alert Box</h2>

      <AlertBox
        message="Operation completed successfully!"
        color="green"
      />

      <AlertBox
        message="An error occurred while saving data."
        color="red"
      />
    </main>
  );
}
