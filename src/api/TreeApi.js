import {baseUrl} from '@/api/config.js';
export default (() => ({

    _requestData : {},
    async getTreeNodes(requestData){
        let request = {method:'GET'}
        let requestUrl = baseUrl;
        if( Object.keys(requestData).length > 0 ){

            // Create the GET URL with the parameters
            requestUrl = this._buildURL(requestUrl, requestData)
        }
        const res = await fetch(requestUrl, request);
        if(!res) return {};
        const data = await res.json()
        if(!data || !data.items) return {};
        return data;
    },
    async saveBinds( requestData ){

        let request = {

            body: JSON.stringify({
                ...requestData,
                action:'SaveBindDoctorVariation',
                component:'health'
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method : 'POST'
        };


        try {
            const res = await fetch(baseUrl, request);
            //todo handle server error (500, 502 ...)
            if(!res) return {};
            return await res.json()
        } catch (error) {
            // code to handle the error
            console.log("An error occurred:", error.message);
        }
        return {};


    },
    _buildSearchParams(params, prefix = '') {
        let queryString = '';
        for (const [key, value] of Object.entries(params)) {
            const newPrefix = prefix ? `${prefix}[${key}]` : key;
            if (value instanceof Object) {
                queryString += this._buildSearchParams(value, newPrefix);
            } else if (Array.isArray(value)) {
                for (const item of value) {
                    queryString += `${newPrefix}[]=${item}&`;
                }
            } else {
                queryString += `${newPrefix}=${value}&`;
            }
        }
        return (queryString.endsWith('&')) ? queryString.slice(0, -1) : queryString;
    },

    _buildURL(baseURL, params) {
        const searchParams = this._buildSearchParams(params);
        const url = new URL(baseURL);
        url.search = searchParams;
        return url.toString();
    },




}))();
