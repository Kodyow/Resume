import React from 'react'

export const header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <a className='smoothscroll' href='#about'>About</a>
                </li>
                <li>
                    <a className='smoothscroll' href='#resume'>Resume</a>
                </li>
                <li>
                    <a className='smoothscroll' href='#projects'>Projects</a>
                </li>
                <li>
                    <a className='smoothscroll' href='#contact'>Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default header;