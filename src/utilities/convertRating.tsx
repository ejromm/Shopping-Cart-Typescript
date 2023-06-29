import { ReactNode } from "react";
import { FaStar, FaStarHalf,  } from "react-icons/fa";
export default function convertRating(rating: number): ReactNode[] {
    // round to nearest half
    rating = Math.round(rating * 2) / 2; 
    const output: ReactNode[] = [];
    //append all whole stars
    for(let i = rating ; i >= 1 ; i--) {
        output.push(<FaStar style={{color: 'black'}} />)
        rating--;
    }
    //append all half stars
    if(rating === .5) output.push(<FaStarHalf style={{color: "black"}} />);
    
    return output;
}   