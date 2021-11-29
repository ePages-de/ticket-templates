import React from "react";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";

import "./App.css"

function App() {
  const mdEditor = React.useRef(null);
  const [value, setValue] = React.useState("xxx");

  const handleClick = () => {
    if (mdEditor.current) {
      alert(mdEditor.current.getMdValue());
    }
  };
  
  const createStoryTicket = () => {
    setValue(`
### Context

### Scenario

**Given** 

**When**

**Then** 

### UX concept



### Acceptance criteria



### Implementation hints


      `);
  };
  
  const createApiTicket = () => {
    if (mdEditor.current) {
      alert(mdEditor.current.getMdValue());
    }
  };
  
  const createBugTicket = () => {
    if (mdEditor.current) {
      alert(mdEditor.current.getMdValue());
    }
  };

  return (
    <div className="App">
      <button onClick={createStoryTicket}>Story</button>
      <button onClick={createApiTicket}>API</button>
      <button onClick={createBugTicket}>Bug</button>
      
      <Editor
        ref={mdEditor}
        value={value}
        style={{
          height: "500px"
        }}
        renderHTML={text => <ReactMarkdown source={text} />}
      />
      <button onClick={handleClick}>Get value</button>
    </div>
  );
}

export default App;
