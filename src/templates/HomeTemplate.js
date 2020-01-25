import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pictures from '../components/Pictures';
import { device } from '../theme/Breakpoints';

const ImagesWrapper = styled.div`
  padding: 0;
  column-count: 1;
  column-gap: 0.1rem;
  background-color: #000;
  border-top: 1px solid #000;
  @media ( ${device.mobile} ) {
    column-count: 2;
  }
  @media ( ${device.laptop} ) {
    column-count: 3;
  }
`;

const HomeTemplate = ({ data }) => (
  <ImagesWrapper>
    <Pictures data={data} />
  </ImagesWrapper>
)

HomeTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default HomeTemplate;
