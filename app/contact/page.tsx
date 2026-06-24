import type { Metadata } from 'next';
import { Ridge } from '../components/Art';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: 'Book a free 30-minute discovery call with Jason Burby, or reach out about workshops and advisory work.',
};

export default function Contact() {
  return (
    <>
      <header className="phero">
        <div className="wrap pwrap">
          <span className="eyebrow">Let&rsquo;s talk</span>
          <h1>Book a discovery call.</h1>
          <p>A free introductory conversation. Tell me where you&rsquo;re headed; I&rsquo;ll tell you honestly whether and how I can help. No pitch.</p>
        </div>
        <Ridge />
      </header>

      <section>
        <div className="wrap">
          <div className="grid2">
            <div className="card">
              <span className="tag">Individuals</span>
              <h4>Executive coaching</h4>
              <p>Book directly into my calendar for a discovery call.</p>
              <div style={{ marginTop: '18px' }}>
                <a className="btn btn-solid" href="https://www.burbyventures.com/booking">
                  Open the booking page
                </a>
              </div>
            </div>
            <div className="card">
              <span className="tag">Companies &amp; founders</span>
              <h4>Workshops &amp; advising</h4>
              <p>Tell me about your team or company and what you&rsquo;re trying to move.</p>
              <div style={{ marginTop: '18px' }}>
                <a className="btn btn-ghost" href="https://www.burbyventures.com/contact-us">
                  Send a note
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
