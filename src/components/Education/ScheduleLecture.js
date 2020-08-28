import React, { useEffect } from 'react'
import EditButtons from '../UI/EditButtons'

const ScheduleLecture = ({
  timeFrom,
  timeTo,
  discipline,
  lector,
  lectureHall,
  width,
  color,
  isShift,
  startFrom,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <>
      {isShift && <div className="col-6"></div>}
      <div className="col-2 bg-danger text-white border-bottom border-white d-flex flex-row justify-content-between flex-wrap">
        <div className="align-self-start">
          <EditButtons
            onClickEdit={onEditClick}
            onClickDelete={onDeleteClick}
            size="sm"
            color="white"
            row
          />
        </div>
        <div className="d-flex flex-column justify-content-around align-self-center">
          <p className="m-0 font-weight-bold">{timeFrom}</p>
          <p className="m-0 font-weight-bold">{timeTo}</p>
        </div>
      </div>
      <div
        className={`${width} border-bottom border-white d-flex flex-column justify-content-around`}
        style={{ backgroundColor: color }}
      >
        <div className="d-flex justify-content-between flex-wrap">
          <p className="m-0 text-danger text-center">{lectureHall}</p>
          <p className="m-0 text-danger">{startFrom ? startFrom : null}</p>
        </div>
        <div>
          <p className="font-weight-bold m-0">{discipline}</p>
          <p className="font-italic m-0">{lector}</p>
        </div>
      </div>
    </>
  )
}

export default ScheduleLecture
