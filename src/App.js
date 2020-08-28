import React from 'react'
import './App.css'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import AuthContext from './context/AuthContext'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleLeft,
  faAngleRight,
  faCaretUp,
  faCaretDown,
  faCircle,
  faPlus,
  faBars,
  faArrowUp,
  faArrowDown,
  faFileDownload,
  faEye,
  faPhone,
  faEnvelope,
  faUserGraduate,
  faHome,
  faCheck,
  faUserTie,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import {
  faEdit,
  faTrashAlt,
  faPlusSquare,
} from '@fortawesome/free-regular-svg-icons'

import Header from './components/UI/Header/Header'
import NavBarTop from './components/Navigantion/NavBarTop'
import News from './News'
import Blog from './Blog'
import Seminar from './Seminar'
import Conference from './Conference'
import Department from './Department'
import Science from './Science'
import Education from './Education'
import { AdminPanel } from './AdminPanel'
import { ActivationPage } from './components/Auth/ActivationPage'
import { RecoveryPage } from './components/Auth/RecoveryPage'
import SideDrawer from './components/Navigantion/SideDrawer'
import { Footer } from './components/UI/Footer'

library.add(
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faCaretUp,
  faCircle,
  faPlus,
  faEdit,
  faHome,
  faBars,
  faTrashAlt,
  faArrowUp,
  faArrowDown,
  faFileDownload,
  faEye,
  faPlusSquare,
  faPhone,
  faEnvelope,
  faUserGraduate,
  faCheck,
  faUserTie,
  faTrash
)

const initialState = {
  userId: localStorage.getItem('userId'),
  token: localStorage.getItem('token'),
  tokenExpiration: localStorage.getItem('tokenExpiration'),
  username: localStorage.getItem('username'),
  role: localStorage.getItem('role'),
}

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(initialState)

  const isSmall = window.matchMedia('(max-width: 813px)').matches

  return (
    <BrowserRouter>
      <>
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
          <NavBarTop />
          <SideDrawer />
          <Header />
          <Switch>
            <Redirect from="/" exact to="/news" />
            <Route path="/news" component={News} />
            <Route path="/blogpost" component={Blog} />
            <Route path="/seminar" component={Seminar} />
            <Route path="/conference" component={Conference} />
            <Route
              path="/department"
              render={props => <Department {...props} />}
            />
            <Route path="/science" component={Science} />
            <Route
              path="/education"
              render={props => <Education {...props} />}
            />
            <Route
              path="/account/activation/:code"
              component={ActivationPage}
            />
            <Route path="/account/recovery/:code" component={RecoveryPage} />
            {currentUser.token && currentUser.role === 'ADMIN' ? (
              <Route path="/admin" component={AdminPanel} />
            ) : null}
          </Switch>
          <Footer />
        </AuthContext.Provider>
      </>
    </BrowserRouter>
  )
}

export default App
