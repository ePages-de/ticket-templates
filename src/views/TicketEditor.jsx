import './TicketEditor.css';
import 'react-markdown-editor-lite/lib/index.css';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Editor from 'react-markdown-editor-lite';

import Footer from '../components/Footer';

function TicketEditor(props) {
  const mdEditor = React.useRef(null);
  const [value, setValue] = React.useState();
  
  React.useEffect(async () => {
    fetch(props.template)
      .then((response) => response.text())
      .then((textContent) => {
        setValue(textContent);
      });
  }, []);
  
  const handleEditorChange = ({ html, text }) => { // eslint-disable-line no-unused-vars
    const newValue = text.replace(/\d/g, "");
    setValue(newValue);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
          <h1>{props.type} ticket template</h1>
        </div>
      </nav>
      
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
    
            <div>
              <input className="form-control form-control-lg" type="text" placeholder={"Enter the title for the " + props.type + " ticket here..." } />
            </div>
    
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
      
      <div className="placeholder" />
      
      <div className="fixedFooter">
        <Footer />
      </div>
    </div>
  );
}

export default TicketEditor;
