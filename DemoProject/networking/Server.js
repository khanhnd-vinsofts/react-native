import React, {Component} from 'react';

const apiGetAllFoods = 'http://appmns.yez.vn/api/mns_cares';

async function getFoodFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJon = await response.json();
        return responseJon.data;
    }catch (error) {
        console.error(`Error is : ${error}`);
    }
}

export {getFoodFromServer};