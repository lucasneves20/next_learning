import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

export default function NavegacaoDinamica(props) {
	const router = useRouter();

	return (
		<Layout>
			<div>codigo - {router.query.codigo}</div>
			<div>filial - {router.query.filial}</div>
		</Layout>
	);
}
