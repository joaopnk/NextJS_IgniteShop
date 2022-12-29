import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          src={logoImg.src}
          alt="Logo IgniteShop"
          title="Logo IgniteShop"
          width={logoImg.width}
          height={logoImg.height}
        />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
