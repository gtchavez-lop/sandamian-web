import '../styles/globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-full max-w-5xl px-5 lg:px-0">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RootApp;
