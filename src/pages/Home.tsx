import Snowfall from "react-snowfall";
import { HeroComponent } from "../components/Hero";
import { AboutSection } from "../components/About";
import { Header } from "../components/Header";
import { WhyKWoC } from "../components/WhyKWoC";

function Home() {
  return (
    <>
      <Snowfall // the image can be edited into anything we want, feel free to change
        snowflakeCount={150}
        speed={[0.5, 1]} // array takes [min, max]
        wind={[-0.5, 0.5]}
        radius={[0.5, 1.5]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />
      <Header />
      <HeroComponent />
      <AboutSection />
      <WhyKWoC />
    </>
  );
}

export default Home;
