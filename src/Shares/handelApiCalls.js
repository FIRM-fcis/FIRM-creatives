const baseUrl = "http://localhost:3000/api/v1/";
const testApi = async(endpoint,parameters="")=>{
   const res = await fetch(`${baseUrl}${endpoint}${parameters}`);
    const data = await res.json();
    return data.body?data.body:data.message;
}
export default testApi