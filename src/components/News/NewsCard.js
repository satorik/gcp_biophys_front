import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {getDateToLocal} from '../../utils/dateFormat'
import {Link} from 'react-router-dom'

const NewsCard = ({date, dateFrom, dateTo, title, description, contentType, id}) => {

  let pDate = ''
  if (date) pDate = <div className="badge badge-info">{getDateToLocal(date)}</div>
  else pDate = <div className="d-flex flex-column">
    <div className="badge badge-warning mb-1">{getDateToLocal(dateFrom)}</div>
    <div className="badge badge-warning">{getDateToLocal(dateTo)}</div>
  </div>

  return (
    <li className="list-group-item">
     <div className="d-flex justify-content-between align-items-center">
        <h5>{pDate}</h5> 
        <Link to={`/${contentType}?id=${id}`}><FontAwesomeIcon icon="angle-right" color="black" /></Link> 
     </div>
      <p className="font-weight-bold m-0">{title}</p>
      <p className="m-0"> {description}</p>
    </li>

  )
}

export default NewsCard
