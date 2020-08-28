import React from 'react'
import SeminarCard from './SeminarCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDateTimeToLocal } from '../../utils/dateFormat'

export const SelectPanel = ({ seminars, selectedId, onSelect }) => {
  const [isDDOpen, setIsDDOpen] = React.useState(false)

  const seminarMap = seminars.map((seminar, idx) => (
    <SeminarCard
      key={idx}
      date={seminar.date}
      speaker={seminar.speaker}
      active={selectedId === idx}
      last={idx === seminars.length - 1}
      onCampus={seminar.onCampus}
      onSelectSeminar={() => onSelect(idx)}
    />
  ))
  const toggleDropDown = () => {
    setIsDDOpen(!isDDOpen)
  }

  return (
    <>
      <div className="col-md-4 p-0 flex-column SeminarSelector">
        {seminarMap}
      </div>
      <div className="SeminarDropDown dropdown col-sm-12 bg-light p-1">
        <button
          className="btn btn-secondary text-right w-100"
          type="button"
          onClick={() => toggleDropDown()}
        >
          <FontAwesomeIcon
            icon="bars"
            style={{ color: 'var(--light)' }}
            size="lg"
          />
        </button>
        {isDDOpen && (
          <div
            className="list-group dropdown-menu m-1 p-0"
            onClick={() => setIsDDOpen(false)}
          >
            {seminars.map((seminar, idx) => (
              <div
                className="SeminarDropDownItem p-2 font-weight-bold text-secondary"
                key={idx}
              >
                <p className="text-wrap m-0">{seminar.speaker}</p>
                <p className="text-wrap m-0">
                  {getDateTimeToLocal(seminar.date).join(' ')}
                </p>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
