import { Button } from "@mui/material";

const TypeCard = ({ item, chooseTypeId, setChooseTypeId, setTypeObj }) => {

  const handleButtonClick = (itemId) => {
    setTypeObj((prev) => (Object.keys(prev).length !== 0 ? {} : item));
    setChooseTypeId((prev) => (prev === itemId ? "" : itemId));
  };

  return (
    <>
      <Button
        sx={{
          mb: "15px",
          color: "black",
          textTransform: "unset",
          border: `${chooseTypeId === item._id ? "1.5px solid #4caf50" : ""}`,
        }}
        className="card-button"
        key={item._id}
        onClick={() => handleButtonClick(item._id)}
      >
        <div className="card">
          <div className="card-image-container">
            <img src={item.image} alt={item.name} className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="card-title">{item.name}</h2>
          </div>
        </div>
      </Button>
    </>
  );
};

export default TypeCard;
