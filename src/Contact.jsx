export default function Contact() {
    return (
        <div className="contact-grid-12" id="contact">
            <div className="contact-container ">
                <div className="contact-me font-700">Contact Me</div>
                <div className="contact-intro font-600">Don&apos;t be shy! Hit me up! 👇</div>
                <div className="home-contact-links">
                    <a className="linkedin-icon svg-icon" href="https://www.linkedin.com/in/ctdc0208" target="_blank" rel="noreferrer"></a>
                    <a className="github-icon svg-icon" href="https://github.com/ctdc0208" target="_blank" rel="noreferrer"></a>
                </div>
                <div className="contacts-info-container">
                    <div className="contacts-info-inner-container">
                        <div className="location-icon svg-icon"></div>
                        <div className="contacts-info-2nd-inner-container">
                            <div className="contact-text-1 font-700">Location</div>
                            <div className="contact-text-2 font-600">Manila, Philippines</div>
                        </div>
                    </div>
                    <div className="contacts-info-inner-container">
                        <div className="email-icon svg-icon"></div>
                        <div className="contacts-info-2nd-inner-container">
                            <div className="contact-text-1 font-700">Email</div>
                            <div className="contact-text-2 font-600">christiantulao.delacruz@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


//import { useForm } from "react-hook-form";


// function Contact() {
//     {/*
//     const { register, handleSubmit } = useForm({
//     });
//     const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//     }
//     */}
//         return (
//             <div className="contact-bg" id="contact">
//                 <div className="contact-container">
//                     <div className="contact-me">Contact</div>
//                     <div className="contact-info">
//                         <div>I am currently looking for an oppurtunity, please feel free to send a message if you think our work could be mutually beneficial!</div>
//                     </div>
//                     <div className="contact-links">
//                            <a className="fa fa-github github-button" href="https://github.com/nexus0208" target="_blank" rel="noreferrer"></a>
//                         <a className="fa fa-linkedin-square linkedin-button" href="https://www.linkedin.com/in/ctdc0208/" target="_blank" rel="noreferrer"></a>
//                     </div>
//                     {/*
//                     <div className="contact-form">
//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <div>
//                             <label htmlFor="Name"></label>
//                             <input placeholder="Name" {...register("Name")} />
//                             </div>

//                             <div>
//                             <label htmlFor="Email"></label>
//                             <input placeholder="Email" type="email"{...register("Email")} />
//                             </div>

//                             <div>
//                             <label htmlFor="Message"></label>
//                             <textarea placeholder="Message" {...register("Message")} />
//                             </div>


//                             <button type="submit">
//                                 Send
//                             </button>
//                         </form>
//                                         </div>
//                             */}
//                                     </div>
//                                 </div>
//         )
    
// }

// export default Contact