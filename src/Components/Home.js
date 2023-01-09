import React from 'react'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import MyProjects from './MyProjects'



const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <MyProjects/>
        <Contact/>
    </div>
  )
}

export default Home