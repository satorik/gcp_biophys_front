import React from 'react'
import EditButtons from '../UI/EditButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const TextbookCard = ({
  title,
  description,
  onEditClick,
  onDeleteClick,
  fileLink,
}) => {
  return (
    <div className="bg-white border p-3 h-100">
      <div className="d-flex text-left mb-2 align-items-baseline">
        <a href={fileLink} className="mr-3">
          <FontAwesomeIcon
            icon="file-download"
            style={{ color: 'var(--cyan)' }}
            size="4x"
          />
        </a>
        <div>
          <h3 className=" m-0 mr-2 font-weight-bold">{title}</h3>
          <h5 className="text-muted m-0">{description}</h5>
        </div>
        <div className="ml-auto">
          <EditButtons
            onClickEdit={onEditClick}
            onClickDelete={onDeleteClick}
            size="sm"
            color="black"
            row
          />
        </div>
      </div>
    </div>
  )
}
