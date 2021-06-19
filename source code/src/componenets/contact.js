import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="contact container">
        <div className="contact_info">
          <div class="row group">
            <div class="col-sm-3">
              <div className="contact_info_item ">
                <i class="zmdi zmdi-phone"></i>
                <div className="contact_info_conent">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+9876565434</div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div className="contact_info_item ">
                <i class="zmdi zmdi-email"></i>
                <div className="contact_info_conent">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">
                    thapatechnical@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              {' '}
              <div className="contact_info_item ">
                <i class="zmdi zmdi-gps-dot"></i>
                <div className="contact_info_conent">
                  <div className="contact_info_title">Location</div>
                  <div className="contact_info_text">Pune, In</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container py-5">
                  <div className="contact_form_titile">Get In Touch</div>
                  <form id="contact_form">
                    <div className="contact_form_name ">
                      <input
                        type="text"
                        id="contact_form_name"
                        className="contact_form_name input field"
                        placeholder="Your name"
                        required="true"
                      />
                      <input
                        type="email"
                        id="contact_form_email"
                        className="contact_form_email input field"
                        placeholder="Your Email"
                        required="true"
                      />
                      <input
                        type="number"
                        id="contact_form_phone"
                        className="contact_form_phone input field"
                        placeholder="Your Phone Number"
                        required="true"
                      />
                    </div>
                    <div className="contact_form_text mt-5">
                      <textarea
                        className="text_field contact_form_message"
                        placeholder="Message"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <div className="contact_form_button">
                      <button
                        type="submit"
                        className="button contact_submit_button"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
