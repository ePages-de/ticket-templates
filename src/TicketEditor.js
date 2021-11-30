import React from "react";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";

import "./App.css"

function TicketEditor() {
  const mdEditor = React.useRef(null);
  const [value, setValue] = React.useState();

  const handleClick = () => {
    if (mdEditor.current) {
      alert(mdEditor.current.getMdValue());
    }
  };
  
  const createStoryTicket = () => {
    setValue(`### Context



### Scenario

**Given** 

**When**

**Then** 

### UX concept

![Your screenshot here]()

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
  
  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, "");
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="App">
      
      <button onClick={handleClick}>Copy to clipboard</button>
      <Editor
        ref={mdEditor}
        value={value}
        style={{
          height: "500px"
        }}
        view={{html: false}}
        onChange={handleEditorChange}
        renderHTML={text => <ReactMarkdown source={text} />}
      />
      
    </div>
  );
}

export default TicketEditor;
