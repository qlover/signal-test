import { useMemo } from "react";
import { useSignal, signal } from "./signals-1.3.8/signals-react";

export function Signal138() {
  const signal138 = useSignal(138);
  const signal138Memo = useMemo(() => signal(138), []);

  return (
    <div>
      <button
        onClick={() => {
          signal138.value++;
        }}
      >
        signal138 ({signal138.value})
      </button>
      <button
        onClick={() => {
          signal138Memo.value++;
        }}
      >
        signal138Memo ({signal138Memo.value})
      </button>
    </div>
  );
}

