import React from 'react'

import renderPrivacyPolicyTemplate from '../../data/privacy-policy/privacy-policy.template';

import "./index.css"

const PrivacyContent = () => {
  return (
    <div className='container privacy-policy'>
        <div className='content'>
       <p>Last Modified: 1/15/2023</p>
       <div
       className='content'
          dangerouslySetInnerHTML={{ __html: renderPrivacyPolicyTemplate() }}
        />
   
       {/* {PrivacyData.map((item, index) => (
        <div>
          <h1>
             {item.title}
          </h1>
          {item.sections.map((section, sectionIndex) => (
            <div>
              <h2>
               {section.sectionName}
              </h2>
              {section.p && section.p.map((p, pIndex) => <p>{p}</p>)}
              {section.bullets && section.bullets.map((bullet, bulletIndex) => (
                <div>
                  <p>{bullet.desc}</p>
                  <div>
                    <ul>
                      {bullet.list && bullet.list.map((list,listIndex)=>(
                        <li>
                          <h3>{list.h}</h3>
                          <p>{list.text}</p>
                        </li>
                      ))}

                    </ul>
                    </div>
                  </div>
              ))}
            </div>
          ))}
        </div>
      ))} */}
      </div>
    </div>
  )
}

export default PrivacyContent