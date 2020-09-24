import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { AUTH } from '../const/Api'
Vue.use(VueAxios, axios);
export const Authenticate = ({username, password}) => {
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                // "Authorization" : User.getToken()
            }
        };
        let endpoit = AUTH+username+"/"+password;

        Vue.axios.get(endpoit, requestOptions)
        .then(async results => {
            if(results.status === 200){
                return results.data;
            } else {
                throw new Error(results.data.Message);
            }
        })
        .then(data => {
            console.log(data);
            var json = data;
            if(json.Status.Code === 1000){
                console.log(JSON.stringify(json, null, 2));
                localStorage.setItem("sessionToken", json.SessionToken)
                localStorage.setItem("username", json.Username)
                localStorage.setItem("photo", json.Photo)
                localStorage.setItem("position", json.Position)
                resolve({isLoggedIn: true, message:""});
                // dispatch(loggedIn(true));
            } else {
                localStorage.removeItem("sessionToken");
                throw new Error(data.Message);
            }
        })
        .catch(async err => {
            // console.log(awamessage;
            if(err != null)
                reject({message:err.message})
        })
    })
    
}
// export const getData = async (url, controller, header={}) => {
   
//     let token = await getToken();
//         return new Promise((resolve, reject) => {
//         const requestOptions = {
//             method: "GET",
//             headers: { 
//                 'Content-Type': 'application/json',
//                 "Authorization" :token,
//                 ...header
//             },
//             signal:controller.signal
//         };

//         let endpoit = url;
//         fetch(endpoit, requestOptions)
//         .then(async results => {
//             if(results.status === 200){
//                 return results.json();
//             } else {
//                 let data = await results.json();
//                 throw new Error(data.Message);
//             }
//         })
//         .then(async data => {
//             var json = data;
//             if(json.Status.Code === 1000){
//                 resolve(json.Result);
//             } else {
//                 throw Error(data)
//             }
//         })
//         .catch(err => {
//             if(err != null)
//                 reject({message:err.message})
//         })
//     });
    
// }

export const getDataList = async (url,header = {}) => {
    let token = localStorage.getItem("sessionToken");
    return new Promise((resolve, reject) => {
        // const requestOptions = {
        //     method: "get",
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         "Authorization" :`${token}`,
        //         ...header
        //     },
        //     withCredentials: true
        //     // signal:controller.signal
        // };

        // abortController(controller);
        // console.log(requestOptions);
        let endpoit = url;

        Vue.axios.get(endpoit,{
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization' :`${token}`,
                'Access-Control-Allow-Methods' : 'GET, PUT, POST, DELETE, OPTIONS',
                ...header
            },
            withCredentials: true,
            
        })
        .then(async results => {
            if(results.status === 200){
                return results.data;
            } else {
                throw new Error(results.data.Message);
            }
        })
        .then(data => {
            var json = data;
            if(json.Status.Code === 1000){
                resolve(json.Results);
            } else {
                throw Error(data)
            }
        })
        .catch(err => {
            if(err != null)
                reject({message:err.message})
        })
    });
    
}
// export const postData = async (url, controller, body = {}, header = {}) => {
//     let token = await getToken();
//     return new Promise((resolve, reject) => {
//         const requestOptions = {
//             method: "POST",
            
//             headers: { 
//                 'Content-Type': 'application/json',
//                 "Authorization" :token,
//                 ...header
//             },
//             body: JSON.stringify(body),
//             signal:controller.signal
//         };
    
//         let endpoit = url;
//         // console.log(endpoit, body)
//         fetch(endpoit, requestOptions)
//         .then(async results => {
//             if(results.status === 200){
//                 return results.json();
//             } else {
//                 let data = await results.json();
//                 console.log(data);
//                 throw new Error(data.Message);
//             }
//         })
//         .then(async data => {
//             var json = data;
//             if(json.Status.Code === 1000){
//                 resolve(json.Result);
//             } else {
//                 throw Error(data.Message)
//             }
//         })
//         .catch(err => {
//             if(err != null)
//                 reject({message:err.message})
            
//         })
//     });

    
// }

// export const postMultipart = async (url, controller, body = {}, files = [], header = {}) => {
//     // if(files.length  == 0){
//     //     return postData(url, controller, body);
//     // }
    
//     let token = await getToken();
//     return new Promise((resolve, reject) => {

//         let formData = new FormData();

//         for (var k in body){
//             if (body.hasOwnProperty(k)) {
//                 formData.append(k, body[k]);
//             }
//         }

//         files.forEach((e, i) => {
//             // console.log(e);
                
//             formData.append("files"+i, {
//                 uri: e.uri,
//                 name: e.name,
//                 type: e.type
//             })
//         });
//         // formData.append('Content-Type', 'image/png');
//         const requestOptions = {
//             method: "POST",
            
//             headers: { 
//                 'Content-Type': 'multipart/form-data',
//                 "Authorization" :token,
//                 ...header
//             },
//             body: formData,
//             signal:controller.signal
//         };
    
//         let endpoit = url;
//         fetch(endpoit, requestOptions)
//         .then(async results => {
//             console.log(results.status);
//             if(results.status === 200){
//                 return results.json();
//             } else {
//                 let data = await results.json();
//                 throw new Error(data.Message);
//             }
//         })
//         .then(async data => {
//             var json = data;
//             if(json.Status.Code === 1000){
//                 resolve(json.Result);
//             } else {
//                 throw Error(data.Message)
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             if(err != null)
//                 reject({message:err.message})
            
//         })
//     });
// }

// export const deleteData = async (url, controller, body= {}, header = {}) => {
//     let token = await getToken();
//     return new Promise((resolve, reject) => {
//         const requestOptions = {
//             method: "DELETE",
            
//             headers: { 
//                 'Content-Type': 'application/json',
//                 "Authorization" :token,
//                 ...header
//             },
//             body: JSON.stringify(body),
//             signal:controller.signal
//         };
    
//         let endpoit = url;
//         // console.log(endpoit, body)
//         fetch(endpoit, requestOptions)
//         .then(async results => {
//             if(results.status === 200){
//                 return results.json();
//             } else {
//                 let data = await results.json();
//                 throw new Error(data.Message);
//             }
//         })
//         .then(async data => {
//             var json = data;
//             if(json.Status.Code === 1000){
//                 resolve(json.Result);
//             } else {
//                 throw Error(data.Message)
//             }
//         })
//         .catch(err => {
//             if(err != null)
//                 reject({message:err.message})
            
//         })
//     });

    
// }