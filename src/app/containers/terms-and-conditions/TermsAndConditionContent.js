import React from "react";

import "./index.css";

import  TermsAndConditionTemplate  from "../../data/terms-and-condition/terms-and-condition.template";


const TermsAndConditionContent = () => {
  return (
    <div className="container privacy-policy">
       <div
       className='content'
          dangerouslySetInnerHTML={{ __html: TermsAndConditionTemplate() }}
        />
   
      {/* {TermsAndConditionData.map((item, index) => (
        <div className='content'>
          <h1>
            {item.titleNo} {item.title}
          </h1>
          {item.sections.map((section, sectionIndex) => (
            <div>
              <h2>
                {section.sectionNo} {section.sectionName}
              </h2>
              {section.p && section.p.map((p, pIndex) => <p>{p}</p>)}
              {section.bullets && section.bullets.map((bullet, bulletIndex) => (
                <div>
                  <p>{JSON.stringify(bullet.desc).replace("insert_terms_and_condition_link",`<a href='http://localhost:3000/terms-and-condition' title="Terms and Conditions/>`)}</p>
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
  );
};

export default TermsAndConditionContent;
