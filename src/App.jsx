import Navbar from "./components/Navbar";
import heroImg from "./assets/images/hero-img.png";
import amazoneImg from "./assets/images/amazone.png";
import dribbbleImg from "./assets/images/dribbble.png";
import hubspotImg from "./assets/images/hubspot.png";
import netflixImg from "./assets/images/netflix.png";
import notionImg from "./assets/images/notion.png";
import zoomImg from "./assets/images/zoom.png";
import grid1Img from "./assets/images/tokyo-magnifier-web-search-with-elements 2.png";
import grid2Img from "./assets/images/tokyo-selecting-a-value-in-the-browser-window 1.png";
import grid3Img from "./assets/images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png";
import grid4Img from "./assets/images/tokyo-sending-messages-from-one-place-to-another 1.png";
import grid5Img from "./assets/images/tokyo-many-browser-windows-with-different-information 1.png";
import grid6Img from "./assets/images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png";
import getFree from "./assets/images/get-free.png";
import ceoImg from "./assets/images/ceo.png";
import directorOpsImg from "./assets/images/jane doe.png";
import seoAnaliticsImg from "./assets/images/michael brown.png";
import managerImg from "./assets/images/emili johnson.png";
import socialMediaSpecialisImg from "./assets/images/brian william.png";
import contentCreatorImg from "./assets/images/sarah kim.png";

