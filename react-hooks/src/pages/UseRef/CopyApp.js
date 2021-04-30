import React, { useRef, useState } from "react";

const CopyApp = () => {
  const [text, setText] = useState("hi");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      {copied && <p>copied</p>}
    </div>
  );
};

export default CopyApp;
