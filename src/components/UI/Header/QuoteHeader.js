import React from 'react'

const QuoteHeader = ({header, title, quote, author, when}) => {

  const imageBackground = {
    height: '20rem',
    width: '100%',
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden'
  }

  const qouteStyle = {
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    marginLeft: '0px',
    marginBottom:'20px',
  }

  return (
      <div style={imageBackground} className="p-3 text-left d-flex align-items-center">
        {quote && <div className="card p-3 text-left col-lg-4 col-md-6 col-sm-8" style={qouteStyle}>
            <blockquote className="blockquote mb-0">
              {quote.split(';').map((qouteLine, idx) => <p className="text-white m-0" key={idx}>{qouteLine}</p>)}
              <footer className="blockquote-footer">
                <small className="text-white">
                  {author} <cite title="Source Title">{when}</cite>
                </small>
              </footer>
            </blockquote>
          </div>}
      </div> 
  )
}

export default QuoteHeader

