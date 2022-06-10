import tw from "tailwind-styled-components";

export const Title = tw.h1`
text-green-600
text-5xl
p-10
pb-0
flex
flex-wrap
justify-center
`

export const Knowledge = tw.h1`
text-white
bg-semineutral
h-full
flex
justify-center
flex-wrap
flex-col
font-mono
`

export const Card = tw.span`
max-w-sm
max-h-sm
rounded
shadow-md
align-middle
transform
transition
duration-500
hover:scale-110
border-b-8
border-green-600
border-t-8
m-4
z-0
flex
flex-col
`

export const ImgCard = tw.img`
${props => props.validation === 'GITHUB' ? 'bg-white rounded-full' : ''}
w-16
mt-5
`

export const CardName = tw.a`
font-bold
text-xl
mb-2
hover:underline
mt-4
self-center
`

export const CardDescription = tw.p`
text-white
text-xs
px-6
py-4
`

export const HeaderCard = tw.div`
justify-center
self-center
`

export const TechnologiesCard = tw.div`
flex
justify-center
self-center
flex-wrap
w-12/12
`