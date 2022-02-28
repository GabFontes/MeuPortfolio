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
pt-5
pb-5
pl-24
pr-24
flex-shrink-0
text-white
`

export const Text = tw.a`
block
lg:inline-block
hover:text-green-600
text-xl
px-12
`

export const Anchors = tw.div`
flex
align-middle
`

export const Icons = tw.span`
flex
items-center
m-0
p-0
`