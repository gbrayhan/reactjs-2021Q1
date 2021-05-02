// trabaja e interactua con el estado no usan jsx de preferencia
import {useState} from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const reset = () => setCounter(0);

  return [
    counter, increment, reset
  ]
}

export default useCounter;