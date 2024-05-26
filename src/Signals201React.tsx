import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";

export function Signals201React() {
    const count = useSignal(0);
	const double = useComputed(() => count.value * 2);

	// useSignalEffect(() => {
	// 	console.log(`Value: ${count.value}, value x 2 = ${double.value}`);
	// });

	return (
		<button onClick={() => count.value++}>
			Signal201 React Value: {count.value}, value x 2 = {double.value}
		</button>
	);

}
