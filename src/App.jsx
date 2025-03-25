// 1. передача даних в компонент
// 2. передача різних типів даних (string/number/boolean/object)
//    const isAvaliable = true;
//    const age = 23;

// 3. значення за замовчанням
// 4. children props (SectionTitle component)

// <SectionTitle id="section1">
//    <h2>Section Title 1</h2>
//    </SectionTitle>;

// 5. HOC
//    Spinner
//    const ContactWithSpinner = WithSpinner(Contact);

// 6. images
//     <Image />

// 7. conditional renndering
//    <ConditionalRendering />

import Contact from "./components/Contact";
import Spinner from "./components/Spinner/Spinner";
import "./App.css";
import Image from "./components/Image/Image";
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
import { useState } from "react";
import WithSpinner from "./hoc/WithSpinner";
import SectionTitle from "./components/SectionTitle";

const ContactWithSpinner = WithSpinner(Contact);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <>
      {/* <SectionTitle>передача даних в компонент</SectionTitle>
      <Contact
        name="Vitaliy"
        phone="+38 067 000 00 00"
        email="v.ivanov@gmail.com"
      />
      <Contact
        name="Anna"
        phone="+38 067 111 00 00"
        email="a.ivanova@gmail.com"
      />
      <SectionTitle>
        Рендеринг розмітки по умові з тернарним оператором
      </SectionTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <Contact
          name="Vitaliy"
          phone="+38 067 000 00 00"
          email="v.ivanov@gmail.com"
        />
      )}
      <SectionTitle>
        Заміняємо рендеринг спінера по умові на HOC WithSpinner
      </SectionTitle>
      <ContactWithSpinner
        isLoading={isLoading}
        name="Vitaliy"
        phone="+38 067 000 00 00"
        email="v.ivanov@gmail.com"
      />
      <SectionTitle>3 способи задати шлях до зображення</SectionTitle>
      <Image /> */}
      <SectionTitle>Приклади рендеру по умові</SectionTitle>
      <ConditionalRendering />
    </>
  );
}

export default App;
