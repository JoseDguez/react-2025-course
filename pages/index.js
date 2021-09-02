import { Button, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <main>
        <Heading>Welcome to Fast Feedback!</Heading>
        {!auth?.user && (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}
        <Text>{auth?.user?.email}</Text>
        <Text>{auth?.user?.name}</Text>
        <Text>{auth?.user?.provider}</Text>
        {auth?.user && (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        )}
      </main>
    </div>
  );
}
