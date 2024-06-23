const mongoose=require("mongoose")

const tableScroll=mongoose.Schema({
    

        Agent:{
            type: String,
            required: true
        },
        AgentPhone:{
            type: Number,
            required: true
        },
        CreateLead:{
            type: String,
            required: true
        },
        LeadSource:{
            type: String,
            required: true
        },




        Name: {
            type: String,
            required: true,
            
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        passport: {
            type: String,
            required: true,
            
        },
        Date: {
            type: Number,
            required: true
        },
        nationality: {
            type: String,
            required: true
        },
        
        uaeResident: {
            type: String,
            required: true
        },
        
        token: {
            type: Number,
            required: true
        },
        closure: {
            type: Number,
            required: true
        },
        booking: {
            type: Number,
            required: true
        },


        isActive:{
            type: Boolean
        },
       
       
    
})
const Scroll=mongoose.model("scrolls", tableScroll)

module.exports={Scroll}