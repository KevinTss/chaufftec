type HeadingProps = {
  children: React.ReactNode,
  className?: string,
}

export const Paragraph = ({ children, className }: HeadingProps) => {
  return <p className={`text-md ${className}`}>{children}</p>
}
