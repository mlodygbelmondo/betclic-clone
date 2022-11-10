import React, { useState } from 'react'

const SearchBar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [inputContent, setInputContent] = useState<string>('')

    const handleChange = (e: any) => {
        const inputValue = e.target.value
        console.log(inputValue)
        setInputContent(inputValue)
    }

    return (
        <div className='search-bar-container'>
            <i className='fa-solid fa-magnifying-glass'></i>
            <input
                type='text'
                placeholder='Szukaj'
                onChange={handleChange}
                value={inputContent}
            />
            <i
                className='fa-sharp fa-solid fa-circle-xmark'
                style={{
                    visibility: inputContent.length ? 'visible' : 'hidden',
                }}
                onClick={(e) => {
                    setInputContent('')
                }}
            ></i>
        </div>
    )
}

export default SearchBar
