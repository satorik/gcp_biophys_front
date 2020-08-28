import React from 'react'
import EditButtons from '../UI/EditButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FileCard = ({
  fileLink,
  description,
  title,
  onEditClick,
  onDeleteClick,
  filetype,
}) => {
  const pdfDiv = (
    <div className="d-flex list-group-item align-items-center">
      <a href={fileLink} className="mr-2">
        <FontAwesomeIcon
          icon="file-download"
          style={{ color: 'var(--cyan)' }}
          size="lg"
        />
      </a>
      <div className="d-flex flex-wrap text-left">
        <p className=" m-0 mr-2 font-weight-bold">{title}</p>
        <p className="text-muted m-0">{description}</p>
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
  )
  const urlDiv = (
    <div className="bg-white border p-3 mb-1">
      <div className="d-flex flex-wrap text-left justify-content-between">
        <p className="m-0 font-weight-bold">{title}</p>
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
      <p className="text-muted font-weight-bold m-0 text-left mb-2">
        {description}
      </p>
      <iframe
        className="embed-responsive-item"
        title={title}
        src={fileLink}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )

  return filetype === 'PDF' ? pdfDiv : urlDiv
}
