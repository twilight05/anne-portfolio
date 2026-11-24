import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <Reveal className={`mb-12 max-w-2xl lg:mb-16 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base text-neutral-600 sm:text-lg dark:text-neutral-400">{subtitle}</p>
      )}
    </Reveal>
  );
}
