import { Sidebar, PromotionpageMain, RightBar } from './'
import { useEffect } from 'react'

interface PromotionpageProps {
    setCurrentPage: Function
}

const Promotionpage = ({ setCurrentPage }: PromotionpageProps) => {
    useEffect(() => {
        setCurrentPage('promo')
    }, [])

    return (
        <div className='promotionpage'>
            <Sidebar />
            <PromotionpageMain />
            <RightBar setIsCouponOpen={() => {}} isCouponOpen={false} />
        </div>
    )
}

export default Promotionpage
