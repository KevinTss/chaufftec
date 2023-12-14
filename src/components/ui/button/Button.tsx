import Link, { LinkProps } from 'next/link'

type ButtonProps = {
  children: React.ReactNode,
} & LinkProps

export const Button = ({ children, ...props }: ButtonProps) => {
  return <Link className="text-md px-6 py-3 cursor-pointer bg-blue-600 rounded-lg text-white font-bold" {...props}>{children}</Link>
}
