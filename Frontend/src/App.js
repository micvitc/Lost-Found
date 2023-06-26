import './App.css';
import LostAndFound from './components/update_footer';
import LostForm from './components/lostform_footer'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/lostform" element={<LostForm />} />
        <Route path="/update" element={<LostAndFound />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
