import type { SVGProps } from "react";

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      {...props}
    >
      <rect width={18} height={18} x={3} y={3} rx={3} ry={3} />
      <path d="M8 10v7" />
      <path d="M8 7.5a.5.5 0 1 1 0-1" />
      <path d="M12 17v-5.2c0-1.2.8-2.3 2.3-2.3 1.7 0 2.7 1.1 2.7 3.1V17" />
    </svg>
  );
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path
        d="M12 3c-4.6 0-8.3 3.7-8.3 8.3 0 3.7 2.4 6.9 5.8 8 .4.1.5-.2.5-.4v-1.5c-2.4.5-2.9-1-2.9-1-.3-.9-.8-1.2-.8-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.8 2.3.6.1-.5.3-.8.5-.9-1.9-.2-3.9-.9-3.9-4 0-.9.3-1.6.8-2.2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8.7-.2 1.4-.3 2.1-.3s1.4.1 2.1.3c1.5-1 2.2-.8 2.2-.8.4 1.1.3 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-2 3.7-3.9 3.9.3.3.6.7.6 1.4v2c0 .2.1.5.5.4 3.4-1.1 5.8-4.3 5.8-8C20.3 6.7 16.6 3 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M6.5 3h2a2 2 0 0 1 2 1.7l.4 2.7a2 2 0 0 1-1 2l-1.2.8a12.6 12.6 0 0 0 5 5l.8-1.2a2 2 0 0 1 2-1l2.7.4a2 2 0 0 1 1.7 2v2a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3 6.5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
