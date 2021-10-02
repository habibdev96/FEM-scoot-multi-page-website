import styled from 'styled-components';
import map from '../../assets/images/world-map-desktop.png';
import {
  sectionSpacingMd,
  maxWidthLg,
  headingStyles,
} from '../../abstracts/Mixins';

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  position: relative;

  .tab {
    background-color: var(--yellow);
    width: fit-content;
    padding: 2rem;
    position: absolute;

    &--1 {
      top: 25%;
      left: 20%;
    }

    &--2 {
      top: 25%;
      left: 40%;
    }

    &--3 {
      top: 30%;
      right: 10%;
    }

    &--4 {
      top: 50%;
      right: 15%;
    }

    h2 {
      ${headingStyles}
      font-size: 2.4rem;
      color: var(--darkNavy);
    }
  }
`;

const MapSection = () => {
  return (
    <section>
      <Container>
        <img src={map} alt='' />
        <div className='tab tab--1'>
          <h2>New York</h2>
        </div>
        <div className='tab tab--2'>
          <h2>London</h2>
        </div>
        <div className='tab tab--3'>
          <h2>Yokohama</h2>
        </div>
        <div className='tab tab--4'>
          <h2>Jakarta</h2>
        </div>
      </Container>
    </section>
  );
};

export default MapSection;
