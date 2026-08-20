/**
 * Inline SVG icon set.
 * Inline rather than the raster files in src/assets so the icons stay sharp at
 * any size and can be recoloured with `currentColor` on the navy sections.
 */

export function CheckIcon({ strokeWidth = 2, ...props }) {
  return (
    <svg
      className="check-icon"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  )
}

export function ChevronIcon(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 17 17"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M5.05 6.69a.66.66 0 0 1 .95 0l2.59 2.59 2.58-2.59a.67.67 0 0 1 .95.95l-3.06 3.06a.67.67 0 0 1-.95 0L5.05 7.64a.67.67 0 0 1 0-.95Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg
      className="btn__arrow"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.5 10h12M10.5 5l5 5-5 5" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function UserIcon(props) {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="15" fill="#eef1f5" stroke="#c9d1da" strokeWidth="1.2" />
      <circle cx="16" cy="12.6" r="4.6" fill="#8d99a8" />
      <path
        d="M6.9 27.2a9.6 9.6 0 0 1 18.2 0A14.9 14.9 0 0 1 16 31a14.9 14.9 0 0 1-9.1-3.8Z"
        fill="#8d99a8"
      />
    </svg>
  )
}

export function MenuIcon({ open = false, ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      {open ? (
        <>
          <path d="M6 6 18 18" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M3.5 7h17" />
          <path d="M3.5 12h17" />
          <path d="M3.5 17h17" />
        </>
      )}
    </svg>
  )
}

/* --- Qualification requirement icons ------------------------------------ */

function DollarIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 8.5v15M19.5 12.2c-.6-1.3-2-2-3.7-2-2.1 0-3.6 1.1-3.6 2.8 0 1.7 1.3 2.4 3.6 2.9 2.6.5 4 1.4 4 3.2 0 1.9-1.7 3-4 3-1.9 0-3.4-.8-4-2.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="10"
        width="24"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 10V8.2A2.2 2.2 0 0 1 14.2 6h3.6A2.2 2.2 0 0 1 20 8.2V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M11 10v12M21 10v12" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ChartIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 5.5v10.7h11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M16 16.2 8.2 23.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function BankIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 4.5 28 11H4l12-6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 13v10M14 13v10M18 13v10M24 13v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M4.5 26.5h23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const REQUIREMENT_ICONS = {
  dollar: DollarIcon,
  briefcase: BriefcaseIcon,
  chart: ChartIcon,
  bank: BankIcon,
}

export function RequirementIcon({ name, ...props }) {
  const Icon = REQUIREMENT_ICONS[name]
  return Icon ? <Icon {...props} /> : null
}
