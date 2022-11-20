import React from "react";
import {marked} from "marked";
import parse from 'html-react-parser'

function Previewer({text}) {
  const previewText = parse(marked.parse(text.value));

  return (
    <div>
      <div className="toolbar"><i class="fa-solid fa-magnifying-glass"></i> Previewer</div>
      <div id="preview">{previewText}</div>
    </div>
  );
}

export default Previewer;