import Container from "../components/container";
import Layout from "../components/layout";

export default function Index() {
  return (
    <Layout preview={false}>
      <Container>
        <h1 className="text-6xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mt-12 text-center md:text-left">
          Website is under maintenance
        </h1>
      </Container>
    </Layout>
  );
}
