import tw from "tailwind-styled-components";

export const Proj = tw.div`
bg-neutral
flex
justify-center
flex-wrap
flex-col
`

export const Title = tw.span`
text-green-600
text-5xl
p-10
pb-0
flex
flex-wrap
justify-center
`

export const Img = tw.img`
self-center
pt-8
pb-20
`

export const Cards = tw.div`
flex
justify-center
self-center
flex-wrap
`

export const Card = tw.div`
max-w-sm
max-h-72
rounded
shadow-md
bg-neutral
text-2xl
align-middle
m-4
z-0
flex
flex-col
content-between
`
export const ImgContainer = tw.div`
rounded
`

export const CardImg = tw.img`
max-w-imgwidth
self-center
rounded
`
export const CardText = tw.div`
flex
flex-col
`

export const Name = tw.span`
text-4xl
self-center
`
export const Description = tw.p`
text-white
text-lg
px-6
max-w-md
py-4
`
export const OpenProj = tw.a`
bg-green-600
rounded
py-2
p-4
mt-20
self-center
`