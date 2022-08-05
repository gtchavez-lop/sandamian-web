import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import WavesBg from '../components/WavesBG';

const Home = () => {
  return (
    <>
      {/* hero */}
      <WavesBg />

      <div className="hero min-h-screen">
        <div className=" w-full hero-content flex-col gap-5 lg:justify-between lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="w-[300px] rounded-lg shadow-2xl hidden lg:block"
          />
          <img
            src="https://placeimg.com/260/400/arch"
            className="absolute -z-10 opacity-25 w-full h-full object-cover lg:hidden"
          />
          <div className="max-w-md flex flex-col gap-3 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Reach to the community. <br /> One by one
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get to know with us</button>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <img
          src="https://placeimg.com/260/400/arch"
          className="w-full max-w-sm h-[300px] mt-7 lg:mt-0 lg:h-auto rounded-lg shadow-2xl object-cover"
        />
        <div className="text-center lg:text-right ">
          <h1 className="text-2xl md:text-3xl font-bold">
            A Sanctuary of hope
          </h1>
          <p className="max-w-md">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Magna
            mollit irure in pariatur in eu enim quis ullamco dolor nisi enim. Ex
            Lorem pariatur Lorem id.
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mt-10">
            It&apos;s not just a community
          </h1>
          <p className="max-w-md">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Magna
            mollit irure in pariatur in eu enim quis ullamco dolor nisi enim. Ex
            Lorem pariatur Lorem id.
          </p>
        </div>
      </div>

      {/* service */}
      <div className="pt-16 pb-64 flex flex-col gap-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          What we do
        </h1>
        {/* carousel */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
          <div className="card bg-purple-100 shadow-lg w-full max-w-sm">
            <figure>
              <img src="https://placeimg.com/400/225/arch" />
            </figure>
            <div className="card-body">
              <p className="card-title">Feed the malnourished</p>
              <p className="mt-5">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Magna
                mollit irure in pariatur in eu enim quis ullamco dolor nisi
                enim. Ex Lorem pariatur Lorem id.
              </p>
            </div>
          </div>
          <div className="card bg-purple-100 shadow-lg w-full max-w-sm">
            <figure>
              <img src="https://placeimg.com/400/225/arch" />
            </figure>
            <div className="card-body">
              <p className="card-title">Help the vulnerable</p>
              <p className="mt-5">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Magna
                mollit irure in pariatur in eu enim quis ullamco dolor nisi
                enim. Ex Lorem pariatur Lorem id.
              </p>
            </div>
          </div>
          <div className="card bg-purple-100 shadow-lg w-full max-w-sm">
            <figure>
              <img src="https://placeimg.com/400/225/arch" />
            </figure>
            <div className="card-body">
              <p className="card-title">Cleanse the sick</p>
              <p className="mt-5">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Magna
                mollit irure in pariatur in eu enim quis ullamco dolor nisi
                enim. Ex Lorem pariatur Lorem id.
              </p>
            </div>
          </div>
          <div className="card bg-purple-100 shadow-lg w-full max-w-sm">
            <figure>
              <img src="https://placeimg.com/400/225/arch" />
            </figure>
            <div className="card-body">
              <p className="card-title">Empower the youth</p>
              <p className="mt-5">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Magna
                mollit irure in pariatur in eu enim quis ullamco dolor nisi
                enim. Ex Lorem pariatur Lorem id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
