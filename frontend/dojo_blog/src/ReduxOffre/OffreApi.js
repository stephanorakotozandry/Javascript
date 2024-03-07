import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const OffreApi = createApi({
    reduserPath : "OffreApi",
    baseQuery : fetchBaseQuery({baseUrl:"http://localhost:5000/"}),
    endpoints:(builder)=> ({
        getAllOffre: builder.query({
            query :()=>"api/offre"
        })
    })
})
export const {useGetAllOffreQuery}= OffreApi;