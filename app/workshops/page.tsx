import Link from 'next/link';
import type { Metadata } from 'next';
import { Ridge } from '../components/Art';

export const metadata: Metadata = {
  title: 'Team Leadership Workshops',
  description:
    'Facilitated leadership workshops for teams — giving feedback, goal setting, and building trust. Built for leadership teams and extendable to broader staff.',
};

export default function Workshops() {
  return (
    <>
      <header className="phero">
        <div className="wrap pwrap">
          <span className="eyebrow">For teams · leadership workshops</span>
          <h1>Bring your leaders into the same room &mdash; and out of it changed.</h1>
          <p>Practical, facilitated sessions for leadership teams, managers, and high-potential cohorts. Your people leave able to do something differently, not just inspired for a week.</p>
        </div>
        <Ridge />
      </header>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Popular formats</span>
            <h2>Sessions teams actually use.</h2>
            <p>Built for leadership teams and extendable to broader staff. Every workshop is tailored to your team and goals &mdash; these are the most-requested starting points.</p>
          </div>
          <div className="grid2">
            <div className="card">
              <span className="tag">Half day</span>
              <h4>Giving feedback</h4>
              <p>A repeatable model for feedback and accountability conversations that land and actually change behavior.</p>
            </div>
            <div className="card">
              <span className="tag">Half day</span>
              <h4>Goal setting &amp; alignment</h4>
              <p>Setting goals the team believes in &mdash; and keeping everyone rowing the same direction between them.</p>
            </div>
            <div className="card">
              <span className="tag">Half or full day</span>
              <h4>Building trust</h4>
              <p>The foundation everything else sits on. Trust built deliberately on the team, using proven frameworks.</p>
            </div>
            <div className="card">
              <span className="tag">Offsite facilitation</span>
              <h4>Leadership team offsites</h4>
              <p>Independent facilitation so you can be in the conversation instead of running it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What your team leaves with</span>
            <h2>Outcomes, not takeaways.</h2>
          </div>
          <div className="grid3">
            <div className="feat">
              <div className="n">01</div>
              <h4>Shared language</h4>
              <p>A common vocabulary for leadership that outlasts the session.</p>
            </div>
            <div className="feat">
              <div className="n">02</div>
              <h4>A practiced skill</h4>
              <p>Reps in the room, so the behavior change starts before they leave.</p>
            </div>
            <div className="feat">
              <div className="n">03</div>
              <h4>A commitment</h4>
              <p>Each person leaves with one concrete thing they&rsquo;ll do differently.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The details</span>
            <h2>Logistics, up front.</h2>
          </div>
          <div className="ledger">
            <div className="row">
              <div className="k">Formats</div>
              <div className="v">
                <b>Half-day, full-day, or multi-session</b> cohort programs
              </div>
            </div>
            <div className="row">
              <div className="k">Delivery</div>
              <div className="v">
                <b>In person or remote</b> &mdash; facilitated live either way
              </div>
            </div>
            <div className="row">
              <div className="k">Group size</div>
              <div className="v">
                Sized to your team &mdash; from a leadership group to a full department
              </div>
            </div>
            <div className="row">
              <div className="k">Tailoring</div>
              <div className="v">
                Every session is <b>customized</b> to your team&rsquo;s context and goals
              </div>
            </div>
            <div className="row">
              <div className="k">Add-on</div>
              <div className="v">
                Pair with <b>1:1 coaching</b> for the senior leaders in the room
              </div>
            </div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <Link className="btn btn-brass" href="/contact">
              Request a workshop overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
