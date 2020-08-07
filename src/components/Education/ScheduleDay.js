import React from 'react'
import ScheduleTime from './ScheduleTime'
import {getTimeToLocal} from '../../utils/dateFormat'
import ButtonAddNew from '../UI/ButtonAddNew'
import Edit from '../Shared/Edit'

const ScheduleDay = ({scheduleDay, dayTitle, currentWeek,  timeMode, onCreate, onCancel, onSave, isDayUpdating, dayTemplate, updatedTime}) => {

  const consolidatedDayWithDoubles = [] 
  if (scheduleDay.length > 0) {
    scheduleDay.forEach( elem => {
      if (elem.isDouble) {
        const doubleArray = []
        const doubleElem = scheduleDay.find(x => +x.id === elem.isDouble)
        doubleArray.push(elem)
        doubleArray.push(doubleElem)
        scheduleDay.splice(scheduleDay.indexOf(doubleElem), 1)
        consolidatedDayWithDoubles.push(doubleArray)  
      }
      else {
        consolidatedDayWithDoubles.push(elem)
      }
    })
  }


  const dayEmpty = consolidatedDayWithDoubles.length === 0
  let startTime = ''
  
  if (!dayEmpty) {startTime = getTimeToLocal(scheduleDay[0].timeFrom)} 

  return (
    <>
    <div className="row">
      <div className="bg-dark text-white col-md-12 d-flex p-3 justify-content-between">
          <h5 className="m-0">{dayTitle}</h5>
          <p>Начало занятий: {startTime}</p>
      </div>
    </div>
    <div>
       {!dayEmpty && consolidatedDayWithDoubles.map((scheduleDayTime, index) => 
          <ScheduleTime 
            consolidatedTime={scheduleDayTime} 
            currentWeek = {currentWeek} 
            key={index}

          />)
        } 
       {!timeMode.isCreating &&
        <ButtonAddNew
                color='orange'
                block
                onClickAddButton={onCreate}
                size='2'
          />
       }
       {
        timeMode.isCreating && isDayUpdating &&
        <Edit 
          onClickSubmit={onSave}
          onClickCancel={onCancel}
          post={updatedTime}
          formTemplate={dayTemplate}
          border
        />
       }
    </div>
    </>
  )
}

export default ScheduleDay
