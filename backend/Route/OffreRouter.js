 const express = require("express");
 const Offres = require("../Model/Offre");


 const route = express.Router()


     route.get("/", async(req,res)=>{
        try {
            const { search, sort, filter, page, limit } = req.query;
        
            const query = {};
        
            if (search) {
              query.$or = [
                { Genre: { $regex: search, $options: 'i' } },
                { Post: { $regex: search, $options: 'i' } },
              ];
            }
        
            if (filter) {
              query.Genre = filter;
            }
        
            const sortOptions = sort ? { [sort]: 1 } : {};
        
            const jobs = await Offres.find(query)
              .sort(sortOptions)
              .skip(parseInt(page) * parseInt(limit))
              .limit(parseInt(limit));
        
            const totalJobs = await Offres.countDocuments(query);
        
            res.json({
              jobs,
              totalJobs,
              totalPages: Math.ceil(totalJobs / parseInt(limit)),
            });
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          } 
     })

 module.exports = route;