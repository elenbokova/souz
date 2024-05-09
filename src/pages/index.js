import React, { useState, useCallback } from "react";
import Headroom from "react-headroom"

import { MobileMenuContextProvider } from "../contexts/mobile-menu-context"

import Page from "../components/page/page"
import Header from "../components/header/header"
import Hero from "../components/hero/hero"
import Section from "../components/section/section"
import About from "../components/about/about"
import Special from "../components/special/special"
import Features from "../components/features/features"
import Services from "../components/services/services"
import Steps from "../components/steps/steps"
import Contacts from "../components/contacts/contacts"
import Footer from "../components/footer/footer"
import ModalGeneral from "../components/modal/modal-general"
import StickyButton from "../components/sticky-button/sticky-button";

import "../style/global.scss"
import StickyButton2 from "../components/sticky-button/sticky-button2";


const contactsPhone = [
  "8-8452-68-02-68",
  "8-8452-68-14-68",
]

const contactsEmail = [
  "souzohrsaratov@bk.ru",
  "souzsaratov@bk.ru",
]

const navLinks = [
  {
    title: "Главная",
    id: "main",
  },
  {
    title: "О нас",
    id: "about",
  },
  {
    title: "Рассчитать стоимость",
    id: "special",
  },
  {
    title: "Услуги и цены",
    id: "services",
  },
  {
    title: "Оставить заявку",
    id: "message",
  },
  {
    title: "Контакты",
    id: "contacts",
  }
]

const features = [
  {
    title: "Поддержка со стороны ЧОО",
    description: "В случае кражи не придется разбираться самим, объект первыми осмотрят вооруженные сотрудники ЧОО",
  },
  {
    title: "Информирование о сохранности дома в Ваше отсутствие",
    description: "Вы получаете спокойствие за свое имущество",
  },
  {
    title: "Информирование о входе на охраняемую территорию",
    description: "При входе на охраняемую зону владелец получает смс-уведомление о сотрудниках: садовник зашел во двор, сотрудник – в офис",
  },
  {
    title: "Материальная ответственность",
    description: "ЧОО возмещают убытки, понесенные во время кражи частично или полностью"
  },
  {
    title: "Информирование и управление инженерными системами",
    description: "СМС оповещение об: утечке газа, воды, пожаре, наличии сети 220V. Возможность с помощью телефона включить/отключить: отопление, воду, свет, систему полива, и др."
  },
  {
    title: "Техническое обслуживание",
    description: "Ежемесячное обслуживание охранных систем"
  },
  {
    title: "Профилактика воровства",
    description: "Зная о сигнализации, найдется меньше желающих совершить кражу"
  },
]

const services = [
  {
    title: "Охрана квартиры",
    img: "1.jpg",
    description: [
      "Охранная сигнализация",
      "Тревожная сигнализация",
      "Комплексная защита",
      "Видеонаблюдение",
    ],
  },
  {
    title: "Охрана домов и коттеджей",
    img: "3.jpg",
    description: [
      "Охранная сигнализация",
      "Тревожная сигнализация",
      "Комплексная защита",
      "Видеонаблюдение",
    ],
  },
  {
    title: "Охрана бизнеса",
    img: "5.jpg",
    description: [
      "Охрана магазина",
      "Охрана офиса",
      "Охрана кафе",
      "Охрана склада",
    ],
  },
  {
    title: "Физическая охрана",
    img: "7.jpg",
    description: [
      "Защита охраняемых объектов от противоправных посягательств",
      "Обеспечение на охраняемых объектах пропускного и внутриобъектового режимов",
      "Предупреждение и пресечение преступлений и административных правонарушений на охраняемых объектах",
    ],
  },
  {
    title: "Охрана и сопровождение грузов",
    img: "9.jpg",
    description: [
      "Подключение системы охранной сигнализации",
      "Контроль перемещения подвижного состава по навигатору, через связь с диспетчером",
      "Наблюдение за трафиком, анализ ситуации на дорогах",
      "При необходимости назначается открытая или негласная группа сопровождения"
    ],
  },
  {
    title: "Техническое обслуживание систем",
    img: "11.jpg",
    description: [
      "Техническое обслуживание установленных систем безопасности",
      "Ремонт и восстановление работоспособности",
    ],
  },
]

