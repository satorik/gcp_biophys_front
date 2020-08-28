import React from 'react'
import AuthContext from '../../context/AuthContext'
import ButtonAddNew from './ButtonAddNew'

export const ButtonAddResourse = ({ onClick }) => {
  const { currentUser } = React.useContext(AuthContext)
  const isAuth = currentUser.token !== null

  if (!isAuth) return null

  return (
    <div className="p-2">
      <div className="btn btn-outline-secondary p-3 w-100">
        <ButtonAddNew color="orange" onClickAddButton={onClick} size="2" />
      </div>
    </div>
  )
}
