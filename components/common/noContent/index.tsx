import { StyledNoContent } from './styledNoContent';

const NoContent = ({ title, subTitle }: NoContentProps) => {
  return (
    <StyledNoContent>
      <div className="logo"></div>
      <span className="title">{title}</span>
      <span className="subTitle">{subTitle}</span>
    </StyledNoContent>
  );
};

export default NoContent;
