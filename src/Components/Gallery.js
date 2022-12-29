import React, { useEffect, useState } from 'react'
// import { Carousel } from '@sefailyasoz/react-carousel'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const Gallery = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

            fetch('http://127.0.0.1:8000/api/task-list/')
                .then((res) => res.json())
                .then((rep) => setData(rep.data), setIsLoading(false))
        }, 3000)

    })
    if (isLoading) {
        return (
            <div className='itsloading'>
                <p> its loading</p>
                {/* <ContentLoader
                    speed={2}
                    width={500}
                    height={160}
                    viewBox="50 0 400 130"
                    backgroundColor="#ededed"
                    foregroundColor="#f2f2f2"
                    {...props}
                >
                    <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
                    <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
                    <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
                </ContentLoader> */}
            </div>
        )
    }

    return (
        <div className='rendering'>
            <div className='rendernew'>
                {data.map((datum) => {
                    const { id, title, thumbnail } = datum
                    return (
                        <div className='dating'>
                            <div id='datumss' key={id}>
                                <p className='symbolsss'>{title} </p>
                                <img src={thumbnail} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery