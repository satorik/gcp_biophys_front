import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import EditButtons from '../UI/EditButtons'

const FullPersonCard = ({
  imageUrl,
  lastname,
  middlename,
  firstname,
  jobTitle,
  desc,
  tel,
  mail,
  onEditClick,
  onDeleteClick,
  onClickUp,
  onClickDown,
  firstElement,
  lastElement,
}) => {
  return (
    <div className="col-md-6 mb-3 p-1">
      <div className="card h-100">
        <div
          className="card-header text-white text-center"
          style={{ backgroundColor: '#4818a0' }}
        >
          {lastname} {firstname} {middlename}
        </div>
        <div className="card-body">
          <EditButtons
            onClickEdit={onEditClick}
            onClickDelete={onDeleteClick}
            onClickUp={onClickUp}
            onClickDown={onClickDown}
            size="sm"
            color="black"
            row
            withArrowUp={!firstElement}
            withArrowDown={!lastElement}
          />
          <div className="container p-0 mt-1">
            <div className="row">
              <div className="col-lg-4 p-0 text-center mb-2">
                <img src={imageUrl} alt="" className="img-thumbnail" />
              </div>
              <div className="col-lg-8 justify-content-center">
                <p className="text-muted font-weight-bold">{jobTitle}</p>
                <p>{desc}</p>
                {tel && (
                  <p className="m-0">
                    <a
                      href={`tel:${tel}`}
                      style={{ color: '#4818a0', textDecoration: 'none' }}
                    >
                      <FontAwesomeIcon icon={faPhone} size="sm" /> {tel}
                    </a>
                  </p>
                )}
                {mail && (
                  <p className="m-0">
                    <a
                      href={`mailTo:${mail}`}
                      style={{ color: '#4818a0', textDecoration: 'none' }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} size="sm" /> {mail}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullPersonCard
