import SendIcon from "@mui/icons-material/Send";
import emailjs from '@emailjs/browser';


const ContactWithMe = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const massage = form.massage.value;
    const data = { name, email, subject, massage };
    console.log(data)


    emailjs.sendForm('service_hbo3f7b', 'template_93q1e2q', form.current, 'x1XcfnRc9eSAmYC7V')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="" id="contact-with-me">
      <div>
        <h2 className="divider mb-8 text-3xl font-bold">Contact With Me</h2>
      </div>
      <div className="mx-3 md:mx-auto md:w-1/2 lg:1/4 bg-gray-400 p-10 rounded">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input name="name" placeholder="Your name" className="input input-md w-full my-3" type={'text'}></input>
          <label htmlFor="email">Your email:</label>
          <input name="email" placeholder="Your email" className="input input-md w-full my-3" type={'email'}></input>
          <label htmlFor="name">Subject:</label>
          <input name="subject" placeholder="Subject" className="input input-md w-full my-3" type={'text'}></input>
          <label htmlFor="name">Massages:</label>
          <textarea name="massage" placeholder="Massages" className="textarea w-full my-3" type={'text'}></textarea>
          <button className="btn btn-accent btn-md w-32">Submit <SendIcon /></button>
        </form>
      </div>
    </div>
  );
}
export default ContactWithMe;
