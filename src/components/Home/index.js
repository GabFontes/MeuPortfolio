import React from 'react'
import { NavigationBar, Knowledges, Projects, AboutMe } from '..'
import { useState } from 'react'
import { Button, UploadImg, ImgWrapper } from './style'
import upArrow from '../../images/icons/fast-forward.png'

export function Home() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="subpixel-antialiased">
      <NavigationBar />
      <AboutMe />
      <Knowledges />
      <Projects />
      <Button
        style={{ display: visible ? 'inline' : 'none' }}
        type="button"
        onClick={scrollToTop}
      >
        <ImgWrapper>
          <UploadImg
            src={upArrow}
            alt="Up arrow icons created by Freepik - Flaticon"
          />
        </ImgWrapper>
      </Button>
    </div>
  )
};

export default Home;