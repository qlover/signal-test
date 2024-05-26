import { useMemo } from "react";
import { useSignal, signal } from "./signals-2.0.1/signals-react";
import { installAutoSignalTracking } from "./signals-2.0.1/signals-react/runtime";
installAutoSignalTracking();

export function Signals201() {
  const count = useSignal(0);
  const countMemo = useMemo(() => signal(0), []);

  return (
    <div>
      <button onClick={() => count.value++}>
        Signal201 count Value: {count.value}
      </button>
      <button onClick={() => countMemo.value++}>
        Signal201 countMemo Value: {countMemo.value}
      </button>
    </div>
  );
}
