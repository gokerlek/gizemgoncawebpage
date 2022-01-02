const PlusCrossIcon = ({ isOpen }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16H30M16 2V30"
      stroke="#009FB7"
      strokeWidth="4"
      strokeLinecap="round"
      transform={isOpen ? 'rotate(90 16 16)' : 'rotate(45 16 16)'}
    />
  </svg>
);
export default PlusCrossIcon;
