// Image
import waveImage from "../wave.png";
// Context
import { useGlobalContext } from "../context";

const MainContent = () => {
  const { mobileMode: showImage } = useGlobalContext()

  return (
    <main className='content-container'>
      <img src={waveImage} alt='Wave' />
      <section className='content-container__info'>
        <h1>Payments infrastrucutre for the internet</h1>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripes software and APIs to accept payments, send payouts, and manage
          their businesses online.
        </p>
        <button type='button'>START NOW</button>
      </section>
      {!showImage && (
        <img
          src='https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg'
          alt=''
        />
      )}
    </main>
  );
};

export default MainContent;
