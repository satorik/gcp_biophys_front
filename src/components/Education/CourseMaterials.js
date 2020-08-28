import React from 'react'
import { FileCard } from './FileCard'
import { responsePathAsArray } from 'graphql'

export const CourseMaterials = ({
  title,
  links,
  filetype,
  onClick,
  parentForm,
  onDelete,
  onEdit,
}) => {
  const createResDiv = reses => {
    if (reses.length === 0) return null
    const isPdf = reses.find(el => el.form.filetype === 'PDF')
    const divClass = isPdf
      ? 'list-group p-2'
      : 'd-flex flex-wrap justify-content-around p-2'
    return (
      <div className={divClass}>
        {reses.map(res => (
          <FileCard
            key={res.id}
            fileLink={res.fileLink}
            title={res.title}
            description={res.description}
            image={res.image}
            onEditClick={() => onEdit(res.id)}
            onDeleteClick={() => onDelete(res.id)}
            filetype={filetype}
          />
        ))}
      </div>
    )
  }

  const subSections = links
    .filter(link => link.form.id !== parentForm)
    .reduce((acc, el) => {
      if (acc.filter(item => item.id === el.form.id).length === 0) {
        acc = [...acc, { id: el.form.id, title: el.form.title }]
      }
      return acc
    }, [])

  const courseMaterials = (
    <div>
      {createResDiv(links.filter(link => link.form.id === parentForm))}
      {subSections.length > 0 && (
        <div id="subsections">
          {subSections.map(subSecion => (
            <div key={subSecion.id}>
              <p className="bg-secondary text-white m-0 mt-2 ResSubsection">
                {subSecion.title}
              </p>
              {createResDiv(
                links.filter(link => link.form.id === subSecion.id)
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="w-100 text-center">
      <p
        className="bg-warning font-weight-bold p-1 m-0"
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      >
        {title}
      </p>
      {courseMaterials}
    </div>
  )
}
