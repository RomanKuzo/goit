import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.04));
  padding: 40px 70px 40px 40px;
  margin-bottom: 36px;
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    padding: 20px 35px 20px 20px;
  }
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 128px;
  height: 144px;
  object-fit: fill;
  border-radius: 4px;
`;

const RepoDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-left: 32px;

  > span {
    line-height: 25px;
    margin-bottom: 6px;

    color: #a5adbb;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;

    &:first-of-type {
      color: #081f32;
      font-family: "DM Serif Display";
      font-size: 22px;
    }

    &:last-of-type {
      color: #6e798c;
    }
  }
`;

const FollowersDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  margin-left: 32px;

  > div {
    > span {
      line-height: 25px;
      margin-bottom: 6px;

      color: #081f32;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      font-weight: 600;

      &:first-of-type {
        > span {
          color: #6e798c;
          font-weight: 400;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

const Row = styled.div`
  display: flex;

  > svg {
    margin-right: 13px;
  }
`;

export { Card, Logo, RepoDataWrapper, FollowersDataWrapper, Row, Flex };
