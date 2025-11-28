interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  target?: string;
}

export default function ButtonLink({ href, children, variant = 'primary', className = "", target = "_self" }: ButtonLinkProps) {
  const baseStyles = "inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium text-sm";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    text: "text-blue-600 hover:text-blue-800 hover:underline px-0",
  };

  return (
    <a 
      href={href} 
      target={target}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
