
import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))

    setStatus('')
  }

  function validate() {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please enter your message.'
    } else if (form.message.trim().length < 10) {
      nextErrors.message = 'Message must contain at least 10 characters.'
    }

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)
    setStatus('')

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    const recipient = 'hello@example.com'

    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      '',
      form.message.trim(),
    ].join('\n')

    const mailto = new URL(`mailto:${recipient}`)
    mailto.searchParams.set('subject', form.subject.trim())
    mailto.searchParams.set('body', body)

    setStatus('Opening your email application...')
    window.location.href = mailto.toString()
  }

  function fieldClass(field) {
    return `form-field ${errors[field] ? '!border-red-400' : ''}`
  }

  return (
    <section
      id="contact"
      className="section-padding scroll-mt-20"
    >
      <div className="container-width">
        <div className="mb-12 text-center">
          <p className="section-label">Get in touch</p>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="section-description mx-auto">
            Have a project in mind or an opportunity to discuss?
            Send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <aside className="glass-card h-fit p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              I'm open to discussing frontend development projects,
              collaboration, and new opportunities.
            </p>

            <div className="mt-8 space-y-6">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-4"
              >
                <span className="rounded-xl bg-violet-500/15 p-3 text-violet-300">
                  <Mail size={21} />
                </span>

                <span>
                  <span className="block text-xs text-gray-500">
                    Email
                  </span>

                  <span className="mt-1 block break-all text-sm text-gray-200">
                    arunkumar@example.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="rounded-xl bg-violet-500/15 p-3 text-violet-300">
                  <MapPin size={21} />
                </span>

                <span>
                  <span className="block text-xs text-gray-500">
                    Location
                  </span>

                  <span className="mt-1 block text-sm text-gray-200">
                    Salem, India
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-4 text-sm text-gray-400">
                Connect with me
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-25 items-center justify-center rounded-xl border border-gray-700 text-sm font-bold text-gray-300 transition hover:border-violet-400 hover:text-violet-300"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-25 items-center justify-center rounded-xl border border-gray-700 text-sm font-bold text-gray-300 transition hover:border-violet-400 hover:text-violet-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-card space-y-5 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-gray-300"
                >
                  Full Name *
                </label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClass('name')}
                  placeholder="Enter Name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? 'name-error' : undefined
                  }
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm text-gray-300"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass('email')}
                  placeholder="john@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? 'email-error' : undefined
                  }
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-sm text-gray-300"
              >
                Subject *
              </label>

              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={fieldClass('subject')}
                placeholder="Project inquiry"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={
                  errors.subject ? 'subject-error' : undefined
                }
              />

              {errors.subject && (
                <p
                  id="subject-error"
                  className="mt-2 text-xs text-red-400"
                >
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm text-gray-300"
              >
                Message *
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${fieldClass('message')} resize-y`}
                placeholder="Tell me about your project..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? 'message-error' : undefined
                }
              />

              {errors.message && (
                <p
                  id="message-error"
                  className="mt-2 text-xs text-red-400"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {status && (
              <p
                role="status"
                className="flex items-start gap-2 text-sm leading-6 text-emerald-300"
              >
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0"
                />
                {status}
              </p>
            )}

            <button
              type="submit"
              className="primary-button w-full sm:w-auto"
            >
              Send Message <Send size={17} />
            </button>

            <p className="text-xs leading-5 text-gray-500">
              Fields marked with * are required. Your email application
              will handle sending the message.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
