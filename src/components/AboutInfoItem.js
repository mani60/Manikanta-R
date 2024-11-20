import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
  }
  .cert {
    background-color: var(--gray-1);
    padding: 0.01em 0.2em;
    color: black;
  }
  .itemsmob {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
    margin-bottom: 1rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .itemsmob {
      position: initial;
      gap: rem;
    }
    .items {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* Create 3 equal-width columns */
      gap: 1rem; /* Space between items */
      position: initial;
    }
    .title {
      font-size: 2rem;
    }
    .cert {
      background-color: var(--gray-1);
      padding: 0.01em 0.2em;
      color: black;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
  cap = '',
  certLink = '',
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className={cap === 'ed' ? 'itemsmob' : 'items'}>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>
              {item}
              {certLink != '' ? (
                <a
                  className="cert"
                  href={certLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Click Here
                </a>
              ) : (
                <></>
              )}
            </PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
