import styled from "styled-components";

export const DragonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

interface DragonProps {
  className?: string;
  isDragon: boolean;
  imgSrc: string;
  name: string;
  adroableness: number;
}
export const ListItem: React.FC<DragonProps> = ({
  className,
  imgSrc,
  name,
}) => {
  return (
    <div className={className}>
      <img src={imgSrc} />
      <p>Name: {name}</p>
      <p>Dragon: yes</p>
    </div>
  );
};

export const DragonListItem = styled(ListItem)`
  padding: 24px;
  margin: 0 4px;

  > img {
    max-width: 200px;
    height: 300px;
    object-fit: cover;

    border: 4px solid #5d3fd3;
    border-radius: 4%;
  }
`;
