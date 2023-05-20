import { styled } from 'styled-components';

const Title = styled.div`
  position: relative;
  text-align: center;
  & .main-title {
    color: ${({ color1 }) => color1};
    font-size: 4rem;
    font-weight: 900;
    position: absolute;
    bottom: 3px;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
  }

  & .shadow {
    font-size: 10rem;
    font-weight: 900;
    color: ${({ color2 }) => color2};
  }
`;

const SectionTitle = ({ title, type }) => {
  const shadow = title.toUpperCase();
  title = title.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
  let color1 = '#000';
  let color2 = '#eeeeee6d';
  switch (type) {
    case '1':
      color1 = '#12273D';
      color2 = '#EBEBEB';
      break;
    case '2':
      color1 = '#741906';
      color2 = '#EBEBEB';
      break;
    case '3':
      color1 = '#fff';
      color2 = '#ebebeb2c';
      break;
  }
  return (
    <Title color1={color1} color2={color2}>
      <p className='shadow'>{shadow}</p>
      <h2 className='main-title'>{title}</h2>
    </Title>
  );
};

export default SectionTitle;
