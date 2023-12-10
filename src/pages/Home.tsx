import { Box } from '@mui/material'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
// import SocialIcon from '../components/SocialIcon/SocialIcon'
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon'

const Home = () => {
  return (
    <Box>
      <Hero/>
      <Projects />
      <About />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </Box>
  )
}

export default Home
