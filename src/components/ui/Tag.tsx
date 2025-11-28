interface TagProps {
  children: React.ReactNode;
  className?: string; // Para permitir cores personalizadas se precisar
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium cursor-default border border-gray-200 ${className}`}>
      {children}
    </span>
  );
}
