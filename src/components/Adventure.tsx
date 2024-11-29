import React from 'react'
type AdventureType = {
    img:string,
    title:string,
    description:string
}

const Adventure = (props: AdventureType) => {
  return (
    <div>
        <img src={props.img} alt={props.title} />
    </div>
  )
}

export default Adventure