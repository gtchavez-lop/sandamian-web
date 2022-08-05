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
            src={'./community.jpg'}
            className="w-[440px] h-[400px] rounded-lg shadow-2xl hidden lg:block object-cover"
          />
          <img
            src={'./community.jpg'}
            className="absolute -z-10 opacity-25 w-full h-full object-cover lg:hidden"
          />
          <div className="max-w-md flex flex-col gap-3 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Reach to the community. <br /> One by one
            </h1>
            <p className="py-6">
              San Damian Center is a community outreach program established by
              the Congregation of Sacred Hearts of Jesus and Mary.
            </p>
            <button className="btn btn-primary">Get to know with us</button>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <img
          src={'./empower2.jpg'}
          className="w-[440px] h-[400px] mt-7 lg:mt-0 rounded-lg shadow-2xl object-cover"
        />
        <div className="text-center lg:text-right ">
          <h1 className="text-2xl md:text-3xl font-bold">
            A Sanctuary of hope
          </h1>
          <p className="max-w-md">
            San Damian Center is our beacon of hope for the people of the
            community. Through our programs, we hope to empower the people of
            the community to live in a safe and secure environment.
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mt-10">
            It&apos;s not just a community
          </h1>
          <p className="max-w-md">
            We are a group of people who are dedicated to help and support the
            poor, hungry, and the people in need.
          </p>
        </div>
      </div>

      {/* service */}
      <div className="pt-16 flex flex-col gap-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          What we do
        </h1>
        {/* cards */}
        <div className="w-full grid grid-cols-1 items-baseline justify-items-center md:grid-cols-2 gap-5 mt-10">
          <div className="card bg-purple-100 shadow-lg w-full max-w-sm">
            <figure>
              <img
                src={'./feed.jpg'}
                className="h-[400px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <p className="card-title">Feed the hungry</p>
              <p className="mt-5">
                We continue to serve our beneficiaries through our feeding
                programs prioritizing the people with special needs, severe
                malnourish children, pregnant women, and indigent families.
              </p>
            </div>
          </div>
          <div className="card bg-purple-100 shadow-lg w-full max-w-sm">
            <figure>
              <img
                src={'./help.jpg'}
                className="h-[400px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <p className="card-title">Help the vulnerable</p>
              <p className="mt-5">
                We continue to support our beneficiaries through Supplementary
                Relief Operation as we care for the most vulnerable and
                marginalized families of our community who are experiencing the
                impact of the pandemic economically.
              </p>
            </div>
          </div>
          <div className="card bg-purple-100 shadow-lg w-full max-w-sm">
            <figure>
              <img
                src={'./assist.jpg'}
                className="h-[400px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <p className="card-title">Assist who cannot endure</p>
              <p className="mt-5">
                We help people who endure physical pain and to those who have
                impaired vision by giving them therapy and better eyeglasses
              </p>
            </div>
          </div>
          <div className="card bg-purple-100 shadow-lg w-full max-w-sm">
            <figure>
              <img
                src={'./empower.jpg'}
                className="h-[400px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <p className="card-title">Empower the youth</p>
              <p className="mt-5">
                At San Damian Center, we believe that confidence grows as
                children develop leadership skills, understand social
                responsibility, and play an active role in their community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="pt-16 flex flex-col gap-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Where we are
        </h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928.9199412192147!2d121.03204110720316!3d14.778047259698827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ae2d4e1b4dfb%3A0xe5b93c4db9689abd!2sSan%20Damian%20Center!5e0!3m2!1sen!2sph!4v1659668350841!5m2!1sen!2sph"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="self-center w-full h-[300px] lg:h-[500px] max-w-2xl rounded shadow-lg"
        ></iframe>
      </div>

      <div className="pt-32 pb-56 flex flex-col gap-10">
        <p className="text-4xl text-center max-w-md self-center flex flex-col gap-3">
          <span>
            We are a community of people who are ready to help to those in need.
          </span>
          <span>Make a difference with us.</span>
        </p>

        {/* cta */}
        <button className="btn btn-secondary max-w-fit self-center px-10">
          <span className="text-xl font-bold">Make it happen now</span>
        </button>
      </div>
    </>
  );
};

export default Home;
