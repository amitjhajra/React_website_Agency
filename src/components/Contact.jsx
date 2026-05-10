import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col mt-15 dark:text-white text-gray-700 items-center">
      <Title
        title=" Reach out to us "
        desc="Email us for any further query and to contact us . We are glad to help you . Thank you "
      />

      <div className="mb-10 w-[700px]">
        <form action="" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <p>Your Name</p>

            <div className="flex border border-gray-500 rounded-2xl px-4 py-2">
              <img src={assets.person_icon} alt="" />
              <input
                type="text"
                placeholder="Enter your name"
                className="outline-none text-sm w-full text-gray-700 px-4 py-2 dark:text-white"
              />
            </div>
          </div>

          <div>
            <p>Email</p>
            <div className="flex border border-gray-500 rounded-2xl px-4 py-2">
              <img src={assets.email_icon} alt="" />
              <input type="email" placeholder="Enter your email" className="outline-none text-sm w-full text-gray-700 px-4 py-2 dark:text-white" />
            </div>
          </div>

          <div className="col-span-2">
            <p>Message</p>
            <div className="flex border border-gray-500 rounded-2xl px-4 py-2">
              <textarea name="" id="" rows={10} className="outline-none text-sm w-full px-2 py-2 dark:text-white" placeholder="Enter your Message here"></textarea>

            </div>
            
          </div>





        </form>
      </div>
    </div>
  );
};

export default Contact;
