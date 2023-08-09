const mongoose=require('mongoose')

const Schema=mongoose.Schema

const WorkoutSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    },
},{timestamps:true})//timestamps=>add a created property for us  (when docu was created)

module.exports=mongoose.model('Workout',WorkoutSchema)

//workout.find()


 

