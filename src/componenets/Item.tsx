import { Content } from "../models/models";

interface IItemProps {
  itemData: Content;
}
export const Item = ({ itemData }: IItemProps) => {
  return (
    <div className="container">
      <div className="imgContianer">
        <img src={itemData.image} alt={itemData.title} width='100%'  height='100%'/>
      </div>
      <div className="dataContainer">
        <div className="title">{itemData.title}</div>
        <div className="listContainer">
          {itemData.listItem.map((el, index) => (
            <li key={index}>{el.title}</li>
          ))}
        </div>
        <div className="paragrafContainer">{itemData.paragraf}</div>
      </div>
    </div>
  );
};
