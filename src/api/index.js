import axios from 'axios'
import urls  from './urls'

axios.defaults.baseURL='http://localhost:88/'


const common=async(config)=>{
    let response=await axios(config)
    return response.data
}

export default {
    getNav:()=>common({url:urls.getNav}),
    getList:(url)=>common({url:urls.getList+url}),
    getMyBook:()=>common({url:urls.getMyBook}),
    login:(data)=>common({url:urls.login,data,method:'post'}),
    getDetail:(url)=>common({url:urls.getDetail+url}),
    add:(data)=>common({url:urls.add,data,method:'post'}),
    updata:(data)=>common({url:urls.updata,data,method:'post'}),
    register:(data)=>common({url:urls.register,data,method:'post'})
}