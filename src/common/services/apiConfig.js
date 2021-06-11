const apiConfig = {   
    
    setEnvironmentURLs(urlParam) {
        //Add other default hosts as objects inside api_ROOT in future here eg: DAC API, etc.,
        let api_ROOT = {};
        const hostname = urlParam;

            //default the URLs to ACC, if unable to fetch bowser URL
            api_ROOT.root = "https://randomuser.me/api/0.8/?results=20";
    
        return api_ROOT;
          
    }
};

export default apiConfig;