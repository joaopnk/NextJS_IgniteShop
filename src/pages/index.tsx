import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import camisa01 from '../assets/camisetas/camisa01.png';
import camisa02 from '../assets/camisetas/camisa02.png';
import camisa03 from '../assets/camisetas/camisa03.png';

export default function Home(){
  return (
    <HomeContainer>
      <Product>
        <Image 
          src={camisa01}
          width={520}
          height={480}
          alt="Camisa 01"
          title="Camisa 01"
        />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
      <Product>
        <Image 
          src={camisa02}
          width={520}
          height={480}
          alt="Camisa 02"
          title="Camisa 02"
        />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}