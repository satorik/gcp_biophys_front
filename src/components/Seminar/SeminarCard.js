import React from 'react'
import { getDateTimeToLocal } from '../../utils/dateFormat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SeminarCard = ({
  speaker,
  date,
  active,
  last,
  onSelectSeminar,
  onCampus,
}) => {
  const basis = 'd-flex flex-column'
  let navClass = `${basis} bg-light p-2 ${!last ? 'mb-1' : ''}`
  if (active) {
    navClass = `${basis} bg-danger text-white p-2 ${!last ? 'mb-1' : ''}`
  }

  const getIconColor = () => {
    if ((active && !onCampus) || (!active && onCampus))
      return { color: 'var(--danger)' }
    else return { color: 'var(--light)' }
  }

  const datetime = getDateTimeToLocal(date)

  return (
    <div
      className={navClass}
      style={{ cursor: 'pointer' }}
      onClick={onSelectSeminar}
    >
      <div className="d-flex justify-content-between">
        <span>
          <FontAwesomeIcon icon="home" style={getIconColor()} size="lg" />
        </span>
      </div>
      <div className="ml-2 mt-2">
        <p className="m-1">{speaker}</p>
        <p className="m-1">{datetime[0]}</p>
        <p className="m-1">{datetime[1]}</p>
      </div>
    </div>
  )
}

export default SeminarCard
