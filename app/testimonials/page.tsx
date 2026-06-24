import Link from 'next/link';
import type { Metadata } from 'next';
import { Ridge } from '../components/Art';

export const metadata: Metadata = {
  title: 'Results',
  description: 'What leaders say about working with Jason Burby — executive coaching, agency advisory, and team workshops.',
};

export default function Testimonials() {
  return (
    <>
      <header className="phero">
        <div className="wrap pwrap">
          <span className="eyebrow">Results</span>
          <h1>The work, in their words.</h1>
          <p>Real reflections from leaders I&rsquo;ve worked with. Add titles, companies, and outcomes wherever clients consent &mdash; specificity is what makes proof persuasive.</p>
        </div>
        <Ridge />
      </header>

      <section>
        <div className="wrap">
          <div className="quotes">
            <div className="quote">
              <p>&ldquo;I can truly say our work has changed my ability to shine as a leader.&rdquo;</p>
              <div className="by">
                Kristina <small>· add title + company</small>
              </div>
            </div>
            <div className="quote">
              <p>&ldquo;Through Jason&rsquo;s guidance I&rsquo;ve become a more effective leader, more true to self, and live each day more energized, grounded and complete.&rdquo;</p>
              <div className="by">
                Thomas <small>· add title + company</small>
              </div>
            </div>
            <div className="quote">
              <p>&ldquo;Jason has helped me overcome the roadblocks between me and my next levels of growth and success. He asks questions that draw out the answers inside of me &mdash; answers I often have a hard time articulating on my own.&rdquo;</p>
              <div className="by">
                Chelsea <small>· add title + company</small>
              </div>
            </div>
            <div className="quote">
              <p>&ldquo;Jason has helped me grow and pushed me beyond my comfort zone. I am a better executive as a result of working with him &mdash; a better leader and a better man.&rdquo;</p>
              <div className="by">
                Harris <small>· add title + company</small>
              </div>
            </div>
            <div className="quote slot">
              <p>[ Drop in your next testimonial here &mdash; ideally one with a concrete outcome: a promotion, a team retained, a raise closed, an offsite that shifted something. ]</p>
              <div className="by">
                Name <small>· title + company</small>
              </div>
            </div>
            <div className="quote slot">
              <p>[ A workshop testimonial from an L&amp;D or team leader works well here &mdash; it speaks to your corporate buyer. ]</p>
              <div className="by">
                Name <small>· title + company</small>
              </div>
            </div>
            <div className="quote slot">
              <p>[ A founder or board testimonial rounds out all three service lines. ]</p>
              <div className="by">
                Name <small>· company</small>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '14px' }}>
            <Link className="btn btn-brass" href="/contact">
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
