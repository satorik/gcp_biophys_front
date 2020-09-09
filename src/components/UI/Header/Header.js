import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderBlog from './HeaderBlog'
import GradientHeader from './GradientHeader'
import QuoteHeader from './QuoteHeader'
import HeaderNews from './HeaderNews'

const Header = () => {
  const currentPath = useLocation().pathname
  const currentSection = currentPath.split('/')[1]

  switch (currentSection) {
    case 'blogpost':
      return <HeaderBlog />
    case 'conference':
      return (
        <GradientHeader
          header="https://storage.googleapis.com/biophys-node-dck.appspot.com/images/header/header-conference.jpg"
          title="Конференции"
          quote="В науке люди пытаются объяснить как можно понятнее что-то, чего дугие не знают. Но в поэзии все наоборот."
          author="Поль Дирак"
          when="(1902 - 1984)"
        />
      )
    case 'seminar':
      return (
        <GradientHeader
          header="https://storage.googleapis.com/biophys-node-dck.appspot.com/images/header/header-seminar.jpg"
          title="Семинары и Доклады"
          quote="В науке люди пытаются объяснить как можно понятнее что-то, чего дугие не знают. Но в поэзии все наоборот."
          author="Поль Дирак"
          when="(1902 - 1984)"
        />
      )
    case 'education':
      return (
        <QuoteHeader header="https://storage.googleapis.com/biophys-node-dck.appspot.com/images/header/header-education.jpg" />
      )
    case 'science':
      return (
        <QuoteHeader
          header="https://storage.googleapis.com/biophys-node-dck.appspot.com/images/header/header-science.jpg"
          title="наука"
          quote="Природа с красоты своей;
                  Покрова снять не позволяет,;
                  И ты машинами не вынудишь у ней,;
                  Чего твой дух не угадает.;"
          author="Владимир Соловьев"
          when="(1853-1900)"
        />
      )
    case 'department':
      return (
        <QuoteHeader header="https://storage.googleapis.com/biophys-node-dck.appspot.com/images/header/header-department.jpg" />
      )
    // case 'news':
    //   return <HeaderNews />
    default:
      return <HeaderNews />
  }
}

export default Header
