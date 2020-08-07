import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditButtons from '../UI/EditButtons'

const NoteCarousel = ({selectedNote, showContent, last, onClickLeft, onClickRight, onClickDown, content, title, 
  description, onClickEdit, onClickDelete}) => {

  return (
    <div className="container-fluid bg-dark">
      <div className="row">
          <div className="col-1 d-flex align-items-center text-white justify-content-center">      
            {selectedNote !== 0 && <FontAwesomeIcon icon="angle-left" size="lg" onClick={onClickLeft} />}
          </div>
          <div className="col-10 text-center">
            <div className="d-flex justify-content-center mt-2 flex-wrap flex-row-reverse">
                  <EditButtons 
                    onClickEdit={onClickEdit}
                    onClickDelete={onClickDelete}
                    size="lg"
                    color="white"
                    row
                  />
                  <h3 className="text-white mr-5">{title}</h3>
            </div>
            <div className="text-white">
                <p>{description}</p>
                {showContent && <p className="text-justify" dangerouslySetInnerHTML={{__html: content}}></p>}
                {content && 
                <p className="d-block m-0 text-center">
                  <FontAwesomeIcon 
                    icon={showContent ? "caret-up" : "caret-down"} 
                    size="lg" 
                    onClick={onClickDown} 
                  />
                </p>}
            </div>
          </div>
          <div className="col-1 d-flex align-items-center text-white justify-content-center">
            {selectedNote !== last && <FontAwesomeIcon icon="angle-right" size="lg" onClick={onClickRight} />}
          </div>
      </div>
    </div>
  )
}

export default NoteCarousel
