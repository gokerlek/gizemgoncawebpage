import ReactMarkdown from 'react-markdown';

export const RichText = ({ children }) => {
  return (
    <div className="leading-6 text-gray-700  text-xs md:text-base ">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
};
