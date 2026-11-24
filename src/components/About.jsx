import { about, profile } from '../data/content';
import aboutImg from '../assets/about.jpg';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 py-20 lg:py-28 dark:bg-neutral-900/40">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={aboutImg}
                alt={`${profile.fullName} smiling`}
                loading="lazy"
                width="1080"
                height="771"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-lg font-semibold text-white">{profile.fullName}</p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="About me" title="Building complete products, from database to UI" align="left" />
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={100 * i} as="p" className="mb-4 text-neutral-600 sm:text-lg dark:text-neutral-400">
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.highlights.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 100}
              className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg dark:hover:border-pink-500/40"
            >
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-pink-100 text-pink-600 transition-colors group-hover:bg-pink-600 group-hover:text-white dark:bg-pink-500/10 dark:text-pink-400">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
