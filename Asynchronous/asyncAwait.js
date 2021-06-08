const hasMeeting=true;

const meeting=new Promise((resolve,reject)=>{ //do stuff
    if(!hasMeeting){
        const meetingDetails={
            name:'Technical Meeting',
            location:"Google Meet",
            time:"10:00pm"
        };
        setTimeout(() => {
             resolve(meetingDetails)
        }, 2000);
       
    }else{
        reject(new Error('meeting already scheduled!'))
    }
});

const addToCalender=(meetingDetails)=>{
        const calender=`${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
        return Promise.resolve(calender)
}

//  meeting
//  .then(addToCalender)
//  .then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })


async function myMeeting(){
    try{
    const meetingDetails=await meeting;
    const calender=await addToCalender(meetingDetails);
    console.log(calender)
    }catch{
        console.log(`Something Wrong`)
    }
}

myMeeting(); 
 console.log("TEst")