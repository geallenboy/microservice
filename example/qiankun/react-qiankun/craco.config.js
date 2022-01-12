
module.exports = {
    webpack:{
        output:{
            library:'reactApp',
            libraryTarget:'umd'
        }
    },
    devServer:{
        port:20001,
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    },
}