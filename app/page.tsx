import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>{/* <Link href="/board">1.Dashboard</Link> */}</li>
        <li>
          <Link href="/htmlcss">2.htmlcss</Link>
        </li>
        <li>
          <Link href="/scrollpoint">3.scrollpoint</Link>
        </li>
        <li>
          <Link href="/dynamicwidth">4.dynamicwidth</Link>
        </li>
      </ul>
      <br />
    </main>
  );
}
