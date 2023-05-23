import { styled } from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  & .footerTitle {
    font-size: 3rem;
    color: brown;
  }
  & .footerText {
    font-size: 2rem;
    color: gray;
  }
  & .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35rem;
    min-width: 37rem;
    max-width: 37rem;
    padding: 0 5rem;
    margin-bottom: 3rem;
  }
`;
export const SiteDescription = styled.div`
  .footerText {
    padding-left: 1.5rem;
  }
`;

export const NewsLetter = styled.div`
  &.column {
    width: 45rem;
    padding: 0;
    text-align: center;
  }
`;
export const SubscribeContainer = styled.div`
  display: flex;
  gap: 2rem;
  input {
    padding: 1rem;
    font-size: 2rem;
    color: gray;
    border: 1px solid brown;
    width: auto;
    /* align-self: stretch; */
  }
  button {
    padding: 1rem 2rem;
    color: #fff;
    background-color: brown;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
export const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  img {
    width: 3rem;
    height: 3rem;
  }
`;
export const Contact = styled.div`
  gap: 5rem;
  &.column {
    justify-content: start;
  }
  .lines {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .line {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .line img {
    width: 2rem;
    height: 2rem;
  }
  .footerTitle {
    text-align: center;
  }
`;
export const CopyRights = styled.div`
  hr {
    background-color: brown;
    height: 3px;
    width: 80%;
    margin: 0 auto 2rem;
  }
  p {
    text-align: center;
    font-size: 2rem;
    color: gray;
    margin-bottom: 2rem;
  }
`;
