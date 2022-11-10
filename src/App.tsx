import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Homepage, Livepage, Footbar } from './components'
import { useState } from 'react'
import './scss/index.scss'
import Promotionpage from './components/Promotionpage'

type CurrentPage = 'home' | 'live' | 'promo'

function App() {
    const [currentPage, setCurrentPage] = useState<CurrentPage>('home')
    const [isCouponOpen, setIsCouponOpen] = useState<boolean>(false)

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar currentPage={currentPage} />
                <Routes>
                    <Route
                        path='/betclic-clone/'
                        element={
                            <Homepage
                                setCurrentPage={setCurrentPage}
                                setIsCouponOpen={setIsCouponOpen}
                                isCouponOpen={isCouponOpen}
                            />
                        }
                    />
                    <Route
                        path='/betclic-clone/live/'
                        element={<Livepage setCurrentPage={setCurrentPage} />}
                    />
                    <Route
                        path='/betclic-clone/promotion/'
                        element={
                            <Promotionpage setCurrentPage={setCurrentPage} />
                        }
                    />
                </Routes>
                <Footbar
                    setIsCouponOpen={setIsCouponOpen}
                    isCouponOpen={isCouponOpen}
                />
            </div>
        </BrowserRouter>
    )
}

export default App
