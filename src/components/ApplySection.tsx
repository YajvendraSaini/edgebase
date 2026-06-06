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
          Apply for Night Party.
        </h2>

        <p className="mt-4 text-base text-[#6F6F6F]">
          12 seats. First come, right fit. No applications after the room is
          full.
        </p>

        <div className="mt-12 rounded-2xl border border-[#E5E5E5] bg-[#FFFFFF] p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)] md:p-10">
          {submitted ? (
            <p className="font-display text-2xl italic text-[#000000]">
              You&apos;re in. We&apos;ll be in touch before the night.
            </p>
          ) : (
            <form className="space-y-5 text-left" onSubmit={handleSubmit}>
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field
                label="City"
                name="city"
                type="text"
                placeholder="Jaipur? Somewhere else?"
                required
              />
              <Field
                label="What are you building right now"
                name="building"
                as="textarea"
                rows={4}
                required
              />
              <Field
                label="Why Night Party"
                name="why"
                as="textarea"
                rows={3}
                required
              />
              <Field
                label="Twitter / X handle"
                name="twitter"
                type="text"
                placeholder="Optional"
              />

              <button
                type="submit"
                className="mt-2 h-12 w-full rounded-lg bg-[#000000] text-[15px] font-medium text-[#FFFFFF] transition-[transform,opacity] hover:scale-[0.98] hover:opacity-90"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-xs text-[#6F6F6F]">
          Edge Base does not share your information with anyone.
        </p>
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
