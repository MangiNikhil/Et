import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import {SwitchTabs} from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

export const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movie" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTabs data={["Movie", "Tv"]} onTabChange={onTabChange} />
            </ContentWrapper>
            {console.log(data)}
             <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    );
}; 