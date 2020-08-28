import React from 'react'
import EditButtons from '../UI/EditButtons'

export default ({ title, location, content, onClickEdit, onClickDelete }) => (
  <div className="col-md-8 bg-light p-3">
    <div>
      <EditButtons
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        size="sm"
        color="white"
        row
      />
      <h4>{title}</h4>
    </div>

    <p className="text-muted">{'Место проведения: ' + location}</p>
    <hr />
    <p
      className="text-justify"
      dangerouslySetInnerHTML={{ __html: content }}
    ></p>
  </div>
)
