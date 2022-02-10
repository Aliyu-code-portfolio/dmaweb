import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const getNextEvent=async(data)=>{
     await firebase.firestore().collection('publicData').doc('event').get().then(item => { 
         data(item.data()) 
         })
}
export const getLikes=async(data)=>{
     await firebase.firestore().collection('publicData').onSnapshot((snapshot)=>{
         snapshot.forEach(element => {
             data(element.data().likes)
         });
     })
}
export const addVote=async()=>{
    await firebase.firestore().collection('publicData').doc('vote').get().then(item => { 
         placeVote(item.data().likes) 
         })
}
const placeVote=(currentVote)=>{
    firebase.firestore().collection('publicData').doc('vote').set({
        likes: currentVote+1,
    })
}