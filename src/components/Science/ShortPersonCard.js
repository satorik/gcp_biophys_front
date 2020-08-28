import React from 'react'
import EditButtons from '../UI/EditButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ShortPersonCard = ({
  firstname,
  lastname,
  middlename,
  description,
  onEditClick,
  onDeleteClick,
  onClickUp,
  onClickDown,
  firstElement,
  lastElement,
  tel,
  mail,
  urlIstina,
  urlRints,
  urlOrcid,
  urlResearcher,
  urlScopus,
  englishName,
}) => {
  return (
    <div className="pl-2 mb-2" style={{ borderLeft: '4px solid #fd7e14' }}>
      <div className="d-flex align-items-start flex-wrap">
        <p className="font-weight-bold mr-2 my-0">
          {lastname} {firstname} {middlename}
        </p>
        <p className="text-muted mr-2 my-0">
          {englishName && `(${englishName})`}
        </p>
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
      </div>
      <small className="text-muted">{description}</small>
      <div className="d-flex flex-wrap">
        {tel && (
          <div className="mr-2">
            <a
              href={`tel:${tel}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <FontAwesomeIcon
                icon="phone"
                size="sm"
                style={{ color: '#4818a0' }}
              />{' '}
              {tel}
            </a>
          </div>
        )}
        {mail && (
          <div>
            <a
              href={`mailTo:${mail}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <FontAwesomeIcon
                icon="envelope"
                size="sm"
                style={{ color: '#4818a0' }}
              />{' '}
              {mail}
            </a>
          </div>
        )}
      </div>
      <div>
        {urlIstina && (
          <a href={urlIstina} className="mr-1">
            ИСТИНА
          </a>
        )}
        {urlRints && (
          <a href={urlRints} className="mr-1">
            РИНЦ
          </a>
        )}
        {urlOrcid && (
          <a href={urlOrcid} className="mr-1">
            ORCID
          </a>
        )}
        {urlResearcher && (
          <a href={urlResearcher} className="mr-1">
            Researcher
          </a>
        )}
        {urlScopus && (
          <a href={urlScopus} className="mr-1">
            Scopus
          </a>
        )}
      </div>
    </div>
  )
}

export default ShortPersonCard
