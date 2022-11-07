import React, { useState, useEffect } from 'react'

const Card = () => {

    const [json, setJson] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => 
                console.log(json.title),
                setJson(json)
            )
        }
    );


  return (
      
    <div className='container'>
        <div className='row g-3'>
       { 
            json.map((item, id) => {
                return(
                    <div key={id} className='col-md-6'>
                        <div className="card bg-green" >
                            <div className="card-body">
                                <h5 className="card-title">{item.json.title} </h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Card;