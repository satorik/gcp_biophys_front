import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LoginButton = ({onClickLoginButton, username}) => {
  const displayName = username || 'Войти'
  const displayButton =  <p className="text-light m-0 p-0"><FontAwesomeIcon icon='user-graduate' size="lg" style={{marginRight:'10px'}}/>{displayName}</p>

  return <button className="btn p-0" onClick={onClickLoginButton}>{displayButton}</button>

}
