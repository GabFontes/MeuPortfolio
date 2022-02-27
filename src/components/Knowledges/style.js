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
`

export const Card = tw.span`
max-w-sm
rounded
shadow-md
text-2xl
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
mr-3
`

export const CardName = tw.span`
font-bold
text-xl
mb-2
hover:underline
mt-8
`

export const CardDescription = tw.p`
text-white
text-base
px-6 py-4
`

export const HeaderCard = tw.div`
flex justify-center
`

export const TechnologiesCard = tw.div`
flex
justify-center
self-center
flex-wrap
`