import Head from "next/head";
import { PropsWithChildren } from "react";
import { Container } from "./components/Container";
import { NavigationBar } from "./components/NavigationBar";

export function GeneralLayout ({children}: PropsWithChildren<any>): JSX.Element {
    return (
        <div>
        <Head>
          <title>Become a partner - Imagyne</title>
          <meta name="description" content='Earn money by becoming a partner'/>
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <main>
          <NavigationBar />
          <Container classname="flex flex-col pb-28">
              {children}
          </Container>
        </main>
      </div>
    )
}