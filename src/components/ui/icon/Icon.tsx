import { FiDroplet } from "react-icons/fi";

type IconProps = {
  name: 'droplet'
}

export const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'droplet':
      return <FiDroplet />
    default: null
  }
}
