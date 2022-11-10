import { Sidebar, LivepageMain, RightBar } from './'
import { useEffect } from 'react'

interface LivepageProps {
    setCurrentPage: Function
}

const Livepage = ({ setCurrentPage }: LivepageProps) => {
    useEffect(() => {
        setCurrentPage('live')
    }, [])

    return (
        <div className='livepage'>
            <Sidebar />
            <LivepageMain />
            <RightBar setIsCouponOpen={() => {}} isCouponOpen={false} />
        </div>
    )
}

export default Livepage
