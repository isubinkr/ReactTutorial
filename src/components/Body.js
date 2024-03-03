import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { REST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(REST_API);

        const json = await data.json();

        // console.log(json);
        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditinoal Rendering
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }
    //  same using ternary operator is used below

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) return <h1>Looks like you're offline!! Please check yout internnet connection;</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value); // everytime the searchbox changes -> rerender
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={ () => {
                        // console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={ () => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                            );
                        setFilteredRestaurant(filteredList); 
                        // setListOfRestaurants(filteredList); 
                    }}>Top Rated Restaurants
                    </button>
                </div>

            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;