import Link from 'next/link';
import type { Metadata } from 'next';
import { Ridge } from '../components/Art';

export const metadata: Metadata = {
  title: 'Board & Startup Advising',
  description:
    'Board and advisory work for founders and CEOs scaling from a handful of people to a real organization — a leadership and people lens, typically seed through Series B.',
};

export default function Advising() {
  return (
    <>
      <header className="phero">
        <div className="wrap pwrap">
          <span className="eyebrow">For founders · board &amp; advising</span>
          <h1>An operator in the room when the stakes are highest.</h1>
          <p>Board and advisory work for founders and CEOs scaling from a handful of people to a real organization &mdash; the stretch where the leadership challenge changes faster than the product does.</p>
        </div>
        <Ridge />
      </header>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What I bring</span>
            <h2>Built it, not just read about it.</h2>
          </div>
          <div className="grid3">
            <div className="feat">
              <div className="n">01</div>
              <h4>Operator&rsquo;s lens</h4>
              <p>20 years building teams through exactly the stages you&rsquo;re hitting now.</p>
            </div>
            <div className="feat">
              <div className="n">02</div>
              <h4>People &amp; hiring</h4>
              <p>Who to hire, when, and how to build the leadership layer beneath you.</p>
            </div>
            <div className="feat">
              <div className="n">03</div>
              <h4>The founder&rsquo;s seat</h4>
              <p>A confidential sounding board for the calls you can&rsquo;t make out loud yet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Ways to work together</span>
            <h2>From a seat on the board to a standing call.</h2>
          </div>
          <div className="grid3">
            <div className="card">
              <span className="tag">Formal</span>
              <h4>Board member</h4>
              <p>A seat on your board, bringing leadership and people expertise to governance.</p>
            </div>
            <div className="card">
              <span className="tag">Flexible</span>
              <h4>Advisor</h4>
              <p>Regular strategic input on leadership, org design, and scaling &mdash; without a board seat.</p>
            </div>
            <div className="card">
              <span className="tag">Hands-on</span>
              <h4>Founder coaching</h4>
              <p>1:1 coaching for you specifically, as the company and the role grow underneath you.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Fit</span>
            <h2>Who this is for.</h2>
          </div>
          <div className="ledger">
            <div className="row">
              <div className="k">Stage</div>
              <div className="v">
                <b>Any stage</b> &mdash; from your first real org through scaling up
              </div>
            </div>
            <div className="row">
              <div className="k">Focus</div>
              <div className="v">
                <b>Leadership, people, and scaling</b> &mdash; not your cap table or your code
              </div>
            </div>
            <div className="row">
              <div className="k">Cadence</div>
              <div className="v">
                From a <b>board seat</b> to a <b>regular advisory rhythm</b>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '30px' }}>
            <Link className="btn btn-brass" href="/contact">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
