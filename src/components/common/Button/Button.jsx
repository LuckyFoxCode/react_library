import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Button = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center min-w-[75px] py-[9px] text-[10px] font-bold capitalize border border-dark rounded-sm hover:bg-gold transition',
        className,
      )}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};
