import { RichText } from './richText.js';

export const baseText = ({ children }) => {
  return (
    <div>
      <RichText>{children}</RichText>
    </div>
  );
};
