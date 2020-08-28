import React from 'react'
import NavigationItems from './NavigationItems'

const NavigationList = ({ subLinks }) => {
  return (
    <div className="container-fluid bg-dark text-white d-flex flex-wrap justify-content-center p-0">
      {subLinks.map((subLink, idx) => (
        <NavigationItems
          key={subLink.id}
          title={subLink.title}
          id={subLink.id}
          path={subLink.root + subLink.path}
          onEdit={subLink.onEdit}
          onDelete={subLink.onDelete}
        />
      ))}
    </div>
  )
}

export default NavigationList
