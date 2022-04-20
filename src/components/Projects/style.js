import tw from "tailwind-styled-components";

export const ProjectsHeader = tw.div`
bg-neutral
flex
justify-center
flex-wrap
flex-col
`

export const Title = tw.span`
text-green-600
text-5xl
p-16
pb-0
flex
flex-wrap
justify-center
`

export const ProjIcon = tw.img`
self-center
pt-8
`

export const ProjContainer = tw.div`
container
bg-neutral
mt-24
mx-auto
p-4
md:p-0
h-5/6
w-full
font-mono 
`

export const CardWrapper = tw.div`
cardwrapper
shadow-lg
lg:w-6/12
md:w-4/12
mx-auto
w-full
flex
justify-center
items-center
flex-col
`

export const CardImg = tw.div`
cardimg
w-full
md:h-auto
rounded-2
`

export const CardBody = tw.div`
cardbody
bg-semineutral
text-white
lg:h-full
w-full
md:h-6/12
p-6
-mt-6 
md:mt-0
relative
mb-4 
md:mb-0 
flex 
flex-row
md:flex-wrap
items-center
`

export const CardBodyOuter = tw.div`
cardbodyouter
h-full
mx-auto 
`

export const CardBodyInner = tw.div`
cardbodyinner
bg-semineutral
text-white
lg:h-full
w-full
p-6
-mt-6 
md:mt-0
relative
mb-4 
md:mb-0 
flex 
flex-wrap
items-center
`

export const CardTitle = tw.div`
cardtitle
text-green-600
pb-4
w-full
text-3xl
text-center
`
export const CardDescription = tw.div`
carddescription
w-full
`

export const TextOfDescription = tw.p`
textofdescription
text-md
mt-4
lg:mt-0
text-justify
md:text-left
text-sm
`

export const CardButton = tw.div`
cardbutton
w-full
mt-6
`

export const Button = tw.a`
button
self-center
bg-green-600
hover:bg-white
hover:text-green-600
hover:scale-105
duration-300
rounded
w-full
py-2
text-center
`