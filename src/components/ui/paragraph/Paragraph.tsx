type HeadingProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const Paragraph = ({ children, className, ...props }: HeadingProps) => {
  return (
    <p
      className={`text-md text-gray-500 font-light whitespace-pre-line ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}
