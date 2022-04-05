import Link from "next/link";
import style from "../styles/Layout.module.css";

export default function Layout(props) {
	return (
		<div className={style.Layout}>
			<div className={style.cabecalho}>
				<div>{props.titulo ?? "Nenhum título informado"}</div>
				<Link href="/">Voltar</Link>
			</div>
			<div className={style.conteudo}>{props.children}</div>
		</div>
	);
}
