import React from 'react'
import { socialLinks } from '../Data';

const SocialLinks = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass}>
          {socialLinks.map((social) => {
            const { id, href, icon } = social;
            return (
              <li key={id}>
                <a
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                  className={itemClass}
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
  )
}

export default SocialLinks