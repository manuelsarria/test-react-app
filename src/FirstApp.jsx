import PropTypes from 'prop-types';

const newMessage = 'Fernando';

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};

FirstApp.defaultProps = {
  title: 'No haytitulo',
  subtitle: 'No hay subtitles',
};
