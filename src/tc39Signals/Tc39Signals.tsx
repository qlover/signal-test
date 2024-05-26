import { useSyncExternalStore } from "react";
import { Signal } from "signal-polyfill";

let listeners = [] as any[];
let count = 0;
function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

const countStore = {
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l: any) => l !== listener);
    };
  },
  getSnapshot() {
    return count;
  },
  inc() {
    count++;
    emitChange();
  },
};

export function Tc39Signals() {
  const count = useSyncExternalStore(
    countStore.subscribe,
    countStore.getSnapshot
  );

  return (
    <div>
      <button onClick={() => countStore.inc()}>
        Tc39Signals value: {count}
      </button>
    </div>
  );
}
