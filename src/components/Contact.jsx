import { useState } from 'react';
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClipboard,
  HiCheck,
  HiOutlinePaperAirplane,
} from 'react-icons/hi2';
import { profile } from '../data/content';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const initial = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email.';
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

function ContactItem({ icon: Icon, label, value, href, copyable }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const content = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-pink-100 text-pink-600 transition-colors group-hover:bg-pink-600 group-hover:text-white dark:bg-pink-500/10 dark:text-pink-400">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-neutral-500 dark:text-neutral-400">{label}</span>
        <span className="block break-words font-semibold [overflow-wrap:anywhere] text-neutral-900 dark:text-white">{value}</span>
      </span>
    </>
  );

  return (
    <li className="card group flex items-center gap-4 p-4 transition hover:border-pink-300 dark:hover:border-pink-500/40">
      {href ? (
        <a href={href} className="flex min-w-0 flex-1 items-center gap-4">
          {content}
        </a>
      ) : (
        <div className="flex min-w-0 flex-1 items-center gap-4">{content}</div>
      )}
      {copyable && (
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${label.toLowerCase()}`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-neutral-500 transition hover:bg-neutral-100 hover:text-pink-600 dark:hover:bg-neutral-800"
        >
          {copied ? <HiCheck className="h-5 w-5 text-emerald-500" /> : <HiOutlineClipboard className="h-5 w-5" />}
        </button>
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? `${label} copied` : ''}
      </span>
    </li>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-neutral-800 dark:text-neutral-200">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sendCopy, setSendCopy] = useState(true);
  const [status, setStatus] = useState('idle');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    // No backend: open the visitor's email client with the message pre-filled.
    const params = new URLSearchParams({
      subject: `Portfolio enquiry from ${values.name}`,
      body: `${values.message}\n\n— ${values.name} (${values.email})`,
    });
    if (sendCopy) params.set('cc', values.email);
    window.location.href = `mailto:${profile.email}?${params.toString().replace(/\+/g, '%20')}`;
    setStatus('sent');
    setValues(initial);
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `input ${errors[name] ? '!border-red-500 focus:!ring-red-500/15' : ''}`,
  });

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have a project in mind or just want to say hello? Send a message and I'll get back to you as soon as possible."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <Reveal>
            <ul className="space-y-4">
              <ContactItem icon={HiOutlineMapPin} label="Location" value={profile.location} />
              <ContactItem
                icon={HiOutlinePhone}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                copyable
              />
              <ContactItem
                icon={HiOutlineEnvelope}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                copyable
              />
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input type="text" autoComplete="name" placeholder="Your name" {...fieldProps('name')} />
                </Field>
                <Field id="email" label="Email address" error={errors.email}>
                  <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
                </Field>
              </div>
              <Field id="message" label="Message" error={errors.message}>
                <textarea rows={5} placeholder="Tell me about your project..." {...fieldProps('message')} />
              </Field>

              <label className="flex cursor-pointer items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                <input
                  type="checkbox"
                  checked={sendCopy}
                  onChange={(e) => setSendCopy(e.target.checked)}
                  className="h-5 w-5 cursor-pointer rounded accent-pink-600"
                />
                Send me a copy of this message
              </label>

              <button type="submit" className="btn-primary group w-full">
                Send message
                <HiOutlinePaperAirplane className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

              <p role="status" className="min-h-[1.25rem] text-center text-sm text-emerald-600 dark:text-emerald-400">
                {status === 'sent' && 'Your email app should open with the message ready to send. Thank you!'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
