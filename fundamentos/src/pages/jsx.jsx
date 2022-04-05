import Layout from "../components/Layout";

export default function Jsx() {
	const titulo = <h1>JSX è um conceito central</h1>;

	function subtitulo() {
		return <h2>{"muito legal".toUpperCase()}</h2>;
	}

	return (
		<Layout>
			{titulo}
			{subtitulo()}
			{JSON.stringify({ nome: "lucas", idade: 19 })}
		</Layout>
	);
}
