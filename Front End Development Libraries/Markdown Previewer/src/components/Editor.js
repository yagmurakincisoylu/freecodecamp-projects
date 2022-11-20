import React from "react";

function Editor({text, setText}) {

  function handleChange(event) {
    const {value} = event.target
    setText({value})
  }

  return (
    <div>
      <div className="toolbar"><i class="fa-solid fa-pen-to-square"></i> Editor</div>
      <textarea 
        name="editor" 
        id="editor"
        value={text.value}
        onChange={handleChange}
        >
      </textarea>
    </div>
  );
}

export default Editor;



