import React from 'react';
import Resumes from '../About/resume.json';
import './About.css';

function About() {
  return (
    <div className="container-about">
      <div className="left_Side">
        <div className="profileText">
          <div className="imgBx">
            <img className="photo" src="./images/dino (4).jpeg" alt="Profile" />
          </div>
          <br />
          <h2>{Resumes.name} <br /><span>{Resumes.description}</span> </h2>
        </div>

        <div className="contactInfo">
          <h3 className="title">{Resumes.contactInfo.title}</h3>
          <ul>
            <li>
              <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
              <span className="text">{Resumes.contactInfo.details.map(details => details.phoneNumber)}</span>
            </li>
            <li>
              <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
              <span className="text">{Resumes.contactInfo.details.map(details => details.email)}</span>
            </li>
            <li>
              <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
              <span className="text">{Resumes.contactInfo.details.map(details => details.location)}</span>
            </li>
          </ul>
        </div>

        <div className="contactInfo education">
          <h3 className="title">{Resumes.education.title}</h3>
          <ul>
            {Resumes.education.details.map(detail => (
              <li key={detail.id}>
                <h5>{detail.year}</h5> <br />
                <h4>{detail.degree}</h4>
                <h4>{detail.institution}</h4>
                <h4>{detail.location}</h4>
              </li>
            ))}
          </ul>
        </div>

        <div className="contactInfo language">
          <h3 className="title">{Resumes.languages.title}</h3>
          <ul>
            {Resumes.languages.details.map(detail => (
              <li key={detail.id}>
                <span className="text">{detail.language}</span>
                <span className="percent">
                  <div className="bar" style={{ width: detail.level }}></div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="right_Side">
        <div className="about">
          <h2 className="title2">{Resumes.profile.title}</h2>
          <p>{Resumes.profile.description}</p>
        </div>

        <div className="about">
          <h2 className="title2">{Resumes.experience.title}</h2>
          {Resumes.experience.details.map(detail => (
            <div className="box" key={detail.id}>
              <div className="year_company">
                <h5>{detail.year}</h5>
                <h5>{detail.company}</h5>
              </div>
              <div className="text">
                <h4>{detail.position}</h4>
                <p>{detail.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="about skills">
          <h2 className="title2">{Resumes.professionalSkills.title}</h2>
          {Resumes.professionalSkills.details.map(detail => (

            <div className="box" key={detail.id}>
              <h4>{detail.skill}</h4>
              <div class="percent">
                <div div className="bar" style={{ width: detail.level }}></div>
              </div>
            </div>

          ))}

        </div>

        <div class="about interest">
          <h2 class="title2">{Resumes.interests.title}</h2>

          {Resumes.interests.details.map(detail => (

            <ul key={detail.id}>
              <li><i class="fa fa-book" aria-hidden="true"></i> {detail.interest}</li>

            </ul>


          ))}

        </div>

      </div>
    </div>
  );
}

export default About;
