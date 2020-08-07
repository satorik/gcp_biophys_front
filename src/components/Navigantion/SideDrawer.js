import React from 'react'
import NavBarTopItem from './NavBarTopItem'
import LoginForm  from '../Auth/LoginForm'
import Modal from '../UI/Modal'
import AuthContext from '../../context/AuthContext'
import {useLocation} from 'react-router-dom'
import {LoginButton} from '../UI/LoginButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Backdrop from '../UI/Backdrop'


const LINKS = [
  {
    path: '/department',
    title: 'Кафедра'
  },
  {
    path: '/seminar',
    title: 'Семинары'
  },
  {
    path: '/conference',
    title: 'Конференции'
  },
  {
    path: '/blogpost',
    title: 'Блог'
  },
  {
    path: '/education',
    title: 'Учебный процесс'
  },
  {
    path: '/science',
    title: 'Наука'
  },
  {
    path: '/admin',
    title: 'Администрирование',
    type: 'closed'
  }
]



const SideDrawer = () => {

  const currentPath = useLocation().pathname
  const { currentUser, setCurrentUser } = React.useContext(AuthContext)

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  
  const onLoginButton = () => {
    setIsModalOpen(true)
    setIsDrawerOpen(false)
  }
  const modalTitle='Авторизация'

  const topPanel =  <nav className="navbar navbar-dark bg-dark SideDrawerNav">
    <button className="btn p-0" onClick={() => setIsDrawerOpen(true)}><span><FontAwesomeIcon icon='bars' style={{color: 'var(--light)'}} size="lg"/></span></button>
  </nav>


  const slidePanel = <nav className="navbar navbar-dark bg-dark SideDrawer d-flex flex-column justify-content-start align-items-start flex-nowrap">
        <button type="button" className="close text-light ml-auto" aria-label="Close" onClick={() => setIsDrawerOpen(false)}>
            <span aria-hidden="true">&times;</span>
        </button>
        <a className="navbar-brand" href="/">БИОФИЗИКА</a>
        <ul className="navbar-nav mb-2" onClick={() => setIsDrawerOpen(false)}>
            {LINKS.map((link, idx) => {
              if (link.type !== 'closed' || (currentUser.token && currentUser.role === 'ADMIN')) return <NavBarTopItem link={link} key={idx} selectedPath={currentPath.split('/')[1]} />
              else return null
            })}
        </ul>
        <LoginButton 
          onClickLoginButton={() => onLoginButton()}
          username={currentUser.username}
          size="sm"
        />
  </nav>

  return (
      <>
      {isModalOpen && <Modal 
        isOpen={isModalOpen}
        title={modalTitle}
        onClose={() => setIsModalOpen(false)}
      >
        <LoginForm onCancel={() => setIsModalOpen(false)} isAuth={currentUser.username} updatedAuth={setCurrentUser}/>
      </Modal> }

        {!isDrawerOpen && topPanel}
        {isDrawerOpen && <><Backdrop show={isDrawerOpen} clicked={() => setIsDrawerOpen(false)}/> {slidePanel}</>}

    </>
  )
}

export default SideDrawer
