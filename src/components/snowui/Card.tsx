import React from "react";
export function Card({ className="", children }: {className?:string; children:React.ReactNode}){
  return <div className={`rounded-[var(--su-radius)] border border-[var(--su-line)] bg-white dark:bg-[var(--su-card)] shadow-[var(--su-shadow)] ${className}`}>{children}</div>;
}
export function CardBody({ className="", children }: {className?:string; children:React.ReactNode}){
  return <div className={`p-6 ${className}`}>{children}</div>;
}
export function CardHeader({ title, subtitle }: {title:string; subtitle?:string}){
  return (
    <div className="border-b border-[var(--su-line)] p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-[var(--su-muted)]">{subtitle}</p>}
    </div>
  );
}