export type IconProps = Omit<React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement>, 'ref'>

export type SelectedProductStateType = {
  id: number
  src: string
  alt: string
}

export type SidePanelProps = {
  isOpen: boolean
  setIsOpen: (value:boolean) => void
}
