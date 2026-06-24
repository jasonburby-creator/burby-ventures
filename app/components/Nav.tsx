'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const LINKS = [
  { href: '/coaching', label: 'Coaching' },
  { href: '/agencies', label: 'For agencies' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/testimonials', label: 'Results' },
];

const LOGO = '/logo.svg';

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav>
      <div className="wrap">
        <Link href="/" className="brand" style={{ display: 'flex', alignItems: 'center' }} onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-img" src={LOGO} alt="Burby Ventures" />
        </Link>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? '\u00d7' : '\u2261'}
        </button>
        <div className={open ? 'navlinks open' : 'navlinks'}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? 'on' : ''} onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-brass" onClick={close}>
            Book a call
          </Link>
        </div>
      </div>
    </nav>
  );
}
