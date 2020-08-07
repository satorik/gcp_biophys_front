import React from 'react'
import GroupCard from './GroupCard'
import EditButtons from '../UI/EditButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScienceGroupListItem = ({groupObject, active, updatedArticle, updatedPerson}) => {

  const color = active ? 'white' : 'dark-grey'
  const divClass='d-flex justify-content-between card-header'
  const divStyle = active ? {backgroundColor:'#dc3545', color:'white', cursor:'pointer'} : { cursor:'pointer'}
  return (
    <>
    <div className={divClass} style={divStyle} onClick={groupObject.onViewInfo}>
      <div className="w-100">
        <p className="font-weight-bold">{groupObject.title}</p>
        <p className="m-0"><span>т.:</span> <span className="mr-4">{groupObject.tel}</span></p>
        <p className="m-0"><span>к.:</span> <span className="mr-4">{groupObject.room}</span></p>
      </div>
      
      <EditButtons 
          onClickEdit={groupObject.onEditInfo}
          onClickDelete={groupObject.onDelete}
          size="sm"
          color={color}
      />
    </div>
      {active && 
        <GroupCard 
          group={groupObject} 
          articleForUpdate = {updatedArticle}
          personForUpdate = {updatedPerson}
        />
      }
    </>
  )
}

export default ScienceGroupListItem
