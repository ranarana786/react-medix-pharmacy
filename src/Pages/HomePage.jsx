import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";
import ImageSection from "../components/UI/ImageSection";
import ImageWithText from "../components/UI/ImageWithText";
import featureOne from "../assets/images/features-1.svg";
import featureTwo from "../assets/images/features-2.svg";
import ScrollToTopButton from "../components/UI/ScrollToTopButton";
import Modal from "../components/UI/Modal";
export default function HomePage() {
  {
    return (
      <>
        <main>
          <HeroSection />
          <Section sectionId="home">
            <SectionHeading
              title="Discover Our Dynamic Pharmacy Solutions"
              subtitle="Streamline your pharmacy operations with advanced tools for inventory, prescriptions, and stock management."
            />
            <ImageSection />
          </Section>
          <Section sectionId="about">
            <SectionHeading
              title="Addons"
              subtitle="Enhance your business capabilities with advanced features tailored to meet your needs."
            />
            <ImageWithText
              image={featureOne}
              title="Multistore"
              text="Manage multiple stores seamlessly under one centralized platform.Centralize inventory and sales across multiple locations.Efficiently manage orders and streamline operations.Improve customer experience with unified store management."
            ></ImageWithText>
            <ImageWithText
              image={featureTwo}
              title="Multistore"
              reverse={true}
              text="Manage multiple stores seamlessly under one centralized platform.Centralize inventory and sales across multiple locations.Efficiently manage orders and streamline operations.Improve customer experience with unified store management."
            ></ImageWithText>
          </Section>
          <ScrollToTopButton />
        </main>
      </>
    );
  }
}
