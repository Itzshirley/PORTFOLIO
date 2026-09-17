
import { useState, type FormEvent, type ChangeEvent } from 'react';
import Icon from '../components/Icon';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [messageLength, setMessageLength] = useState(0);

  const handleMessageChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessageLength(e.target.value.length);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setSent(false);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    /*
     * =====================================================
     * WEB3FORMS CONFIGURATION
     * =====================================================
     */

    formData.append(
      'access_key',
      '0948c50c-1341-4dce-845d-dbe8bdea81e7'
    );

    formData.append(
      'from_name',
      'Shirley Achungo Portfolio'
    );

    formData.append(
      'subject',
      `New Portfolio Inquiry — ${formData.get('subject')}`
    );

    formData.append(
      'replyto',
      String(formData.get('email') || '')
    );

    /*
     * =====================================================
     * SEND TO WEB3FORMS
     * =====================================================
     */

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setMessageLength(0);
        form.reset();

        /*
         * Automatically remove the success message
         * after a few seconds.
         */
        setTimeout(() => {
          setSent(false);
        }, 8000);
      } else {
        setError(
          'Your message could not be sent right now. Please try again.'
        );
      }
    } catch (err) {
      setError(
        'Unable to connect to the contact service. Please check your internet connection and try again.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page">

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <div className="container fade-up">

        <span className="eyebrow">
          Contact Me
        </span>

        <h1>
          Let's Work Together
        </h1>

        <p className="lead">
          Have a project idea, collaboration opportunity, or simply
          want to connect? Feel free to reach out.
        </p>

      </div>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <div className="container contact-grid fade-up">

        {/* =================================================
            CONTACT INFORMATION
        ================================================= */}

        <div className="contact-info">

          {/* EMAIL */}

          <div className="card contact-item">

            <span className="ci-icon">
              <Icon name="mail" />
            </span>

            <div>

              <span className="ci-label">
                Email
              </span>

              <a href="mailto:shirleyachungo@gmail.com">
                shirleyachungo@gmail.com
              </a>

            </div>

          </div>


          {/* GITHUB */}

          <div className="card contact-item">

            <span className="ci-icon">
              <Icon name="github" />
            </span>

            <div>

              <span className="ci-label">
                GitHub
              </span>

              <a
                href="https://github.com/itzshirley"
                target="_blank"
                rel="noreferrer"
              >
                github.com/itzshirley
              </a>

            </div>

          </div>


          {/* LINKEDIN */}

          <div className="card contact-item">

            <span className="ci-icon">
              <Icon name="linkedin" />
            </span>

            <div>

              <span className="ci-label">
                LinkedIn
              </span>

              <a
                href="https://linkedin.com/in/shirley-achungo-a61a28404"
                target="_blank"
                rel="noreferrer"
              >
                shirley-achungo
              </a>

            </div>

          </div>


          {/* PHONE */}

          <div className="card contact-item">

            <span className="ci-icon">
              <Icon name="phone" />
            </span>

            <div>

              <span className="ci-label">
                Phone
              </span>

              <a href="tel:+254740900393">
                +254 740 900 393
              </a>

            </div>

          </div>


          {/* =================================================
              AVAILABILITY CARD
          ================================================= */}

          <div className="card contact-item availability-card">

            <span className="ci-icon">
              <Icon name="mail" />
            </span>

            <div>

              <span className="ci-label">
                Available for opportunities
              </span>

              <p>
                I'm currently open to interesting projects,
                collaborations, internships, and professional
                opportunities.
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            CONTACT FORM
        ================================================= */}

        <form
          className="card contact-form"
          onSubmit={handleSubmit}
        >

          {/* =================================================
              WEB3FORMS CONFIGURATION
          ================================================= */}

          <input
            type="hidden"
            name="from_name"
            value="Shirley Achungo Portfolio"
            readOnly
          />


          {/* =================================================
              HONEYPOT SPAM PROTECTION
          ================================================= */}

          <input
            type="checkbox"
            name="botcheck"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />


          {/* =================================================
              FORM HEADING
          ================================================= */}

          <div className="form-heading">

            <span className="eyebrow">
              Send a Message
            </span>

            <h2>
              Tell me about your idea
            </h2>

            <p>
              I'll review your message and get back to you
              as soon as possible.
            </p>

          </div>


          {/* =================================================
              NAME + EMAIL
          ================================================= */}

          <div className="form-row">

            <label>

              Full Name

              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                minLength={2}
                maxLength={100}
              />

            </label>


            <label>

              Email

              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
              />

            </label>

          </div>


          {/* =================================================
              PHONE + SUBJECT
          ================================================= */}

          <div className="form-row">

            <label>

              Phone Number

              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+254 700 000 000"
                maxLength={30}
              />

            </label>


            <label>

              Subject

              <input
                required
                name="subject"
                type="text"
                placeholder="Project / Collaboration / Inquiry"
                minLength={3}
                maxLength={120}
              />

            </label>

          </div>


          {/* =================================================
              MESSAGE
          ================================================= */}

          <label>

            Message

            <textarea
              required
              name="message"
              rows={7}
              minLength={10}
              maxLength={2000}
              placeholder="Tell me about your project, idea, question, or opportunity..."
              onChange={handleMessageChange}
            />

            <small
              style={{
                display: 'block',
                textAlign: 'right',
                marginTop: '6px',
                opacity: 0.65,
              }}
            >
              {messageLength}/2000
            </small>

          </label>


          {/* =================================================
              PRIVACY NOTE
          ================================================= */}

          <p
            style={{
              fontSize: '0.85rem',
              opacity: 0.7,
              marginTop: '4px',
            }}
          >
            Your information will only be used to respond to
            your message.
          </p>


          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}

          {sent && (

            <div className="form-success">

              <strong>
                ✓ Message sent successfully!
              </strong>

              <br />

              Thanks for reaching out. I'll get back to you
              as soon as possible.

            </div>

          )}


          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {error && (

            <div className="form-error">

              <strong>
                Something went wrong.
              </strong>

              <br />

              {error}

            </div>

          )}


          {/* =================================================
              SUBMIT BUTTON
          ================================================= */}

          <button
            type="submit"
            className="button primary form-submit"
            disabled={sending}
          >

            {sending ? (
              <>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Icon
                  name="arrow"
                  size={16}
                />
              </>
            )}

          </button>


          {/* =================================================
              FORM FOOTER
          ================================================= */}

          <p
            style={{
              textAlign: 'center',
              fontSize: '0.8rem',
              opacity: 0.55,
              marginTop: '12px',
              marginBottom: 0,
            }}
          >
            Usually responds within 24–48 hours.
          </p>

        </form>

      </div>

    </div>
  );
}