export default function App() {


  const handleOpen = (e) => {

    const trigger = e.target;
    const parentDiv = trigger.closest('.flex.flex-row.justify-between.items-center.p-2');
    const targetDiv = parentDiv.nextElementSibling;

    console.log(e.target.parentElement.parentElement.parentElement.classList);
    
    
    if (e.target.classList.contains('fa-minus')) {
      e.target.classList.replace('fa-minus', 'fa-plus')
      e.target.parentElement.parentElement.parentElement.classList.replace('bg-c-green', 'bg-gray-300')
      targetDiv.classList.add('hidden')
    }else {
      e.target.classList.replace('fa-plus', 'fa-minus')
      e.target.parentElement.parentElement.parentElement.classList.replace('bg-gray-300', 'bg-c-green')
      targetDiv.classList.remove('hidden')
    }
    
  }

  return (
    <>
      <Navbar />

      <section className="my-16">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col gap-10 justify-center items-start">
              <h1 className="font-bold text-7xl">
                Navigating the digital landscape for success
              </h1>
              <p>
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <button className="text-center px-6 py-3 bg-black text-white rounded-lg">
                Book a consultation{" "}
              </button>
            </div>
            <img
              className="hover:scale-105 hover:shadow-xl"
              src={heroImg}
              alt="hero image"
            />
          </div>
        </div>
      </section>

      <section className="my-24">
        <div className="container mx-auto ">
          <div className="grid grid-cols-6 justify-items-center">
            <img
              className="grayscale hover:grayscale-0"
              src={amazoneImg}
              alt=""
            />
            <img
              className="grayscale hover:grayscale-0"
              src={dribbbleImg}
              alt=""
            />
            <img
              className="grayscale hover:grayscale-0"
              src={hubspotImg}
              alt=""
            />
            <img
              className="grayscale hover:grayscale-0"
              src={notionImg}
              alt=""
            />
            <img
              className="grayscale hover:grayscale-0"
              src={netflixImg}
              alt=""
            />
            <img className="grayscale hover:grayscale-0" src={zoomImg} alt="" />
          </div>
        </div>
      </section>

      <section className="my-24">
        <div className="container mx-auto">
          <div className="flex-flex-col w-full">
            <div className="flex flex-row items-center gap-7 ">
              <h1 className="bg-c-green px-3 py-1 font-bold text-3xl rounded-lg">
                Services
              </h1>
              <p className="text-lg w-[45%]">
                At our digital marketing agency, we offer a range of services to
                help businesses grow and succeed online. These services include:
              </p>
            </div>

            <div className="flex flex-col mt-12 gap-10">
              <div className="grid grid-cols-2 gap-12 justify-items-center">
                <div className="p-7 border border-black bg-gray-200 border-b-[5px] flex-row flex justify-between rounded-[3rem] ">
                  <div className="flex flex-col justify-between">
                    <h1 className="bg-c-green px-3 w-[70%] py-1 font-bold text-xl rounded-lg">
                      Service engine optimization{" "}
                    </h1>
                    <div className="relative flex flex-row gap-2 items-center">
                      <span className="bg-black py-1 px-2 text-c-green rounded-full">
                        <i className="fa-solid fa-arrow-right -rotate-45"></i>
                      </span>
                      <span className="text-lg">Learn more</span>
                    </div>
                  </div>
                  <img src={grid1Img} alt="" />
                </div>

                <div className="p-7 border bg-c-green border-black border-b-[5px] flex-row justify-between flex rounded-[3rem]">
                  <div className="flex flex-col justify-between">
                    <h1 className="bg-gray-200 px-3 w-[70%] py-1 font-bold text-xl rounded-lg">
                      Pay-per-click advertising{" "}
                    </h1>
                    <div className="relative flex flex-row gap-2 items-center">
                      <span className="bg-black py-1 px-2 text-c-green rounded-full">
                        <i className="fa-solid fa-arrow-right -rotate-45"></i>
                      </span>
                      <span className="text-lg">Learn more</span>
                    </div>
                  </div>
                  <img src={grid2Img} alt="" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 justify-items-center">
                <div className="p-7 border border-black bg-black border-b-[5px] flex-row flex justify-between rounded-[3rem] w-[95%] ">
                  <div className="flex flex-col justify-between">
                    <h1 className="bg-gray-200 px-3 w-[70%] py-1 font-bold text-xl rounded-lg">
                      Social Media Marketing
                    </h1>
                    <div className="relative flex flex-row gap-2 items-center">
                      <span className="bg-white py-1 px-2 text-black rounded-full">
                        <i className="fa-solid fa-arrow-right -rotate-45"></i>
                      </span>
                      <span className="text-lg text-white">Learn more</span>
                    </div>
                  </div>
                  <img src={grid3Img} alt="" />
                </div>

                <div className="p-7 border bg-gray-300 border-black border-b-[5px] flex-row justify-between flex rounded-[3rem] w-[85%]">
                  <div className="flex flex-col justify-between">
                    <h1 className="bg-c-green px-3  py-1 font-bold text-xl rounded-lg">
                      Email <br /> marketing{" "}
                    </h1>
                    <div className="relative flex flex-row gap-2 items-center">
                      <span className="bg-black py-1 px-2 text-c-green-400 rounded-full">
                        <i className="fa-solid fa-arrow-right -rotate-45"></i>
                      </span>
                      <span className="text-lg">Learn more</span>
                    </div>
                  </div>
                  <img src={grid4Img} alt="" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 justify-items-center">
                <div className="p-7 border bg-c-green border-black border-b-[5px] flex-row justify-between flex rounded-[3rem] w-[95%] ">
                  <div className="flex flex-col justify-between">
                    <h1 className="bg-gray-200 px-3 w-[70%] py-1 font-bold text-xl rounded-lg">
                      Content Creation
                    </h1>
                    <div className="relative flex flex-row gap-2 items-center">
                      <span className="bg-black py-1 px-2 text-c-green rounded-full">
                        <i className="fa-solid fa-arrow-right -rotate-45"></i>
                      </span>
                      <span className="text-lg">Learn more</span>
                    </div>
                  </div>
                  <img src={grid5Img} alt="" />
                </div>

                <div className="p-7 border border-black bg-black border-b-[5px] flex-row flex justify-between rounded-[3rem] ">
                  <div className="flex flex-col justify-between">
                    <h1 className="bg-c-green px-3 w-[80%] py-1 font-bold text-xl rounded-lg">
                      Analitics and tracking
                    </h1>
                    <div className="relative flex flex-row gap-2 items-center">
                      <span className="bg-white py-1 px-2 text-black rounded-full">
                        <i className="fa-solid fa-arrow-right -rotate-45"></i>
                      </span>
                      <span className="text-lg text-white">Learn more</span>
                    </div>
                  </div>
                  <img src={grid6Img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24 ">
        <div className="container mx-auto bg-gray-300 rounded-3xl p-16">
          <div className="flex flex-row justify-between">
            <div className="grid grid-cols-2 justify-items-center relative ">
              <div className="flex flex-col items-start gap-10">
                <h1 className="text-3xl font-bold">
                  Let&apos;s make things happen{" "}
                </h1>
                <p className="text-base">
                  {" "}
                  Contact us today to learn more about how our digital marketing
                  services can help your business grow and succeed online.{" "}
                </p>
                <button className="text-center px-6 py-3 bg-black text-white rounded-lg">
                  Get your free proposal
                </button>
              </div>
              <img
                src={getFree}
                alt=""
                className="absolute right-24 -top-20 "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-24">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-7 ">
              <h1 className="bg-c-green px-3 py-1 font-bold text-3xl rounded-lg">
                Cases Studies
              </h1>
              <p className="text-lg w-[55%] ">
                Explore Real-Life Examples of Our Proven Digital Marketing
                Success through Our Case Studies
              </p>
            </div>

            <div className=" mt-7">
              <div className="container px-8">
                <div className="grid grid-cols-3 justify-items-center text-white bg-black  rounded-[2rem] p-5">
                  <div className="flex flex-col justify-center gap-5 border-r p-10 ">
                    <p className="text-base">
                      For a local restaurant, we implemented a targeted PPC
                      campaign that resulted in a 50% increase in website
                      traffic and a 25% increase in sales.
                    </p>
                    <div className="relative flex flex-row items-center">
                      <span className="text-lg text-c-green">Learn more</span>
                      <span className="bg-black py-1 px-2 text-c-green rounded-full">
                        <i className="fa-solid fa-arrow-right -rotate-45 text-lg"></i>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 border-r p-10">
                    <p className="text-base">
                      For a B2B software company, we developed an SEO strategy
                      that resulted in a first page ranking for key keywords and
                      a 200% increase in organic traffic.
                    </p>
                    <div className="relative flex flex-row items-center">
                      <span className="text-lg text-c-green">Learn more</span>
                      <span className="bg-black py-1 px-2 text-c-green rounded-full">
                        <i className="fa-solid fa-arrow-right -rotate-45 text-lg"></i>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col p-10 gap-5">
                    <p className="text-base">
                      For a national retail chain, we created a social media
                      marketing campaign that increased followers by 25% and
                      generated a 20% increase in online sales.
                    </p>
                    <div className="relative flex flex-row items-center">
                      <span className="text-lg text-c-green">Learn more</span>
                      <span className="bg-black py-1 px-2 text-c-green rounded-full">
                        <i className="fa-solid fa-arrow-right -rotate-45 text-lg"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-7 ">
              <h1 className="bg-c-green px-3 py-1 font-bold text-3xl rounded-lg">
                Our Working progress
              </h1>
              <p className="text-lg w-[23%] ">
                Step-by-Step Guide to Achieving Your Business Goals
              </p>
            </div>

            <div className="mt-7">
              <div className="px-8 container">
                <div className="flex flex-col gap-7">
                  <div className="w-full bg-c-green flex flex-col p-5 rounded-[2rem] border-b-[5px] border-black ">
                    <div className="flex flex-row justify-between items-center p-2">
                      <h1 className="text-3xl text-center">
                        {" "}
                        <span className="font-bold text-5xl">01</span>{" "}
                        Consultation
                      </h1>
                      <span onClick={handleOpen} className="bg-gray-200 py-1 px-2 rounded-full border border-black">
                        <i className="fa-solid fa-minus"></i>
                      </span>
                    </div>
                    <div className="border-t mt-7 p-3 element" >
                      <p className="text-base mt-2">
                        During the initial consultation, we will discuss your
                        business goals and objectives, target audience, and
                        current marketing efforts. This will allow us to
                        understand your needs and tailor our services to best
                        fit your requirements.
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-300 flex flex-col p-5 rounded-[2rem] border-b-[5px] border-black ">
                    <div className="flex flex-row justify-between items-center p-2">
                      <h1 className="text-3xl">
                        {" "}
                        <span className="font-bold text-5xl">02</span> Reasearch
                        and Strategy Development{" "}
                      </h1>
                      <span onClick={handleOpen} className="bg-gray-200 py-1 px-2 rounded-full border border-black">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="border-t mt-7 p-3 hidden ">
                      <p className="text-base mt-2">
                        During the initial consultation, we will discuss your
                        business goals and objectives, target audience, and
                        current marketing efforts. This will allow us to
                        understand your needs and tailor our services to best
                        fit your requirements.
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-300  flex flex-col p-5 rounded-[2rem] border-b-[5px] border-black ">
                    <div className="flex flex-row justify-between items-center p-2 ">
                      <h1 className="text-3xl">
                        {" "}
                        <span className="font-bold text-5xl">03</span>{" "}
                        Implementation{" "}
                      </h1>
                      <span onClick={handleOpen} className="bg-gray-200 py-1 px-2 rounded-full border border-black">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="border-t mt-7 p-3 hidden ">
                      <p className="text-base mt-2">
                        During the initial consultation, we will discuss your
                        business goals and objectives, target audience, and
                        current marketing efforts. This will allow us to
                        understand your needs and tailor our services to best
                        fit your requirements.
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-300  flex flex-col p-5 rounded-[2rem] border-b-[5px] border-black ">
                    <div className="flex flex-row justify-between items-center p-2 ">
                      <h1 className="text-3xl">
                        {" "}
                        <span className="font-bold text-5xl">04</span>{" "}
                        Monitoring and Optimization{" "}
                      </h1>
                      <span onClick={handleOpen} className="bg-gray-200 py-1 px-2 rounded-full border border-black">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="border-t mt-7 p-3 hidden ">
                      <p className="text-base mt-2">
                        During the initial consultation, we will discuss your
                        business goals and objectives, target audience, and
                        current marketing efforts. This will allow us to
                        understand your needs and tailor our services to best
                        fit your requirements.
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-300  flex flex-col p-5 rounded-[2rem] border-b-[5px] border-black ">
                    <div className="flex flex-row justify-between items-center p-2 ">
                      <h1 className="text-3xl">
                        {" "}
                        <span className="font-bold text-5xl">05</span> Reporting
                        and Communication
                      </h1>
                      <span onClick={handleOpen} className="bg-gray-200 py-1 px-2 rounded-full border border-black">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="border-t mt-7 p-3 hidden ">
                      <p className="text-base mt-2">
                        During the initial consultation, we will discuss your
                        business goals and objectives, target audience, and
                        current marketing efforts. This will allow us to
                        understand your needs and tailor our services to best
                        fit your requirements.
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-300  flex flex-col p-5 rounded-[2rem] border-b-[5px] border-black ">
                    <div className="flex flex-row justify-between items-center p-2">
                      <h1 className="text-3xl">
                        {" "}
                        <span className="font-bold text-5xl">06</span> Continual
                        Improvement
                      </h1>
                      <span onClick={handleOpen} className="bg-gray-200 py-1 px-2 rounded-full border border-black ">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div className="border-t mt-7 p-3 hidden ">
                      <p className="text-base mt-2">
                        During the initial consultation, we will discuss your
                        business goals and objectives, target audience, and
                        current marketing efforts. This will allow us to
                        understand your needs and tailor our services to best
                        fit your requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-7 ">
              <h1 className="bg-c-green px-3 py-1 font-bold text-3xl rounded-lg">
                Our Working progress
              </h1>
              <p className="text-lg w-[23%] ">
                Step-by-Step Guide to Achieving Your Business Goals
              </p>
            </div>

            <div className="mt-7">
              <div className="grid grid-cols-3  gap-7 p-8 justify-items-center">
                <div className=" border rounded-[2rem] border-b-8 flex flex-col border-black p-8">
                  <div className="flex flex-row justify-between border-b border-black items-center p-2 pb-5">
                    <img src={ceoImg} alt="" />
                    <div className=" self-end">
                      <h1 className="font-bold ">John Smith</h1>
                      <p>CEO and Founder</p>
                    </div>
                    <span className="self-baseline px-2 py-1 rounded-full bg-black">
                      {" "}
                      <i className="fa-brands fa-linkedin-in text-xl text-c-green"></i>{" "}
                    </span>
                  </div>

                  <div>
                    <p className="p-2 mt-3 ">
                      10+ years of experience in digital marketing. Expertise in
                      SEO, PPC, and content strategy
                    </p>
                  </div>
                </div>

                <div className="border rounded-[2rem] border-b-8 flex flex-col border-black p-8">
                  <div className="flex flex-row justify-between border-b p-2 border-black items-center pb-5 mt-3">
                    <img src={directorOpsImg} alt="" />
                    <div className=" self-end">
                      <h1 className="font-bold ">Jane Doe </h1>
                      <p>Director of Operations</p>
                    </div>
                    <span className="self-baseline px-2 py-1 rounded-full bg-black">
                      {" "}
                      <i className="fa-brands fa-linkedin-in text-xl text-c-green"></i>{" "}
                    </span>
                  </div>

                  <div>
                    <p className="p-2 mt-3 ">
                      7+ years of experience in project management and team
                      leadership. Strong organizational and communication skills
                    </p>
                  </div>
                </div>

                <div className="border rounded-[2rem] border-b-8 flex flex-col border-black p-8">
                  <div className="flex flex-row justify-between border-b p-2 pb-5 border-black items-center  mt-3">
                    <img src={seoAnaliticsImg} alt="" />
                    <div className=" self-end">
                      <h1 className="font-bold ">Michael Brown </h1>
                      <p>Senior SEO Specialist</p>
                    </div>
                    <span className="self-baseline px-2 py-1 rounded-full bg-black">
                      {" "}
                      <i className="fa-brands fa-linkedin-in text-xl text-c-green"></i>{" "}
                    </span>
                  </div>

                  <div>
                    <p className="p-2 mt-3 ">
                      5+ years of experience in SEO and content creation.
                      Proficient in keyword research and on-page optimization
                    </p>
                  </div>
                </div>

                <div className="border rounded-[2rem] border-b-8 flex flex-col border-black p-8">
                  <div className="flex flex-row justify-between border-b border-black items-center p-2 pb-5">
                    <img src={managerImg} alt="" />
                    <div className=" self-end">
                      <h1 className="font-bold ">Emily Johnson</h1>
                      <p>PPC Manager</p>
                    </div>
                    <span className="self-baseline px-2 py-1 rounded-full bg-black">
                      {" "}
                      <i className="fa-brands fa-linkedin-in text-xl text-c-green"></i>{" "}
                    </span>
                  </div>

                  <div>
                    <p className="p-2 mt-3 ">
                      3+ years of experience in paid search advertising. Skilled
                      in campaign management and performance analysis
                    </p>
                  </div>
                </div>

                <div className="border rounded-[2rem] border-b-8 flex flex-col border-black p-8">
                  <div className="flex flex-row justify-between border-b border-black items-center p-2 pb-5">
                    <img src={socialMediaSpecialisImg} alt="" />
                    <div className=" self-end">
                      <h1 className="font-bold ">Brian Williams</h1>
                      <p>Social Media Specialist </p>
                    </div>
                    <span className="self-baseline px-2 py-1 rounded-full bg-black">
                      {" "}
                      <i className="fa-brands fa-linkedin-in text-xl text-c-green"></i>{" "}
                    </span>
                  </div>

                  <div>
                    <p className="p-2 mt-3 ">
                      4+ years of experience in social media marketing.
                      Proficient in creating and scheduling content, analyzing
                      metrics, and building engagement
                    </p>
                  </div>
                </div>

                <div className="border rounded-[2rem] border-b-8 flex flex-col border-black p-8">
                  <div className="flex flex-row justify-between border-b border-black items-center p-2 pb-5">
                    <img src={contentCreatorImg} alt="" />
                    <div className=" self-end">
                      <h1 className="font-bold ">Sarah Kim</h1>
                      <p>Content Creator</p>
                    </div>
                    <span className="self-baseline px-2 py-1 rounded-full bg-black">
                      {" "}
                      <i className="fa-brands fa-linkedin-in text-xl text-c-green"></i>{" "}
                    </span>
                  </div>

                  <div>
                    <p className="p-2 mt-3">
                      2+ years of experience in writing and editing Skilled in
                      creating compelling, SEO-optimized content for various
                      industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="self-end text-center px-10 py-2 bg-black text-white rounded-lg ">
              See all team
            </button>
          </div>
        </div>
      </section>

      <section className="my-24">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-7 ">
              <h1 className="bg-c-green px-3 py-1 font-bold text-3xl rounded-lg">
                Contact Us
              </h1>
              <p className="text-lg w-[27%]">
              Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
              </p>
            </div>

            <div className="mt-7">
              <div className="p-10" >
                <div className="flex flex-row gap-5 items-center bg-gray-200 p-5">
                  <div className="flex flex-col gap-7" >
                    <div className="flex flex-col gap-1" >
                      <label htmlFor="name">Name</label>
                      <input type="text" className=" border px-3 py-2 border-black rounded-xl" placeholder="Name" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
