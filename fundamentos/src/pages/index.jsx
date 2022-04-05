import Navegador from "../components/Navegador";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div
			className={styles.container}
			style={{
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<Navegador destino="/estiloso" texto="estiloso" cor="crimson" />
			<Navegador destino="/exemplo" texto="Exemplo" cor="darkgreen" />
			<Navegador destino="/jsx" texto="JSX" />
			<Navegador
				destino="/cliente/sp-2/123"
				texto="Roteamento dinâmico"
			/>
			<Navegador destino="/estado" texto="Estado" />
			<Navegador destino="/estatico" texto="Conteúdo estático" />
		</div>
	);
}
