import Nav from '../components/nav';
import Card from '../components/card';
import Header from '../components/header';
import { useAuth } from '../lib/auth';

export default function Account() {
  const auth = useAuth();
  return (
    <>
      <Header />
      <section className="container mx-auto px-4 mt-3">
        <button
          onClick={(e) => auth.signinWithGithub()}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in
        </button>
        <div>{auth?.user?.email}</div>
        {auth?.user && (
          <button
            onClick={(e) => auth.signout()}
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign out
          </button>
        )}
      </section>
      <Nav />
    </>
  );
}
