import Link from 'next/link';
import { Ridge, RidgeDark } from './components/Art';
import { MEDIA } from './media';

export default function Home() {
  return (
    <>
      <header className="hero">
        <video
          className="hero-bg"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.png"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="wrap">
          <div className="hero-copy reveal">
            <span className="eyebrow">Executive coaching · agency &amp; services leaders</span>
            <h1>
              Leadership coaching for executives who&rsquo;ve <em>outgrown their own playbook.</em>
            </h1>
            <p className="lede">
              Twenty years building teams, paired with ICF credentials and Hogan-backed assessment. I coach senior
              leaders to lead with more presence &mdash; and help agency founders build companies that run without them.
            </p>
            <div className="cta">
              <Link className="btn btn-brass" href="/contact">
                Book a discovery call
              </Link>
              <Link className="btn btn-light" href="/agencies">
                For agency CEOs
              </Link>
            </div>
            <p className="proof">ICF ACC · Hudson · Hogan certified · 20+ yrs operating</p>
          </div>
        </div>
        <Ridge />
      </header>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Where I focus</span>
            <h2>Two ways I coach &mdash; and one kind of leader I specialize in.</h2>
            <p>
              Most of my work is one-on-one with senior leaders. The deepest of it is with the founders and CEOs of
              agencies &mdash; coaching them as leaders and advising them on the company itself.
            </p>
          </div>
          <div className="flags">
            <Link className="flag" href="/coaching">
              <div className="who">01 · senior leaders, any industry</div>
              <h3>Executive coaching</h3>
              <p>
                For VPs, executives, and rising leaders ready for the version of the role that&rsquo;s coming next &mdash;
                presence, prioritization, and judgment under pressure, without burning out.
              </p>
              <span className="go">Explore coaching &rarr;</span>
            </Link>
            <Link className="flag" href="/agencies">
              <div className="who">02 · agency &amp; services CEOs</div>
              <h3>Coaching &amp; advisory for agency leaders</h3>
              <p>
                For founders of creative, digital, media, and social agencies. I coach you as a leader and advise on the
                business itself &mdash; offerings, margins, leadership team, and getting out of the bottleneck.
              </p>
              <span className="go">See the agency practice &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">For teams · 03</span>
            <h2>Team leadership workshops.</h2>
          </div>
          <Link className="band" href="/workshops">
            <div>
              <h3>Skills training for leadership teams.</h3>
              <p>
                Practical, facilitated sessions on the fundamentals that make teams work &mdash; giving feedback, setting
                goals, and building trust. Built for leadership teams, and extendable to broader staff.
              </p>
              <span className="go" style={{ color: 'var(--petrol)', fontWeight: 500, fontSize: '14px' }}>
                See workshop formats &rarr;
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span className="eyebrow">Topics include</span>
              <span style={{ fontFamily: 'var(--display)', fontSize: '19px' }}>Giving feedback</span>
              <span style={{ fontFamily: 'var(--display)', fontSize: '19px' }}>Goal setting</span>
              <span style={{ fontFamily: 'var(--display)', fontSize: '19px' }}>Building trust</span>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="minor">
            <div>
              <div className="lbl">Also · 04</div>
              <p>
                I take on a small number of{' '}
                <b style={{ color: 'var(--ink)', fontWeight: 500 }}>board and startup advisory</b> engagements each year
                &mdash; bringing a leadership and people lens to founders building their first real org.
              </p>
            </div>
            <Link className="btn btn-ghost" href="/advising">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The approach</span>
            <h2>Most coaching is all business or all feelings. I work both at once.</h2>
            <p>
              I spent two decades on the operating side before I coached anyone. That&rsquo;s the difference &mdash; we
              move the numbers and the human in the same conversation.
            </p>
          </div>
          <div className="grid3">
            <div className="feat">
              <div className="n">river / source</div>
              <h4>Built the teams</h4>
              <p>Small and global, local and remote. I&rsquo;ve sat in your seat, so the advice is practical, not abstract.</p>
            </div>
            <div className="feat">
              <div className="n">map / terrain</div>
              <h4>Data, not hunches</h4>
              <p>Hogan-certified. You get a clear read on how you actually show up &mdash; not just how you think you do.</p>
            </div>
            <div className="feat">
              <div className="n">summit / home</div>
              <h4>Work and life</h4>
              <p>The presence that moves a room and the prioritization that gets you home for dinner. Both, deliberately.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="portrait-band">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="portrait-img" src={MEDIA.portrait} alt="Jason Burby" />
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Who you&rsquo;d be working with</span>
              <h2>Two decades in the room &mdash; now in your corner.</h2>
              <p>
                I spent 20 years building and leading teams, small and global, before I became a coach. That operating
                background is the throughline in everything here: practical, grounded, and honest about the tradeoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Credentials</span>
            <h2>The background behind the work.</h2>
            <p>Each certification in plain terms &mdash; what it is, and why it matters to your work together.</p>
          </div>
          <div className="ledger">
            <div className="row">
              <div className="k">Experience</div>
              <div className="v">
                <b>20+ years</b> building and leading teams &mdash; small to global
              </div>
            </div>
            <div className="row">
              <div className="k">ICF</div>
              <div className="v">
                <b>Associate Certified Coach</b> &mdash; accredited by the International Coaching Federation
              </div>
            </div>
            <div className="row">
              <div className="k">Hogan</div>
              <div className="v">
                <b>Hogan certified</b> &mdash; validated assessment data behind the coaching
              </div>
            </div>
            <div className="row">
              <div className="k">Hudson</div>
              <div className="v">
                <b>Hudson Coaching Certification</b> &mdash; one of the field&rsquo;s most rigorous programs
              </div>
            </div>
            <div className="row">
              <div className="k">Spiritual Psych.</div>
              <div className="v">
                <b>Spiritual Psychology I</b> &mdash; the meaning-and-purpose side of leadership
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">In their words</span>
            <h2>What changes when we work together.</h2>
          </div>
          <div className="quotes">
            <div className="quote">
              <p>&ldquo;I can truly say our work has changed my ability to shine as a leader.&rdquo;</p>
              <div className="by">
                <span>Kristina <small>· add title + company</small></span>
              </div>
            </div>
            <div className="quote">
              <p>
                &ldquo;Through Jason&rsquo;s guidance I&rsquo;ve become a more effective leader, more true to self, and
                live each day more energized, grounded and complete.&rdquo;
              </p>
              <div className="by">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="av" src={MEDIA.thomas} alt="" />
                <span>Thomas <small>· add title + company</small></span>
              </div>
            </div>
            <div className="quote">
              <p>
                &ldquo;Jason asks questions that draw out the answers inside of me &mdash; answers I often have a hard time
                articulating on my own.&rdquo;
              </p>
              <div className="by">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="av" src={MEDIA.chelsea} alt="" />
                <span>Chelsea <small>· add title + company</small></span>
              </div>
            </div>
            <div className="quote">
              <p>
                &ldquo;Jason pushed me beyond my comfort zone. I am a better executive as a result &mdash; a better leader
                and a better man.&rdquo;
              </p>
              <div className="by">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="av" src={MEDIA.harris} alt="" />
                <span>Harris <small>· add title + company</small></span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link className="btn btn-ghost" href="/testimonials">
              See all results &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="closer">
            <RidgeDark />
            <h2>Ready to lead at the next level?</h2>
            <p>A free intro call to see if we&rsquo;re a fit. No pitch, no pressure.</p>
            <div className="cta">
              <Link className="btn btn-brass" href="/contact">
                Book a discovery call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
