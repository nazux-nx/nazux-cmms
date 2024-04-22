import Link from "next/link";
import { getServerSession } from "next-auth";
import authOptions from "./api/auth/authOptions";
import Radixtest from "./radixtest";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">users</Link>
      <Radixtest />
    </main>
  );
}
