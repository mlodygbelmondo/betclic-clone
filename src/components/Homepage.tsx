import { Sidebar, HomepageMain, RightBar } from './'
import { useEffect } from 'react'

interface HomepageProps {
    setCurrentPage: Function
    setIsCouponOpen: Function
    isCouponOpen: boolean
}

const Homepage = ({
    setCurrentPage,
    setIsCouponOpen,
    isCouponOpen,
}: HomepageProps) => {
    useEffect(() => {
        setCurrentPage('home')
    }, [])

    return (
        <div className='homepage'>
            <Sidebar />
            <HomepageMain />
            <RightBar
                setIsCouponOpen={setIsCouponOpen}
                isCouponOpen={isCouponOpen}
            />
        </div>
    )
}

export default Homepage
