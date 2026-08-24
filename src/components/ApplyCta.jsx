import { useState } from 'react'
import { DEPOSIT_RANGES, REQUIREMENTS } from '../data/content.js'
import { ArrowRightIcon, ChevronIcon, RequirementIcon } from './Icons.jsx'
import './ApplyCta.css'

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  deposit: '',
  businessAccount: '',
  consent: false,
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}

  if (!values.firstName.trim()) errors.firstName = 'Enter your first name.'
  if (!values.lastName.trim()) errors.lastName = 'Enter your last name.'
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (values.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Enter a 10-digit phone number.'
  }
  if (!values.deposit) errors.deposit = 'Select an average monthly deposit.'
  if (!values.businessAccount) errors.businessAccount = 'Select an option.'
  if (!values.consent) errors.consent = 'Please agree before submitting.'

  return errors
}

export default function ApplyCta() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus()
      return
    }

    // TODO: send `values` to the CRM / lead endpoint once it exists.
    setSubmitted(true)
  }

  function fieldProps(name) {
    return {
      id: name,
      name,
      onChange: handleChange,
      'aria-invalid': errors[name] ? true : undefined,
      'aria-describedby': errors[name] ? `${name}-error` : undefined,
    }
  }

  return (
    <section className="apply" id="apply" aria-labelledby="apply-heading">
      <div className="apply__inner container">
        <div className="apply__copy">
          <h2 className="display-heading apply__heading" id="apply-heading">
            FutureCap has got your back
          </h2>
          <p className="apply__subhead">
            Apply now and be approved for up to $500,000 in less than 4 hours
          </p>

          <h3 className="apply__list-title">In general, you will need:</h3>
          <ul className="apply__requirements">
            {REQUIREMENTS.map((requirement) => (
              <li key={requirement.icon}>
                <span className={`req-icon req-icon--${requirement.icon}`}>
                  <RequirementIcon name={requirement.icon} width="26" height="26" />
                </span>
                <span className="req-label">{requirement.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="apply__panel">
          {submitted ? (
            <div className="apply__success" role="status">
              {/* Stroke-drawn tick — the one moment on the page worth a small
                  flourish, since it confirms the visitor's application. */}
              <span className="apply__success-mark" aria-hidden="true">
                <svg viewBox="0 0 52 52" fill="none" stroke="currentColor">
                  <circle className="apply__success-ring" cx="26" cy="26" r="24" />
                  <path className="apply__success-tick" d="M15 27 22.5 34.5 37.5 18.5" />
                </svg>
              </span>
              <h3>Thanks — we have your details.</h3>
              <p>
                A FutureCap funding advisor will reach out shortly to walk you through
                the options you qualify for.
              </p>
            </div>
          ) : (
            <form className="apply__form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <input type="text" autoComplete="given-name" {...fieldProps('firstName')} />
                {errors.firstName && (
                  <p className="field__error" id="firstName-error">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input type="text" autoComplete="family-name" {...fieldProps('lastName')} />
                {errors.lastName && (
                  <p className="field__error" id="lastName-error">
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" autoComplete="email" {...fieldProps('email')} />
                {errors.email && (
                  <p className="field__error" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input type="tel" autoComplete="tel" {...fieldProps('phone')} />
                {errors.phone && (
                  <p className="field__error" id="phone-error">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="deposit">
                  What&apos;s the average monthly deposit into your business bank account?
                </label>
                <div className="field__select">
                  <select value={values.deposit} {...fieldProps('deposit')}>
                    <option value="">Select an amount</option>
                    {DEPOSIT_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon />
                </div>
                {errors.deposit && (
                  <p className="field__error" id="deposit-error">
                    {errors.deposit}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="businessAccount">
                  Is your revenue deposited into a business bank account?
                </label>
                <div className="field__select">
                  <select value={values.businessAccount} {...fieldProps('businessAccount')}>
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <ChevronIcon />
                </div>
                {errors.businessAccount && (
                  <p className="field__error" id="businessAccount-error">
                    {errors.businessAccount}
                  </p>
                )}
              </div>

              <div className="field field--full field--consent">
                <label className="consent" htmlFor="consent">
                  <input type="checkbox" checked={values.consent} {...fieldProps('consent')} />
                  <span>
                    By clicking the checkbox you agree to receive text messages from
                    FutureCap.
                  </span>
                </label>
                {errors.consent && (
                  <p className="field__error" id="consent-error">
                    {errors.consent}
                  </p>
                )}
              </div>

              <button className="btn btn--gold apply__submit" type="submit">
                Submit
                <ArrowRightIcon />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
