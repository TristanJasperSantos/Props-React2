import React from "react";
import Header from "./header";
import TravelCard from "./travelcard";
import data from "../data/data";

const Main = ()=>{
    const mappedDAta = data.map(items=>{
        return(
            <TravelCard
            key={items.key}
            item={items}
            />
        )
    })
    return (
        <main className=" w-full shadow-md ">
            <Header/>



            {mappedDAta}
        </main>
    )
}

export default Main;