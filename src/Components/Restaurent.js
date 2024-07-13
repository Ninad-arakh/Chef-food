import { FOOD_IMG_URL } from "../Utils/constants";

export const ResCard1 = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, cuisines, costForTwo,avgRating } = resData?.info;
    return (
        <div className="res-card">
             <div className="res-img">
                <img alt="image" src={FOOD_IMG_URL + cloudinaryImageId}
                />
            </div>
            <div className="res-cuisines">
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>Rating: {avgRating}</h4>
            </div> 

        </div>
    );
}



