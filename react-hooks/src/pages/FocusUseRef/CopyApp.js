import React, {useRef, useState} from "react"


const CopyApp = () => {
  const [text, setText] = useState("hi")
  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand('copy')
  }


  return (
    <div>
      <input ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={handleCopy}>Copy</button>
    </div>
  )
}

export default CopyApp