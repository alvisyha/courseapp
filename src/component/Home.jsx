import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <>
      <div className=" mx-auto md:mt-28 mt-20 max-w-screen-xl" id="home">
        <Banner
          banner={banner}
          heading="Improve your skills in the world of technology and information on
              the course"
          subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto eligendi voluptatibus sit porro cum laudantium tempora blanditiis assumenda, alias velit possimus unde ea excepturi nostrum iste nobis qui suscipit aut doloremque! Debitis quam asperiores nesciunt! Iusto repellat vero sed!"
          btn1="Get Started"
          btn2="Details"
        />
      </div>
    </>
  );
};

export default Home;
