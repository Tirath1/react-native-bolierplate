import PropTypes from 'prop-types';

export const propTypes = {
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.bool,
};

export type LoaderProps = PropTypes.InferProps<typeof propTypes>;
