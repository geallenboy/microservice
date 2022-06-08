
module.exports =  {
    devServer:{
        port:1024,
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    },
    configureWebpack:{
        output:{
            library:'vueApp',
            libraryTarget:'umd'
        },
       
    }
}