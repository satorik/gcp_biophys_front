import React from 'react'
import ConferenceCard from './ConferenceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDateToLocal } from '../../utils/dateFormat'

export const SelectPanel = ({ conferences, selectedId, onSelect }) => {
  const [isDDOpen, setIsDDOpen] = React.useState(false)

  const conferenceMap = conferences.map((conference, idx) => (
    <ConferenceCard
      key={idx}
      dateFrom={conference.dateFrom}
      dateTo={conference.dateTo}
      active={selectedId === idx}
      last={idx === conferences.length - 1}
      onSelectConference={() => onSelect(idx)}
    />
  ))
  const toggleDropDown = () => {
    setIsDDOpen(!isDDOpen)
  }

  return (
    <>
      <div className="col-md-4 p-0 flex-column ConferenceSelector">
        {conferenceMap}
      </div>
      <div className="ConferenceDropDown dropdown col-sm-12 bg-light p-1">
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
            {conferences.map((conference, idx) => (
              <div
                className="ConferenceDropDownItem p-2 font-weight-bold text-secondary"
                key={idx}
                onClick={() => onSelect(idx)}
              >
                <p className="text-wrap m-0">{conference.title}</p>
                <p className="text-wrap m-0">
                  {getDateToLocal(conference.dateFrom)}
                </p>
                <p className="text-wrap m-0">
                  {getDateToLocal(conference.dateTo)}
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
