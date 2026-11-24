import { useEffect, useState } from 'react';
import { HiBars3, HiXMark, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import { navLinks, profile } from '../data/content';
import useScrollSpy from '../hooks/useScrollSpy';
import avatar from '../assets/avatar.jpg';

const ids = navLinks.map((l) => l.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 10);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-neutral-200/70 bg-white/80 shadow-sm backdrop-blur-lg dark:border-neutral-800/70 dark:bg-neutral-950/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-20" aria-label="Main">
        <a href="#home" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={avatar}
            alt=""
            width="40"
            height="40"
            className="h-10 w-10 rounded-full object-cover shadow-md ring-2 ring-pink-500 ring-offset-2 ring-offset-white transition-transform duration-300 group-hover:scale-110 dark:ring-offset-neutral-950"
          />
          <span className="text-lg font-bold text-neutral-900 dark:text-white">{profile.name}</span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'bg-pink-50 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300'
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="grid h-10 w-10 place-items-center rounded-full text-neutral-600 transition hover:bg-neutral-100 hover:text-pink-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-pink-400"
          >
            {theme === 'dark' ? <HiOutlineSun className="h-5 w-5" /> : <HiOutlineMoon className="h-5 w-5" />}
          </button>

          <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 lg:inline-flex">
            Hire me
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-full text-neutral-700 transition hover:bg-neutral-100 md:hidden dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            {open ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="container-x min-h-0 space-y-1" inert={!open ? true : undefined}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                  active === link.id
                    ? 'bg-pink-50 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300'
                    : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pb-4 pt-2">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Hire me
            </a>
          </li>
        </ul>
      </div>

      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
