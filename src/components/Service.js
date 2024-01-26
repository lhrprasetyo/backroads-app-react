import React from 'react'
import { services } from '../Data';

const Service = () => {
  return (
    <div className="section-center services-center">
    {services.map((service)=>{
      const {id,icon,content,title} = service;
      return (
        <article key={id} className="service">
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
      );
    })}
    </div>
  )
}

export default Service