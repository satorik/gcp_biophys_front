import React from 'react'

export default ({title, location, imageUrl, content}) => 
<div className="col-8 bg-light p-3">
  <h4>{title}</h4>
  <p className="text-muted">{location}</p>
  <hr/>
  <img src={imageUrl} className="img-thumbnail float-right" alt="..." style={{'width':'12rem','objectFit': 'cover', marginLeft:'10px'}} />
  <p className="text-justify" style={{wordWrap: "break-word"}} dangerouslySetInnerHTML={{__html: content}}></p>
</div>
