import Spinner from '../components/Spinner/Spinner';

/* eslint-disable no-unused-vars */
function WithSpinner(Component) {
  return function WithSpinnerComponent({ isLoading, ...props }) {
    if (isLoading) return <Spinner />;

    return <Component {...props} />;
  };
}

export default WithSpinner;
