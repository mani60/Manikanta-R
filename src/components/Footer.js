import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import { ResumeLink } from '../assets/data/links';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Manikanta R</h1>
          <PText>
            I am a passionate Full Stack Developer with 3+ years of professional
            experience and four years of hands-on expertise in building dynamic
            web applications. I am currently open to new opportunities. Let’s
            connect!
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+1(732) 398-6935',
                path: 'tel:+1(732) 398-6935',
              },
              {
                title: 'mm2948@njit.edu',
                path: 'mailto:mm2948@njit.edu',
              },
              {
                title: 'NJ, USA',
                path: 'https://www.google.com/maps/place/New+Jersey+Institute+of+Technology/@40.7432475,-74.1814175,17z/data=!4m6!3m5!1s0x89c2537d98c396f9:0xb97c287a2ef95f43!8m2!3d40.7424259!4d-74.1784006!16zL20vMDFwczFr?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/mani60',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/manikanta2812/',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/marri.manikanta',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2024 - Designed By{' '}
            <a target="_blank" rel="noreferrer" href={ResumeLink}>
              Manikanta R
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
