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
                        <div>
                            <p className='gothere'>
                                Want to get in touch or talk about a project?
                                Feel free to contact me via the form below
                            </p>
                            <form id='formcontents' action="">
                                <input id='name' type="text" placeholder='Name' />
                                <input id='subject' type="text" placeholder='Subject' />
                                <input id='email' type="text" placeholder='Email' />
                                <textarea id="messenger" name="freeform" rows="4" cols="50" placeholder='Enter your message here...'>

                                </textarea>
                                <input type="submit" value="Submit" className='submitbutton' />
                            </form>
                        </div>

                        <div className='sub-contact-content2'>
                            <div className='mail'>

                                <p class="linking">Feel free to contact me via email</p>
                                <a href="mailto:thisisadelakun@gmail.com">
                                    <p className='mails'><MdEmail /> thisisadelakun@gmail.com</p>
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