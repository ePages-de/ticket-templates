import React from "react";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";

import './TicketEditor.css';
import "react-markdown-editor-lite/lib/index.css";
import Footer from '../components/Footer';



function TicketEditor() {
  const mdEditor = React.useRef(null);
  const [value, setValue] = React.useState("Hello");

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
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
          <h1>Story template</h1>
        </div>
      </nav>
      
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
    
            <div className="editor">
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

            
          </div>
        </div>
      </header>
      
      <div className="fixedFooter">
        <Footer />
      </div>
    </div>
  );
}

export default TicketEditor;
