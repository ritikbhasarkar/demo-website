import React from 'react'

type textProp = {
    text :string;
}

const ListItem = ({text}: textProp) => {
  return (
    <div className='list-item'>
        <div className='list-item--bullet'></div>
        <div className='list-item--text'>{text}</div>
    </div>
  )
}

export default ListItem