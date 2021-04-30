import React, { useEffect, useRef, useState } from "react";

const RenderApp = () => {
  const [text, setText] = useState("");

  const rendersRef = useRef(1);

  // si no le pasamos ni un parametro se ejecuta cada que ocurre una renderizacion
  useEffect(() => {
    rendersRef.current++;
  });

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
      <h1>Renders: {rendersRef.current}</h1>
    </div>
  );
};

export default RenderApp;
