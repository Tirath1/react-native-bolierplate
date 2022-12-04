import PropTypes from 'prop-types';

export const propTypes = {
  scrollEnable: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  scrollProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  keyBoardAvoid: PropTypes.bool,
  containerScrollStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  keyBoardStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.bool,
};

export type ContainerProps = PropTypes.InferProps<typeof propTypes>;
