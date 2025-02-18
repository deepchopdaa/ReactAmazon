import React from 'react'
import Card from './card'

const CardBlock = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left'>
                        <Card />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left'>
                        <Card />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left'>
                        <Card />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left'>
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBlock
