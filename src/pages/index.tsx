import { Form } from "@components/Form";
import { CallToActionSection } from "@components/layout/components/CallToActionSection";
import { Container } from "@components/layout/components/Container";
import { NavigationBar } from "@components/layout/components/NavigationBar";
import { SignUpSection } from "@components/layout/components/SignUpSection";
import Head from "next/head";

export default function Home (): JSX.Element {
    return (
       <div>
        <CallToActionSection />
          <SignUpSection />
       </div>
    )
}