import Link from "next/link";
import style from "../styles/Navegador.module.css";

export default function Navegador(props) {
	return (
		<div>
			<Link href={props.destino}>
				<a
					className={style.navegador}
					style={{
						backgroundColor: props.cor ?? "deepskyblue",
					}}
				>
					{props.texto}
				</a>
			</Link>
		</div>
	);
}
