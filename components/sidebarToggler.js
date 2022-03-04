import PlusCrossIcon from '../assets/svg/PlusCrossIcon';

export const SidebarToggler = ({ onClick, isOpen }) => {
  return (
    <div
      onClick={onClick}
      className="
      flex justify-center items-center
      bg-transparent border-solid border-ggz-100 border-4 rounded-lg hover:rounded
      w-12 h-12 ">
      <PlusCrossIcon isOpen={isOpen} />
    </div>
  );
};
