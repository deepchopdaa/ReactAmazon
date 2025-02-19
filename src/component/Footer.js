import React from 'react'
import logo from "../images/logo-brand-amazon-american-international-commerce-company-logo-brand-amazon-american-international-commerce-company-209364080.png"
import india from "../images/images.png"
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import "./footer.css"
import LanguageIcon from '@mui/icons-material/Language';
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='backtotop'>
                    <div className='content'>
                        Back to top
                    </div>
                </div>

                <div className='footer-detail container-fluid'>
                    <div className='fdata row'>
                        <div className='first col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='Fheader'>Get to Know Us</div>
                            <ul className='flist'>
                                <li>About Amazon</li>
                                <li>Career</li>
                                <li>Press Releases</li>
                                <li>Amazon Science</li>
                            </ul>
                        </div>
                        <div className='first col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='Fheader'>Connect with Us</div>
                            <ul className='flist'>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className='first col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='Fheader'>Make Money With Us</div>
                            <ul className='flist'>
                                <li>Sell on Amazon</li>
                                <li>Sell under Amazon Accletor</li>
                                <li>protected and Build Your Brand</li>
                                <li>Amazon Science</li>
                                <li>Sell under Amazon Accletor</li>
                                <li>protected and Build Your Brand</li>
                                <li>Amazon Science</li>
                                <li>Sell under Amazon Accletor</li>
                                <li>protected and Build Your Brand</li>
                                <li>Amazon Science</li>
                            </ul>
                        </div>
                        <div className='first col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='Fheader'>Let us Help You</div>
                            <ul className='flist'>
                                <li>Your Account </li>
                                <li>Return center</li>
                                <li>100% Purchase Protection</li>
                                <li>Amazon App download</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='middle'>
                    <div className='main'>
                        <div className='submain'>
                            <div className='flogo'>
                                <img src={logo} alt='amazon logo' height='50px' width='100px' />
                            </div>
                            <div className='flanguage'>
                                <LanguageIcon className='lanicon'/>
                                <span>English</span>
                                <UnfoldMoreIcon className='lanicon'/>
                            </div>
                            <div className='fcountry'>
                                <img src={india} alt='india image' height='10px' width='10px' style={{margin:"5px"}} /><span>india</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fservice container-fluid'>
                    <div className='mainservice'>
                        <ul className='row'>
                            <li className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                                <h6>Abebooks</h6>
                                <span>Books , art<br></br> & collectibles</span>
                            </li>
                            <li className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                                <h6>Amazon Web services</h6>
                                <span>Scalable Cloud<br></br> Computing services</span>
                            </li>
                            <li className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                                <h6>Audiable</h6>
                                <span>Download<br></br> Audio Books</span>
                            </li>
                            <li className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                                <h6>IMDB</h6>
                                <span>Movies , TV <br></br> & celebrities</span>
                            </li>
                        </ul>
                        <ul className='row'>
                            <li className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                                <h6>Shopbop</h6>
                                <span>Designer<br></br> Fasion Brands</span>
                            </li>
                            <li className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                                <h6>Amazon Business</h6>
                                <span>Everything for<br></br> Your Business</span>
                            </li>
                            <li className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                                <h6>Prime Now</h6>
                                <span>2+ home Delivery<br></br> on Everything Item</span>
                            </li>
                            <li className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                                <h6>Amazon Prime Music</h6>
                                <span>100 million songs,ad-free<br></br> over 15 episode</span>
                            </li>
                        </ul>
                    </div>
                    <div className='flast'>
                        <ul>
                            <li>Conditions of use & sale</li>
                            <li>Privacy Notice</li>
                            <li>Interest-based ads</li>
                        </ul>
                        <span>1996-2025,Amazon.com,inc. or its affilates</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
