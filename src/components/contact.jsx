import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 0rem 0 0rem 0;
     .container {
      padding:6rem
      margin-top: 3rem;
      text-align: center;
      .contact-form {
          margin-top:9rem;
           background-color: #000000;
           
           padding:2rem;
           border-radius:1rem;

          max-width: 50rem;
          margin: auto;

          .contact-inputs {
            // background-color: yellow;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            opacity:50

            input[type="submit"] {
              background-color:silver;
              cursor: pointer;
              transition: all 0.2s;
             
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <Header />
      <section className="container d-flex text-items-center justify-center"> 

      <h2 className="common-heading  font-extrabold  text-center text-4xl">
        Feel Free to Contact us
      </h2>

      <div className="container pt-5">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xvoelzpo"
            method="POST"
            className="contact-inputs"
          >
            <input
              className="input"
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              className="input"
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              className="input"
              name="message"
              cols="60"
              rows="12"
              placeholder="Type Message "
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" className="input" />
          </form>
          
         

        </div>
        <br/>
        <br/>
        <br/>
        
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.730225309092!2d78.06185379678955!3d27.87955629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5002309cae1%3A0xf3d0d2445bc69f8c!2sJama%20Masjid%20Aligarh!5e0!3m2!1sen!2sin!4v1714396862394!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 1 }}
        allowFullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
      </section> 
      <Footer />
    </Wrapper>
  );
};

export default Contact;


































// import React, { useState } from "react";

// import Header from "./Header";
// import Footer from "./Footer";

// function contact() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form Data Submitted:", formData);
//   };

//   return (
//     <>
//       <Header />
//       <h2 className="common-heading font-extrabold text-center text-4xl">
//         Feel Free to Contact us
//       </h2>

//       <div className="container mt-10 pt-10 d-flex text-item-center justify-center">
//         <div className="contact-form">
//           <form onSubmit={handleSubmit} className="contact-inputs">
//             <input
//               className="w-half px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               type="text"
//               name="username"
//               placeholder="Username"
//               autoComplete="off"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />

//             <input
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
//               type="email"
//               name="email"
//               placeholder="Email"
//               autoComplete="off"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <textarea
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
//               name="message"
//               cols="60"
//               rows="12"
//               placeholder="Type Message"
//               autoComplete="off"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>

//             <input
//               type="submit"
//               value="Send"
//               className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4 cursor-pointer"
//             />
//           </form>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.730225309092!2d78.06185379678955!3d27.87955629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5002309cae1%3A0xf3d0d2445bc69f8c!2sJama%20Masjid%20Aligarh!5e0!3m2!1sen!2sin!4v1714396862394!5m2!1sen!2sin"
//             width="100%"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default contact;
