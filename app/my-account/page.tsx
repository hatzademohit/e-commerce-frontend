'use client'
import React from "react";
import CustomAutocomplete from "@/components/SelectOptions/CutomAutocomplate";

const cities = ['Nagpur', 'Bhandara', 'Gondia']

const page = () => {
    return(
        <CustomAutocomplete 
            options={cities}
            size="small"
            placeholder="Select Cities"
            variant="filled"
            label="Cities"
        />
    )
}

export default page;