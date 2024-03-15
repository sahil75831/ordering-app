import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders mainHeader={"Our Story"} subHeader={"About Us"} />
        <p className=" font-kalamRegular max-w-4xl mt-4 mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <p className=" font-kalamRegular max-w-4xl mt-4 mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>

      <section className="text-center my-8">
        <SectionHeaders mainHeader={"Contact us"} subHeader={"☎️"} />
        <div>
          <a className="text-4xl  text-gray-500" href="tel:+46738123">
            +46 738 123
          </a>
        </div>
      </section>
    </>
  );
}
