import React from 'react'
import {getDateToLocal} from '../../utils/dateFormat'
import EditButtons from '../UI/EditButtons'

 const ConferenceCard = ({dateFrom, dateTo, active, last, onSelectConference, onClickEdit, onClickDelete}) => {

  let navClass = `d-flex justify-content-between flex-wrap flex-row-reverse bg-light p-3 ${!last ? 'mb-1' : ''}`
  if (active) { navClass = `d-flex justify-content-between flex-wrap  flex-row-reverse bg-info text-white p-3 ${!last ? 'mb-1' : ''}` }

  return (
      <div className={navClass} style={{cursor:'pointer'}} onClick={onSelectConference}>
        <div>
          <EditButtons 
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
                size="sm"
                color="white"
                row
          />
        </div>
        <div>
          <p>{getDateToLocal(dateFrom)}</p>
          <p>{getDateToLocal(dateTo)}</p>
        </div>
      </div>
  )

}

export default ConferenceCard