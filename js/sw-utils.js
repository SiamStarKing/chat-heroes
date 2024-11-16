function actualizarCacheDinamico(dynamicCache, req, res){
    if(res.ok){
        return caches.open(dynamicCache).then(cache =>{
            cache.put(req, res.clone());
            return res.clone();
        }); // Cierre then
    } // Cierre if
    else{
        return res;
    }
} // Cierre función