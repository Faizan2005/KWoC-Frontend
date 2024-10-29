import houses from '../assets/houses-left.png';
import hook from '../assets/igloo-scroll-hook-edit.png';
import sign from '../assets/sign-post.png';
import "../styles/Hero.css";

export const HeroComponent = () => {
  return (
    <div className='hero-container'>
      <div className="hero-text-container">
        <div className="hero-quote">
          "For the love of open source"
        </div>
        <div className="hero-title">
          <h1>Kharagpur <span className='yellow-text'>Winter<br />of Code</span> 2024</h1>
        </div>
        <div className="hero-button-container">
          <button className='button'> Student Dashboard </button>
          <button className='button'> Mentor Dashboard </button>
        </div>
      </div>
      <div className="hero-images">
        <div className="left-houses">
          <img className="house-image" src={houses} alt="houses" />
        </div>
        <div className="middle-igloo">
          <img className="igloo-image" src={hook} alt='igloo' />
        </div>
        <div className="right-sign-post">
          <img className="sign-image" src={sign} alt='sign-post' />
        </div>
      </div>
    </div>
  );
};
