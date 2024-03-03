import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId }  = useParams();

    const resInfo = useRestrauntMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1 className="font-bold py-4 text-2xl">{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2 className="font-bold py-2 text-lg">Menu</h2>
            <ul>
                {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} -{" Rs."}
                    {item.card.info.price / 100 || item.card.info.defaultPrice /100}
                </li>))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;