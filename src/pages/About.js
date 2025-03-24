import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import { ResumeLink } from '../assets/data/links';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Manikanta M</span>
              </p>
              <h2 className="about__heading">A Software Developer</h2>
              <div className="about__info">
                <PText>
                  I am from Andhra Pradesh, India. I am currenlty pursuing
                  masters at NJIT NJ,USA. Since my childhood, I love art and
                  design. I always try to design stuff with my unique point of
                  view. I also love to create things that can be useful to
                  others.
                  <br /> <br />
                  My love for gaming led me to software development. I wanted to
                  understand how games are built from the ground up, which made
                  me dive into both front-end and back-end development. As I
                  explored the tech behind interactive experiences, I realized
                  the potential to create dynamic websites and apps.
                  <br />
                  <br />I have a deep passion for tech news, always staying
                  updated on the latest trends and innovations in the industry.
                  Outside of tech, I love to unwind by playing cricket and
                  badminton. These sports keep me active and help me balance my
                  passion for technology with physical activities. Whether it’s
                  reading about new tech or hitting the court, I enjoy engaging
                  in both worlds.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink={ResumeLink} />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                cap="ed"
                title="Btech"
                items={['Amrita School of Engineering', 'Coimbatore', 'India']}
              />
              <AboutInfoItem
                cap="ed"
                title="Masters"
                items={[
                  'New Jersey Institute of Technology',
                  'New Jersey',
                  'USA',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Languages"
                items={[
                  'Java',
                  'Python',
                  'JavaScript',
                  'TypeScript',
                  'SQL',
                  'C',
                ]}
              />
              <AboutInfoItem
                title="Full Stack"
                items={[
                  'ReactJs',
                  'HTML5',
                  'Spring',
                  'Kafka',
                  'NodeJs',
                  'CSS',
                  'Bootstrap',
                  'Webpack',
                  'UI/UX',
                  'Django',
                  'jQuery',
                  'Selenium',
                  'npm',
                  'MVC',
                ]}
              />
              <AboutInfoItem
                title="Cloud"
                items={[
                  'AWS Lambdas',
                  'API Gateway',
                  'Step-functions',
                  'S3 Buckets',
                  'IAM',
                ]}
              />
              <AboutInfoItem
                title="Databases"
                items={['DynamoDB', 'MongoDB', 'MySQL', 'SQLite']}
              />
              <AboutInfoItem
                title="Other Skills"
                items={['Terraform', 'GitHub', 'Flask', 'MS PowerPoint']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              <AboutInfoItem
                title="2023-Present"
                cap="ed"
                items={['Software Developer at BNYM']}
              />

              <AboutInfoItem
                title="2021-2023"
                cap="ed"
                items={['Software Developer at TCS']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Awards</h1>
              <AboutInfoItem
                cap="ed"
                title="2022-2023"
                items={['Recieved a Certificate of Appreciation by TCS.']}
                certLink="https://drive.google.com/file/d/14WaewE1dHw5Mb9y-r5pviTMprVJMQe2a/view?usp=sharing"
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Certifications</h1>
              <AboutInfoItem
                cap="ed"
                title="2025-2028"
                items={['AWS Certified Cloud Practitioner.']}
                certLink="https://www.credly.com/badges/c12bfc15-f98a-49b9-aa82-c07137f0b512/linked_in_profile"
              />
              <br />
              <AboutInfoItem
                cap="ed"
                title="2025-2028"
                items={['AWS Certified Solutions Architect Associate.']}
                certLink="https://www.credly.com/badges/3618dd38-33cf-4572-9c13-10ab7580c088/public_url"
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
