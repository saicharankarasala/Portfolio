import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('hkNKS0EUbuFnA2a5j');

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 8000); // Increased duration to 8 seconds
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    // Log the form data to verify
    const formData = new FormData(form.current);
    console.log('Form data:', Object.fromEntries(formData));

    emailjs.sendForm(
      'service_tnrj47x',
      'template_2urqx2x',
      form.current,
      'hkNKS0EUbuFnA2a5j'
    )
      .then((result) => {
        console.log('SUCCESS!', result);
        setSubmitStatus({ 
          message: 'Message sent successfully! I will get back to you soon.',
          isError: false 
        });
        setShowConfetti(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitStatus({ 
          message: `Failed to send message: ${error.text}`,
          isError: true 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {showConfetti && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1000,
          pointerEvents: 'none'
        }}>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={300}
            recycle={true}
            colors={['#0077FF', '#1E90FF', '#00C2FF', '#10B981', '#34D399']}
            gravity={0.15}
            tweenDuration={8000}
            wind={0.01}
            opacity={0.9}
          />
        </div>
      )}
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span className="text-primary-light dark:text-primary-dark">Me</span></h2>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form bg-background-light/10 dark:bg-background-dark/10 border border-primary-light/20 dark:border-primary-dark/20">
          <div className="form-group">
            <div className="input-field">
              <input 
                type="text" 
                name="to_name" 
                defaultValue="Sai"
                hidden
              />
              <input 
                type="text" 
                name="from_name" 
                placeholder="Full Name" 
                required 
                className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark border border-primary-light/20 dark:border-primary-dark/20 focus:border-primary-light dark:focus:border-primary-dark"
              />
            </div>
            <div className="input-field">
              <input 
                type="email" 
                name="reply_to" 
                placeholder="Email Address" 
                required 
                className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark border border-primary-light/20 dark:border-primary-dark/20 focus:border-primary-light dark:focus:border-primary-dark"
              />
            </div>
          </div>
          <div className="input-field">
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required 
              className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark border border-primary-light/20 dark:border-primary-dark/20 focus:border-primary-light dark:focus:border-primary-dark"
            />
          </div>
          <div className="input-field">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required
              className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark border border-primary-light/20 dark:border-primary-dark/20 focus:border-primary-light dark:focus:border-primary-dark"
            ></textarea>
          </div>
          
          {submitStatus.message && (
            <div className={`submit-status ${submitStatus.isError ? 'text-red-500' : 'text-link-light dark:text-link-dark'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <button 
            type="submit" 
            className="submit-btn bg-primary-light dark:bg-primary-dark hover:bg-link-light dark:hover:bg-link-dark text-text-primary-light dark:text-text-primary-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message <i className='bx bx-send'></i>
              </>
            )}
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact; 