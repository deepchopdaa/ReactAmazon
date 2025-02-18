import React from 'react'
import image1 from "../images/186x116---wm._SY116_CB667322346_.jpg"
import image2 from "../images/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
import image3 from "../images/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
import image4 from "../images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
import "./card.css"
const Card = () => {
    return (
        <>
            
                        <div className='card'>
                            <div className='cardHeader'>
                                <h5>Application for Your Home | UP to 55% Off</h5>
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <div className='block'>
                                        <img src={image1} alt="product image" height="100px" width="120px" />
                                        <h6>washing machine</h6>
                                    </div>
                                    <div className='block'>
                                        <img src={image2} alt="product image" height="100px" width="120px" />
                                        <h6>microwave oven</h6>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='block'>
                                        <img src={image3} alt="product image" height="100px" width="120px" />
                                        <h6>Air coditionar</h6>
                                    </div>
                                    <div className='block'>
                                        <img src={image4} alt="product image" height="100px" width="120px" />
                                        <h6>Refrigerator</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='cardFooter'>
                                <h6>See more</h6>
                            </div>
                        </div>
                    
           

        </>
    )
}

export default Card
