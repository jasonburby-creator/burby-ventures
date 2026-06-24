import Link from 'next/link';
import type { Metadata } from 'next';
import { Ridge } from '../components/Art';

export const metadata: Metadata = {
  title: 'Executive Coaching',
  description:
    'One-on-one executive coaching for senior leaders in any industry — executive presence, prioritization, hard conversations, and sustainable performance.',
};

export default function Coaching() {
  return (
    <>
      <header className="phero">
        <div className="wrap pwrap">
          <span className="eyebrow">For executives · 1:1 coaching</span>
          <h1>Lead with presence. Decide with clarity. Go home with something left in the tank.</h1>
          <p>One-on-one coaching for senior leaders who are good at the job and ready for the version of it that&rsquo;s coming next.</p>
        </div>
        <Ridge />
      </header>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Sound familiar?</span>
            <h2>You&rsquo;re carrying more than the org chart shows.</h2>
          </div>
          <div className="grid2">
            <div className="card">
              <span className="tag">The bind</span>
              <p>
                The skills that got you here &mdash; heads-down execution, being the smartest in the room &mdash; quietly
                cap what you can do at the next level. Presence, delegation, and judgment under ambiguity are different
                muscles.
              </p>
            </div>
            <div className="card">
              <span className="tag">The work</span>
              <p>
                We build those muscles deliberately: how you show up in a room, where your time actually goes, and the
                patterns (yes, including the inner-critic ones) that run you when the pressure&rsquo;s on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What we work on</span>
            <h2>The terrain.</h2>
          </div>
          <div className="grid3">
            <div className="feat">
              <div className="n">01</div>
              <h4>Executive presence</h4>
              <p>Command a room without performing. Communicate so people move.</p>
            </div>
            <div className="feat">
              <div className="n">02</div>
              <h4>Priorities &amp; delegation</h4>
              <p>Stop being the bottleneck. Spend your hours where only you can.</p>
            </div>
            <div className="feat">
              <div className="n">03</div>
              <h4>Hard conversations</h4>
              <p>Feedback, conflict, and accountability that lands and holds.</p>
            </div>
            <div className="feat">
              <div className="n">04</div>
              <h4>Transitions</h4>
              <p>New title, new scope, new team &mdash; land the first 90 days well.</p>
            </div>
            <div className="feat">
              <div className="n">05</div>
              <h4>Confidence &amp; the inner critic</h4>
              <p>Quiet the imposter narrative without losing the self-awareness.</p>
            </div>
            <div className="feat">
              <div className="n">06</div>
              <h4>Sustainable performance</h4>
              <p>Results that don&rsquo;t cost you your health, marriage, or weekends.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2>A clear path, start to finish.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num"></div>
              <div>
                <h4>Discovery call</h4>
                <p>A free introductory conversation to understand where you&rsquo;re headed and whether we&rsquo;re the right fit. No pressure.</p>
              </div>
            </div>
            <div className="step">
              <div className="num"></div>
              <div>
                <h4>Assessment &amp; goals</h4>
                <p>We use Hogan and a structured intake to get an honest read on how you operate, then name two or three goals worth the next few months.</p>
              </div>
            </div>
            <div className="step">
              <div className="num"></div>
              <div>
                <h4>The work</h4>
                <p>Regular one-on-one sessions over a focused engagement, with real-world experiments between them and support in between when it counts.</p>
              </div>
            </div>
            <div className="step">
              <div className="num"></div>
              <div>
                <h4>Review &amp; renew</h4>
                <p>We measure against the goals we set, celebrate what moved, and decide together what&rsquo;s next.</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <Link className="btn btn-brass" href="/contact">
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
