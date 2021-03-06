import tw from "tailwind-styled-components";

export const NavBar = tw.nav`
flex
items-center
fixed
z-10
top-0
left-0
right-0
justify-between
flex-wrap
bg-neutral
pt-3
pb-3
pl-24
pr-24
flex-shrink-0
text-white
`
export const WrapperHeader = tw.div`
flex items-center justify-between flex-wrap
`
export const Icon = tw.span`

`
export default NavBar;