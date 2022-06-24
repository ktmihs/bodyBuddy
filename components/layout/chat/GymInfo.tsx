interface GymInfoProps {
  img: string;
  name: string;
  address: string;
}

const GymInfo = ({ img, name, address }: GymInfoProps) => {
  return (
    <div>
      <img src={img} alt={name} />
      <div>
        <span>{name}</span>
        <address>{address}</address>
        <span>
          📅 <span>약속잡기</span>
        </span>
      </div>
    </div>
  );
};

export default GymInfo;
