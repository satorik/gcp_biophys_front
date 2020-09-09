import React from 'react'
import EditButtons from '../UI/EditButtons'

export default ({
  title,
  location,
  imageUrl,
  content,
  onClickEdit,
  onClickDelete,
}) => (
  <div className="col-md-8 bg-light p-3">
    <div>
      <EditButtons
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        size="sm"
        color="black"
        row
      />
      <h4>{title}</h4>
    </div>
    <p className="text-muted">{location}</p>
    <hr />
    <img
      src={imageUrl}
      className="img-thumbnail float-right"
      alt="..."
      style={{ width: '12rem', objectFit: 'cover', marginLeft: '10px' }}
    />
    <p
      className="text-justify"
      style={{ wordWrap: 'break-word' }}
      dangerouslySetInnerHTML={{ __html: content }}
    ></p>
  </div>
)
