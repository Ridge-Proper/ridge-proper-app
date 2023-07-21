'use client'

import { useState } from "react";
import Image from "next/image";

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(e: React.FormEvent<HTMLInputElement>): void {
        const searchText = e.currentTarget.value;
        setSearchTerm(searchText)
    
    }
    
    function handleSearch(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        console.log("Search term: ", searchTerm)

    }

    return (
        <form
            onSubmit={handleSearch} >
            <input
                type="text"
                placeholder="Search for blog topics, gear reviews..."
                value={searchTerm}
                onChange={handleChange} />
            <button 
                type="submit" >
                <Image
                    src="/icons/search-icon.png"
                    alt="click to search"
                    height={25}
                    width={25}
                    style={{ width: 'auto', height: 'auto' }} />
            </button>
        </form>
    )
}

export default SearchBar