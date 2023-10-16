//import { useForm } from "react-hook-form";


function Contact() {
    {/*
    const { register, handleSubmit } = useForm({
    });
    const onSubmit = (data) => {
    alert(JSON.stringify(data));
    }
    */}
        return (
            <div className="contact-bg" id="contact">
                <div className="contact-container">
                    <div className="contact-me">Contact</div>
                    <div className="contact-info">
                        <div>I am currently looking for an oppurtunity, please feel free to send a message if you think our work could be mutually beneficial!</div>
                    </div>
                    <div className="contact-links">
                           <a className="fa fa-github github-button" href="https://github.com/nexus0208" target="_blank" rel="noreferrer"></a>
                        <a className="fa fa-linkedin-square linkedin-button" href="https://www.linkedin.com/in/ctdc0208/" target="_blank" rel="noreferrer"></a>
                    </div>
                    {/*
                    <div className="contact-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                            <label htmlFor="Name"></label>
                            <input placeholder="Name" {...register("Name")} />
                            </div>

                            <div>
                            <label htmlFor="Email"></label>
                            <input placeholder="Email" type="email"{...register("Email")} />
                            </div>

                            <div>
                            <label htmlFor="Message"></label>
                            <textarea placeholder="Message" {...register("Message")} />
                            </div>


                            <button type="submit">
                                Send
                            </button>
                        </form>
                                        </div>
                            */}
                                    </div>
                                </div>
        )
    
}

export default Contact