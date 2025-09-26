import React from "react";
type Props = React.SelectHTMLAttributes<HTMLSelectElement>;
export default function Select({ className="", children, ...props }: Props){
  return (
    <select
      className={`rounded-[12px] border border-[var(--su-line)] bg-white dark:bg-[var(--su-card)]
      px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--su-brand)] ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}