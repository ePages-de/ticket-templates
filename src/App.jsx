import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import apiTicketTemplate from './templates/api.md'
import bugTicketTemplate from './templates/bug.md'
import storyTicketTemplate from './templates/story.md'
import taskTicketTemplate from './templates/task.md'
import Start from './views/Start';
import TicketEditor from './views/TicketEditor';


function App() {
  
  return (
    <main>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Start />}/>
          <Route path='/story' element={<TicketEditor type='Story' template={storyTicketTemplate} />}/>
          <Route path='/api' element={<TicketEditor type='API' template={apiTicketTemplate} />}/>
          <Route path='/bug' element={<TicketEditor type='Bug' template={bugTicketTemplate} />}/>
          <Route path='/task' element={<TicketEditor type='Task' template={taskTicketTemplate} />}/>
        </Routes>
      </HashRouter>
    </main>    
  );
}

export default App;
