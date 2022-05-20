import React, { useState } from 'react'

export default function About(props) {
    
    let myStyle={
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
     
    }
    
  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743',}}> 
        <h1>About Us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your Text</strong>            
            </button>
            </h2>
    <div   div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,character count
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to Use</strong>     
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provide instant character count and word count statistics  for given  text.TextUltis reports the number of word and characters.Thus it is suitable for writing text with word /character limit
        </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        The word counter works in any web brower such as a chrome,Internet Explore,Safari,Opera.
        </div>
    </div>
  </div>
</div>
    {/* <button type="button" className='btn btn-primary my-3' ></button> */}
    </div>
  )
}
