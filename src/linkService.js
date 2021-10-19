import axios from "axios";
import { publicPath } from "../vue.config.js";

export var getLink = async function(category, label) {
    return await axios.get(publicPath +'links.json', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(res=>{
        console.log('fetched data: ' + JSON.stringify(res.data[category][label]));
        return res.data[category][label];
    })
    .catch(err => console.log(err));
}