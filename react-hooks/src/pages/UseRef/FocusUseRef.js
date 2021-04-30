import React, {useRef, useState} from 'react'


const FocusUseRef = () => {
  const [text, setText] = useState("");

  const inputRef = useRef();

  const handleFocus = () => {
    const input = inputRef.current;
    input.focus();

  }
  return (
    <div>
      <input ref={inputRef} onChange={(e) => setText(e.target.value)} type="text" value={text}/>
      <button onClick={handleFocus}>Focus</button>
    </div>
  )

}

export default FocusUseRef;