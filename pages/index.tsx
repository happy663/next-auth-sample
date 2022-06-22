import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      {/* 変更 */}
      <button onClick={() => signIn('google')}>Sign in</button>
    </>
  );
};

export default Home;
