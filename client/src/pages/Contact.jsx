const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-14 font-light text-center text_para">
          Get a technical issue? Want to send feedback about a beta features?
          Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="name"
              placeholder="example@gmail.com"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Let us know how we can help you"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="form_label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Leave a comment..."
              className="form_input mt-1"
            ></textarea>
          </div>
          <button className="btn rounded-lg w-full sm:w-max">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
