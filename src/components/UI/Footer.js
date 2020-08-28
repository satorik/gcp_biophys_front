import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white mt-5">
      <div className="text-right p-1" style={{ fontSize: '0.8rem' }}>
        <p className="m-0">
          119234, Россия, Москва, Ленинские горы, д. 1, стр. 24,
        </p>
        <p className="m-0">Кафедра биофизики биологического факультета МГУ</p>
        <p className="m-0">
          <a
            href="tel:+7(495)939-11-16"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon="phone" size="sm" /> +7 (495) 939-11-16
          </a>
        </p>
        <p className="m-0">
          <a
            href="mailTo:biophys_site@gmail.com"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon="envelope" size="sm" /> biophys_site@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
