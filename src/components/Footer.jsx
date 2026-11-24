import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi2';
import { navLinks, profile } from '../data/content';
import avatar from '../assets/avatar.jpg';

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-pink-600 text-white shadow-lg shadow-pink-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <HiArrowUp className="h-5 w-5" />
    </button>
  );
}

export default function Footer() {
  const socials = profile.socials.filter((s) => s.href);

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40">
      <div className="container-x flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={avatar}
            alt=""
            width="40"
            height="40"
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-pink-500 ring-offset-2 ring-offset-neutral-50 dark:ring-offset-neutral-900"
          />
          <span className="font-bold text-neutral-900 dark:text-white">{profile.name}</span>
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="text-neutral-600 transition hover:text-pink-600 dark:text-neutral-400 dark:hover:text-pink-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {socials.length > 0 && (
          <ul className="flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full text-neutral-600 ring-1 ring-neutral-200 transition hover:-translate-y-0.5 hover:bg-pink-600 hover:text-white hover:ring-pink-600 dark:text-neutral-400 dark:ring-neutral-800"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
      </div>
    </footer>
  );
}
