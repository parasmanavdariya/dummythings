import Head from "next/head";

const DocumentHead = (props)=>{
return (
    <>
    <Head>
		<meta content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>{props.title}</title>
    </Head>
    </>
)
}
export default DocumentHead;