export default function Badge({ children }:{children:React.ReactNode}){
  return <span className="inline-flex items-center rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">{children}</span>;
}