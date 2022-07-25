import React from 'react'

const QuoteBox = ({quoteRandom,colorRandom,getAll}) => {
      const {author,quote} = quoteRandom
      const objStyle={
            color:colorRandom
      }
      const objBG={
            backgroundColor:colorRandom
      }

  return (
    <article className='card' style={objStyle}>
      <div className='card_body'>
      <span> <i className="fas fa-quote-left icon"></i></span>
            <p className='card_text'>
                  {quote}
            </p>
      </div>
      <div className='card_find'>
            <p>{author}</p>
            <button onClick={getAll} className='card_btn' style={objBG}>&#62;</button>
      </div>
    </article>
  )
}

export default QuoteBox