const steps = [
  `Вы оставляете заявку на сайте или звоните по номеру ${contactsPhone[0]}`,
  "Бесплатный выезд для оценки объекта",
  "Составляем смету согласно вашим требованиям",
  "Заключаем договор",
  "Выполняем установку оборудования",
  "Осуществляем поддержку и обслуживание оборудования",
]

const MainPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const onModalToggle = (type, content) => {
    setIsModalOpen(isModalOpen => !isModalOpen);
    setModalType(type)
    setModalContent(content)
  }

  const onModalOpen = useCallback((type, content) => {
    setIsModalOpen(true);
    setModalType(type);
    setModalContent(content)
    setIsOverlayActive(true);
  }, []);

  const onModalClose = useCallback(() => {
    setIsModalOpen(false);
    setModalType("");
    setIsOverlayActive(false);
  }, []);

  const onTestClick = useCallback(() => {
    console.log('click')
  }, []);

  return (
    <>
      <MobileMenuContextProvider >
        <Page>
          {/* {isMenuOpen && <GrayLayout isOpen={isMenuOpen} onClick={toggleMenu} />} */}

          <Headroom disableInlineStyles>
            <Header navLinks={navLinks} />
          </Headroom>

          <main>

            <Hero>
              <button className="button button--sunbeam"
                onClick={() => onModalOpen("consult", "phoneForm")}>
                Проконсультироваться
              </button>
            </Hero>

            <Section id="about">
              <About />
            </Section>

            <Special theme="light" id="special">
              <button className="button button--sunbeam"
                onClick={() => onModalOpen("special", "phoneForm")}>
                Рассчитать стоимость
              </button>
            </Special>

            <Section id="features">
              <Features features={features} />
            </Section>

            <hr />

            <Section id="services">
              <Services services={services} />
            </Section>

            <hr />

            <Section id="steps">
              <Steps steps={steps} />
            </Section>

            <Section theme="light" id="contacts">
              <Contacts contactsPhone={contactsPhone} contactsEmail={contactsEmail} />
            </Section>

            <ModalGeneral
              isModalOpen={isModalOpen}
              type={modalType}
              content={modalContent}
              isOverlayActive={isOverlayActive}
              onClose={onModalClose}
            />

            <StickyButton
              isModalOpen={isModalOpen}
              onModalToggle={onModalToggle}
              type="question"
              content="phoneForm"
            />

          </main>

          <Footer />
        </Page>
      </MobileMenuContextProvider >

      <StickyButton2 onTestClick={onTestClick}/>


    </>
  )
}

export default MainPage

export const Head = () => (
  <>
    <title>Охрана бизнеса, коттеджа и квартиры "под ключ"</title>
    <meta name="description" content=" Семь лет на рынке охранных услуг г.Саратова и Саратовской области успешно работает группа охранных предприятий «СОЮЗ» «Патриот». Охрана объектов в г.Саратове осуществляется частным охранным предприятием «СОЮЗ», в г. Энгельсе — частным охранным предприятием «Патриот». Основную часть коллектива группы составляют бывшие сотрудники различных служб МВД, УИН, ВС, имеющие большой опыт работы по охране правопорядка, защите жизни и здоровья граждан." />
    <meta name="keywords" content="Охрана, система, установка, под, ключ, Саратов, и, область" />
    <meta property="og:url" content="http://project2721732.tilda.ws/page12607911.html"></meta>
    <meta property="og:title" content="Охрана бизнеса, коттеджа и квартиры &quot;под ключ&quot;"></meta>
    <meta property="og:description" content=" Семь лет на рынке охранных услуг г.Саратова и Саратовской области успешно работает группа охранных предприятий «СОЮЗ» «Патриот». Охрана объектов в г.Саратове осуществляется частным охранным предприятием «СОЮЗ», в г. Энгельсе — частным охранным предприятием «Патриот». Основную часть коллектива группы составляют бывшие сотрудники различных служб МВД, УИН, ВС, имеющие большой опыт работы по охране правопорядка, защите жизни и здоровья граждан."></meta>
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://static.tildacdn.com/tild6266-3236-4037-b563-346262323062/commercial-alarms.jpg"></meta>
    <link rel="canonical" href="http://project2721732.tilda.ws/page12607911.html"></link>
  </>
)
