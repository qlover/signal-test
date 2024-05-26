import { useSignal } from "./signals-1.3.8-react/signals-react";

export function Signal138React() {
  const signal138 = useSignal(138);
  console.log("Signal138React", signal138.value);

  return (
    <button
      onClick={() => {
        signal138.value++;
      }}
    >
      Signal138React ({signal138.value})
    </button>
  );}
