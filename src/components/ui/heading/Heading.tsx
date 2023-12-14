type HeadingProps = {
  children: React.ReactNode,
  level?: 1 | 2 | 3
  className?: string
}

export const Heading = ({ children, className, level = 1 }: HeadingProps) => {
  const Markup = `h${level}` as const
  const font: Record<1 | 2 | 3, string> = {
    1: 'text-6xl',
    2: 'text-4xl',
    3: 'text-2xl',
  }

  return (
    <Markup className={`${font[level]} font-bold ${className}`}>
      {children}
    </Markup>
  )
}
