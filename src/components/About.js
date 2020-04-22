import React from 'react';
import Header from './header';
import data from './yourdata';

const About = () =>{
return (
  <div>
    <Header name={data.name} contactEmail={data.contactEmail}></Header>
    <div className="about_container">
      <h1>{data.aboutTitle}</h1>
      <p>{data.aboutPara}</p>
    </div>
  </div>
);
}
export default About;