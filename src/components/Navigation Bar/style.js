import tw from "tailwind-styled-components";

export const NavBar = tw.nav`
flex
items-center
fixed
top-0
left-0
right-0
justify-between
flex-wrap
bg-neutral
pt-5
pb-5
pl-24
pr-24
flex-shrink-0
text-white
`
export const WrapperHeader = tw.div`
flex items-center justify-between flex-wrap
`
export const Text = tw.a`
block lg:inline-block hover:text-green-600
text-lg
`
export const Icon = tw.span`

`
export default NavBar;