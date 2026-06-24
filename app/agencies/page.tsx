import Link from 'next/link';
import type { Metadata } from 'next';
import { Ridge } from '../components/Art';

export const metadata: Metadata = {
  title: 'Coaching & Advisory for Agency CEOs',
  description:
    'Coaching and advisory for founders and CEOs of creative, digital, media, and social agencies — leadership coaching plus advice on offerings, margins, the leadership team, and getting out of the bottleneck.',
};

export default function Agencies() {
  return (
    <>
      <header className="phero">
        <div className="wrap pwrap">
          <span className="eyebrow">For agency &amp; services CEOs</span>
          <h1>You built a great agency. Now you have to lead the company it became.</h1>
          <p>Coaching and advisory for founders and CEOs of creative, digital, media, and social agencies &mdash; and the services firms that run like them.</p>
        </div>
        <Ridge />
      </header>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The founder&rsquo;s trap</span>
            <h2>The work that made you indispensable is now the ceiling.</h2>
            <p>
              You can do every job in the building &mdash; which is exactly why nothing moves without you. The agency grew
              on your taste, your relationships, and your hours. None of that scales, and you can feel it.
            </p>
          </div>
          <div className="grid3">
            <div className="feat">
              <div className="n">the bottleneck</div>
              <h4>Everything routes to you</h4>
              <p>Decisions, client escalations, the final eye on the work &mdash; all yours. The team waits on you.</p>
            </div>
            <div className="feat">
              <div className="n">the margins</div>
              <h4>Busy but not profitable</h4>
              <p>Revenue&rsquo;s up and the bank balance doesn&rsquo;t show it. Scope creep, utilization, and soft pricing eat the margin.</p>
            </div>
            <div className="feat">
              <div className="n">the team</div>
              <h4>No layer beneath you</h4>
              <p>You need leaders who own outcomes &mdash; not senior doers who still need you to make the call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What makes this different</span>
            <h2>One engagement, two jobs: your coach and your company&rsquo;s advisor.</h2>
            <p>
              Most coaches work on you. Most consultants work on the business. Agency founders need both at once, from
              someone who has run this kind of company &mdash; so that&rsquo;s how I work.
            </p>
          </div>
          <div className="grid2">
            <div className="card">
              <span className="tag">Coach · you as a leader</span>
              <ul>
                <li>Executive presence and the shift to a CEO mindset</li>
                <li>Delegation, empowerment, and learning to let go</li>
                <li>Hard conversations and real accountability</li>
                <li>Your time and focus &mdash; out of the bottleneck</li>
              </ul>
            </div>
            <div className="card">
              <span className="tag">Advisor · the company</span>
              <ul>
                <li>Offerings, positioning, and what you sell</li>
                <li>Margins, pricing, and utilization</li>
                <li>Building and leveling up the leadership team</li>
                <li>Financial visibility and the operating rhythm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Where this goes</span>
            <h2>A company that runs &mdash; and grows &mdash; without you in every room.</h2>
          </div>
          <div className="grid3">
            <div className="feat">
              <div className="n">01</div>
              <h4>A real leadership team</h4>
              <p>People who own outcomes, so you work on the business instead of in it.</p>
            </div>
            <div className="feat">
              <div className="n">02</div>
              <h4>Healthier margins</h4>
              <p>Clearer offerings and pricing discipline that finally show up in the numbers.</p>
            </div>
            <div className="feat">
              <div className="n">03</div>
              <h4>Your time back</h4>
              <p>Out of the day-to-day grind and into the role only the founder can play.</p>
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
