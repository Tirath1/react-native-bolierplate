import PropTypes from 'prop-types';

export const propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.string,
};

export type TextProps = PropTypes.InferProps<typeof propTypes>;
