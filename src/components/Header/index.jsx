import React from 'react'

function Header({appTitle, btnObj}) {
  return (
    <header className="header d-flex justify-content-between align-items-center">
        <div className="left">
            <h1>{appTitle}</h1>
        </div>
        <div className="right">
            <button className="btn btn-primary " onClick={btnObj.handle}>{btnObj.title}</button>
        </div>
    </header>
  )
}

export default Header