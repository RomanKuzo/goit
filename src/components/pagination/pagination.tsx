import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const StyledPagination = styled(ReactPaginate)`
  &&& {
    text-align: center;
    font-family: Archivo, sans-serif;
    font-weight: 600;
    > ul {
      padding: 0;
      margin: 0;
    }

    li {
      display: inline-block;
      &.selected {
        border-bottom: 1.5px solid #65b79a;
      }
      > a {
        margin: 10px 15px;
        display: inline-block;
        cursor: pointer;

        &:focus {
          outline: none;
        }
        &:hover {
          opacity: 0.3;
        }
      }
    }

    @media screen and (max-width: 800px) {
      font-size: 14px;
      padding-inline-start: 0px;
      li {
        > a {
          margin: 7px 10px;
        }
      }
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
      padding-inline-start: 0px;
      li {
        > a {
          margin: 5px 7px;
        }
      }
    }
  }
`;

export default StyledPagination;
