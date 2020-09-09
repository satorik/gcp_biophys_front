import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthContext from '../../context/AuthContext'

export const CourseInfo = ({
  title,
  description,
  read,
  lector,
  exam,
  onClickEdit,
}) => {
  const examForm = exam === 'EXAM' ? 'Экзамен' : 'Зачет'
  const { currentUser } = React.useContext(AuthContext)
  const isAuth = currentUser.token !== null

  return (
    <div>
      <div className="col-12 p-3 bg-dark text-white d-flex justify-content-between align-items-baseline">
        <p className="h3">{title.toUpperCase()}</p>
        <p className="font-weight-bold h5">{examForm.toLowerCase()}</p>
      </div>
      <div className="p-3">
        {isAuth && (
          <button className="btn p-0 mb-1" onClick={onClickEdit}>
            <span>
              <FontAwesomeIcon icon={['far', 'edit']} color="black" size="sm" />
            </span>
          </button>
        )}
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <p className="font-weight-bold">{read}</p>
        <p className="font-italic">{lector}</p>
      </div>
    </div>
  )
}
