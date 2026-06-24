import Link from 'next/link';

const LOGO = '/logo.svg';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="logo-img" src={LOGO} alt="Burby Ventures" />
        <div className="fnav">
          <Link href="/coaching">Coaching</Link>
          <Link href="/agencies">For agencies</Link>
          <Link href="/workshops">Workshops</Link>
          <Link href="/advising">Advising</Link>
          <Link href="/testimonials">Results</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://www.linkedin.com/in/jasonburby/">LinkedIn</a>
        </div>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px' }}>© 2026 Burby Ventures, LLC</span>
      </div>
    </footer>
  );
}
