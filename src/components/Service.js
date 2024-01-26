import React from 'react'

const Service = ({icon,content,title}) => {
  return (
    <article className="service">
        <span className="service-icon">
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">
            {content}
          </p>
        </div>
      </article>
  )
}

export default Service