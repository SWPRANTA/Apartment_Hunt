import Cart from "./components/cart";
import Service from "./components/service";
import HeroSection from "./components/heroSection";
import Demo from "./components/demo";
import Footer2 from "./components/footer2";


export default function Home() {
  const cartItems = [
    {
      imagePath: '/images/image1.png',
      title: "Washington Avenue",
      price: '194',
      btnPath: '/'
    },
    {
      imagePath: '/images/image2.png',
      title: "Family Apartment Three",
      price: '356',
      btnPath: '/'
    },
    {
      imagePath: '/images/image3.png',
      title: "Gorgeous house",
      price: '256',
      btnPath: '/'
    },
    {
      imagePath: '/images/image4.png',
      title: "Luxury villa ",
      price: '345',
      btnPath: '/'
    },
    {
      imagePath: '/images/image5.png',
      title: "Epic Huda Palacio",
      price: '536',
      btnPath: '/'
    },
    {
      imagePath: '/images/image6.png',
      title: "Washington Avenue",
      price: '283',
      btnPath: '/'
    }
  ];

  const serviceItems = [
    {
      imagePath: '/images/service1.svg',
      title: 'Wide Range of Properties',
      subTitle: 'With a robust selection of popular properties on hand, as well as leading properties from experts.'
    },
    {
      imagePath: '/images/service2.svg',
      title: 'Financing Made Easy',
      subTitle: 'Our stress-free finance department that can find financial solutions to save you money.'
    },
    {
      imagePath: '/images/service3.svg',
      title: 'Trusted by Thousands',
      subTitle: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.'
    }
  ]
  return (
    <main className="bg-[#F1F6F4]">
      <HeroSection/>

      <section id="innerSection" className="container flex flex-col items-center mt-7">
        <div className="text-btn-color">House Rent</div>
        <div className="md:text-[34px] sm:text-2xl font-bold text-[#16322E] text-center md:w-[414px] md:h-[100px]">Discover the latest Rent available today</div>
      </section>

      <section id="cartSection" className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:place-items-center xsm:place-items-center gap-[30px] mt-12">
        {cartItems?.map((item, index) =>
          <Cart
            key={index}
            imagePath={item.imagePath}
            title={item.title}
            price={item.price}
            btnPath={item.btnPath} />
        )}
      </section>

      <div className="mt-[104px] container flex flex-col items-center">
        <div className="text-btn-color">Service</div>
        <div className="md:text-[34px] sm:text-2xl p-2 font-bold text-[#16322E] text-center md:w-[602px] md:h-[100px]">We're an agency tailored to all
          clients' needs that always delivers</div>
      </div>

      <section id="serviceSection" className="container mt-[70px] grid md:grid-cols-3 sm:grid-cols-1 sm:place-items-center xsm:place-items-center">
        {serviceItems?.map((item, index) =>
          <Service
            key={index}
            imagePath={item.imagePath}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      </section>

      <Footer2/>

    </main>
  )
}
