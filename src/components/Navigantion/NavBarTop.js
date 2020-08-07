import React from 'react'
import NavBarTopItem from './NavBarTopItem'
import LoginForm  from '../Auth/LoginForm'
import Modal from '../UI/Modal'
import AuthContext from '../../context/AuthContext'
import {useLocation} from 'react-router-dom'
import {LoginButton} from '../UI/LoginButton'


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


const NavBarTop = () => {

  const currentPath = useLocation().pathname
  const { currentUser, setCurrentUser } = React.useContext(AuthContext)

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const modalTitle='Авторизация'

  return (
      <>
      {isModalOpen && <Modal 
        isOpen={isModalOpen}
        title={modalTitle}
        onClose={() => setIsModalOpen(false)}
      >
        <LoginForm onCancel={() => setIsModalOpen(false)} isAuth={currentUser.username} updatedAuth={setCurrentUser}/>
      </Modal> }

      <nav className="navbar navbar-dark navbar-expand-md bg-dark NavBarTop" >
        <a className="navbar-brand" href="/">БИОФИЗИКА</a>
        <ul className="navbar-nav mr-auto">
            {LINKS.map((link, idx) => {
              if (link.type !== 'closed' || (currentUser.token && currentUser.role === 'ADMIN')) return <NavBarTopItem link={link} key={idx} selectedPath={currentPath.split('/')[1]} />
              else return null
            })}
        </ul>
        <LoginButton 
          onClickLoginButton={() => setIsModalOpen(true)}
          username={currentUser.username}
          size="lg"
        />
      </nav>
      </>
  )
}

export default NavBarTop
