import axios from "axios";

export var getLink = async function(category, label) {
    return await axios.get('http://localhost:8080/links.json')
    .then(res=>{
        console.log('fetched data: ' + JSON.stringify(res.data[category][label]));
        return res.data[category][label];
    })
    .catch(err => console.log(err));
}