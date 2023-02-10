import React from 'react'
import '../Styles/Contact.css'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ImHeart } from 'react-icons/im'



const Contact = () => {
    return (
        <div class="contacts" id="contact-me">
            <div class="">
                <div class="contact-content">
                    <h2>Hi there,</h2>
                    <p class="intouch">
                        Let's discuss your project.<br />
                    </p>

                    <div className='sub-contact-content'>
                        <div className='sub-contact-content2'>
                            <div className='mail'>
                                <p class="linking">Feel free to contact me via email</p>
                                <a href="mailto:adelakunabayomi123@gmail.com">
                                    <p className='mails'><MdEmail /> adelakunabayomi123@gmail.com</p>
                                </a><br />
                                <p class="links">Or find me on:</p>
                            </div>

                            <div className='socialmedia'>
                                <a href="https://www.linkedin.com/in/abayomi-adelakun-897227178" target="blank">
                                    <FaLinkedin /> Linkedin
                                </a>
                                <a href="https://instagram.com/thisisadelakun?igshid=YmMyMTA2M2Y=" target="blank">
                                    <FaInstagram /> Instagram
                                </a>
                                <a href="https://github.com/thisisadelakun" target="blank">
                                    <FaGithub /> Github
                                </a>
                                <a href="https://twitter.com/thisisadelakun?s=11&t=p8KES3QWDuTVQAluQEAB6Q" target="blank">
                                    <FaTwitter />Twitter
                                </a>
                            </div>
                            <div className='madewithlove'>
                                <p className='madewith'>Made with  <ImHeart /> by<a href="https://instagram.com/thisisadelakun?igshid=YmMyMTA2M2Y=" target="blank">@thisisadelakun</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Contact