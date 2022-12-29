import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react';

import camisa01 from '../assets/camisetas/camisa01.png';
import camisa02 from '../assets/camisetas/camisa02.png';
import camisa03 from '../assets/camisetas/camisa03.png';

import 'keen-slider/keen-slider.min.css';

export default function Home(){
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
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
      <Product className="keen-slider__slide">
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
      <Product className="keen-slider__slide">
        <Image 
          src={camisa03}
          width={520}
          height={480}
          alt="Camisa 03"
          title="Camisa 03"
        />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
            <Product className="keen-slider__slide">
        <Image 
          src={camisa03}
          width={520}
          height={480}
          alt="Camisa 03"
          title="Camisa 03"
        />
        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}