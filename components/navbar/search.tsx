import React from "react";
import { Input } from "../ui/input";

export default function Search() {
    return(
        <form>
            <Input type='search' placeholder='Search Videos and Accounts' className='p-5 w-[300px]'/>     
        </form>
    )
}