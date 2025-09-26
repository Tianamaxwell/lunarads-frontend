import React from "react";
type Props = React.InputHTMLAttributes<HTMLInputElement>;
export default function Input({ className="", ...props }: Props){
  return (
    <input
      className={`w-full rounded-[12px] border border-[var(--su-line)] bg-white dark:bg-[var(--su-card)]
      px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--su-brand)] focus:border-[var(--su-brand)]
      placeholder:text-[var(--su-muted)] ${className}`}
      {...props}
    />
  );
}