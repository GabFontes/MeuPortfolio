import React from 'react'
import { NavigationBar, Knowledges, Projects, AboutMe } from '..'

export function Home() {
  return (
    <div>
      <NavigationBar/>
      <AboutMe/>
      <Knowledges/>
      <Projects/>
    </div>
  )
};

export default Home;