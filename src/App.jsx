import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import TicketEditor from './views/TicketEditor';
import Start from './views/Start';

function App() {
  
  return (
    <main>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Start />}/>
          <Route path='/story' element={<TicketEditor />}/>
          <Route path='/api' element={<TicketEditor />}/>
          <Route path='/bug' element={<TicketEditor />}/>
          <Route path='/task' element={<TicketEditor />}/>
        </Routes>
      </HashRouter>
    </main>    
  );
}

export default App;
