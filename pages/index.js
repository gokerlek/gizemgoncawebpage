import Image from "next/image";
import { Layout } from "../components/layout";
import { getHome } from "../api/home";

const Home = ({ page, menu, footer }) => {
  console.log(menu);
  return (
    <Layout footer={footer}>
      <div className="flex flex-col justify-center items-center ">
        <Image
          className="border-solid rounded-full border-ggz border-2 "
          src="/images/gizem.jpeg"
          alt="gizem"
          width={260}
          height={260}
        />
        <div className="text-ggz-100 text-6xl font-bold">Gizem Gonca</div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const props = await getHome();
  return { props };
};

export default Home;
