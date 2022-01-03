import Image from 'next/image';
import { Layout } from '../components/layout';

export default function Home() {
  return (
    <Layout>
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
}
