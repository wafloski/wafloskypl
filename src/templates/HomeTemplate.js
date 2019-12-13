import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pictures from '../components/Pictures';

const ImagesWrapper = styled.div`
  padding: 0;
  column-count: 3;
  column-gap: 0.1rem;
`;

const HomeTemplate = ({ data }) => {
  return (
    <ImagesWrapper>
      <Pictures data={data} />
    </ImagesWrapper>
  );
};

HomeTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default HomeTemplate;
