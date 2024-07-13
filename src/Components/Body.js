import resObj from "../Utils/MockData";
import ResCard from "./Restaurent";
import { ResCard1 } from "./Restaurent";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
    const [resList, setres] = useState([]);
    const [resListU, setresU] = useState([]);

    const [searchtxt, setsearchtxt] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(typeof (json));
        setres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setresU(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    })

    return resList.length === 0 ?
        < Shimmer /> :
        (
            <div className="res-cardAll">
                <div className="search">
                    <input type="text"
                        placeholder="Search for foods"
                        value={searchtxt}
                        onChange={(e) => { setsearchtxt(e.target.value) }} />

                    <button className="search-btn"
                        onClick={() => {
                            const updatedList = resList.filter((res) => {
                                return res.info?.cuisines?.includes(searchtxt)
                            });
                            if(updatedList.length != 0){
                                setresU(updatedList);
                            }
                            else{
                                setresU(resList);
                            }
                        }
                        }>
                        search
                    </button>
                    <button onClick={() => {
                        let filtered = resList.filter((res) => res.info.avgRating > 4);
                        setresU(filtered);
                    }} className="search-btn1">Filter The foods whose rating is 4+</button>
                </div>
                {
                    resListU.map((rest, i) => (
                        <ResCard1 key={rest.info.id} resData={rest} />

                    ))
                }
            </div>

        );
}

export default Body;