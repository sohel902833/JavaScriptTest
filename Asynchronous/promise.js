// const hasMeeting=false;

// const meeting=new Promise((resolve,reject)=>{ //do stuff
//     if(!hasMeeting){
//         const meetingDetails={
//             name:'Technical Meeting',
//             location:"Google Meet",
//             time:"10:00pm"
//         };
//         resolve(meetingDetails)
//     }else{
//         reject(new Error('meeting already scheduled!'))
//     }
// });

// const addToCalender=(meetingDetails)=>{
//         const calender=`${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
//         return Promise.resolve(calender)
// }

//  meeting
//  .then(addToCalender)
//  .then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })

// console.log("Hello")



const promise1=Promise.resolve({
    name:"Md Sohrab Hossain Sohel",
    roll:902833,
    gpa:3.56
});

const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({
            registration:855665
        })
    }, 2000);
})



Promise.all([promise1,promise2])
    .then(data=>{
        console.log(data)
    })

console.log("data")
for(let i=0; i<=450; i++){
    console.log(i)
}






