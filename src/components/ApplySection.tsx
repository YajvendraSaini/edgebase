import { useState, type FormEvent } from 'react'

export function ApplySection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="apply"
      className="relative z-10 border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2
          className="font-display text-4xl text-[#000000] md:text-[40px]"
          style={{ lineHeight: 1.05, letterSpacing: '-1.5px' }}
        >
          Apply for Night 0.
        </h2>

        <p className="mt-4 text-base text-[#6F6F6F]">
          12 spots. First come, right fit. If the room fills, you wait for the
          next one.
        </p>

        <div className="mt-12 rounded-2xl border border-[#E5E5E5] bg-[#FFFFFF] p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)] md:p-10">
          {submitted ? (
            <p className="font-display text-2xl italic text-[#000000]">
              Received. If you&apos;re the right fit, we&apos;ll ping you before
              the night.
            </p>
          ) : (
            <form className="space-y-5 text-left" onSubmit={handleSubmit}>
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="So we can pull you off the waitlist fast"
                required
              />
              <Field
                label="City"
                name="city"
                type="text"
                placeholder="Jaipur? SF? BLR?"
                required
              />
              <Field
                label="What are you building right now?"
                name="building"
                as="textarea"
                rows={4}
                placeholder="Explain the core mechanism in one sentence. Links to live betas, Figma files, or repos preferred."
                required
              />
              <Field
                label="Why are you sacrificing a night of sleep for this?"
                name="why"
                as="textarea"
                rows={3}
                required
              />
              <Field
                label="What is a deeply held belief you have about tech, design, or startups that most people disagree with?"
                name="belief"
                as="textarea"
                rows={3}
                required
              />
              <Field
                label="Twitter / Github / Portfolio"
                name="links"
                type="text"
              />

              <p className="text-center text-xs text-[#6F6F6F]">
                We respect builder privacy. Zero spam.
              </p>

              <button
                type="submit"
                className="mt-2 h-12 w-full rounded-lg bg-[#000000] text-[15px] font-medium text-[#FFFFFF] transition-[transform,opacity] hover:scale-[0.98] hover:opacity-90"
              >
                Submit Protocol
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  required?: boolean
  placeholder?: string
  type?: string
  as?: 'input' | 'textarea'
  rows?: number
}

function Field({
  label,
  name,
  required,
  placeholder,
  type = 'text',
  as = 'input',
  rows,
}: FieldProps) {
  const sharedClassName =
    'w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-[15px] text-[#000000] outline-none transition-[border-color,box-shadow] focus:border-[#000000] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)]'

  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#6F6F6F]">{label}</span>
      {as === 'textarea' ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={`${sharedClassName} resize-y`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={sharedClassName}
        />
      )}
    </label>
  )
}
