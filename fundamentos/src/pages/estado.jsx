import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
	const [numero, setNumero] = useState(0);

	function incrementar() {
		return setNumero(numero + 1);
	}

	return (
		<Layout titulo="Estado no JSX">
			<button onClick={incrementar}>Incrementar</button>
			<span>{numero}</span>
		</Layout>
	);
}
