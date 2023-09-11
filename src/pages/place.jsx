import { useMatch } from "react-location";
const Place = () => {
  const { params } = useMatch();
  return <div>Place:{params.id}</div>;
};

export default Place;
