import React from "react";

const TravelCard = property=>{
    return(

        <section className=" flex flex-col items-center justify-center w-full p-4 xs:flex-row md:justify-start">
            <img className=" m-4 w-40 h-56 rounded-md object-cover" src={property.item.image} alt="image of a place" />
            <div className=" flex flex-col justify-center items-center text-center my-8 xs:mr-8 xs:items-start xs:text-start">
                <div className=" flex gap-4 mb-4 ">
                    <p><i class=" mr-2 text-orange-500 fa-solid fa-location-dot"></i>{property.item.country}</p>
                    <a className=" text-gray-500 underline" href={property.item.mapLink}>View on Google Maps</a>
                </div>
                <h1 className=" font-bold text-3xl">{property.item.location}</h1>
                <p className=" text-sm font-bold my-4">{property.item.startDate}-{property.item.endDate}</p>
                <p className=" text-sm" >{property.item.desc}</p>


            </div>
        </section>
    )
}
export default TravelCard;