import React from "react";
import linkedin from "../assets/contact/linkedin.png";
import github from "../assets/contact/github.png";
import twitter from "../assets/contact/twitter.png";

function Contact() {
  return (
    <section
      id="contact"
      className="text-center dark:bg-[#03001C] bg-light duration-700 pt-24"
    >
      <h2 className="mx-auto text-6xl dark:text-white text-black font-bold">
        Contact
        <hr className="w-24 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
      </h2>
      {/* <div className="flex justify-center">
        <div className="circle md:w-[450px] md:h-[450px] w-[200px] h-[250px]"></div>
      </div> */}
      <div className="flex flex-col-reverse space-y-10 items-center justify-center mx-10 md:flex-row md:space-x-24 md:space-y-0 md:p-4">
        <div data-aos="fade-up-right" className="py-6 text-center md:w-1/3">
          <img 
            src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-4550329-3779137.png" 
            alt="Contact illustration" 
            width="360"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div
          data-aos="flip-right"
          className="rounded-2xl md:w-1/3 dark:text-light text-dark shadow-[#d9bcb3] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f1f556] p-4 md:m-3 m-1 shadow-2xl"
        >
          <h2 className="my-4">Looking to collaborate on innovative projects?</h2>
          <h2>I'd love to hear from you!</h2>
          <h2>
            Whether it's about cybersecurity, web development, or any exciting tech project.
          </h2>
          <h2 className="mb-4">Feel free to reach out and let's create something amazing together.</h2>
          <a href="mailto:prixaashok2003@gmail.com">
            <button class="dark:bg-name bg-dark text-light transition-all duration-300 font-bold rounded-md py-2 px-4 my-4">
              EMAIL ME
            </button>
          </a>
        </div>
      </div>
      <h4 className="text-center pt-12 md:inline text-md md:border-l-8 border-dark dark:border-light md:px-4 md:py-2 p-12 font-bold dark:text-light text-dark">
        Feel free to reach out to me through email or connect with me on social media
      </h4>
      <div className="flex py-12 flex-row justify-center gap-8">
        <a href="https://www.linkedin.com/in/priyadharshini-ashok/" target="_blank">
          <img src={linkedin} alt="Linkedin" width="80" />
        </a>
        <a href="https://github.com/priyadh1712" target="_blank">
          <img src={github} alt="Github" width="80" />
        </a>

        {/* <img src={twitter} alt="Twitter" width="80" /> */}
      </div>
    </section>
  );
}

export default Contact;
