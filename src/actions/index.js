import { auth, provider, storage } from "../firebase";
import db from '../firebase'
import { SET_USER, DO_LOADING, GET_ARTICLES } from './actionType'


export const setUser = (payload) => ({
    type: SET_USER,
    user: payload
})

export const setLoading = (status)=>({
    type: DO_LOADING,
    status: status
})

export const getArticles = (payload)=>({
type: GET_ARTICLES,
payload: payload
})



export function signInFunc() {
    return (dispatch) => {
        auth.signInWithPopup(provider).then((payload) => {
            dispatch(setUser(payload.user))
        }).catch((err) => {
            alert(err.message)
        })
    }
}


export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user))
            }
        })
    }
}

export function signOutApi() {
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch(setUser(null))
        }).catch((err) => {

        })
    }
}


export function MediaApi(payload) {
    return (dispatch) => {
        dispatch(setLoading(true))

        if (payload.image != "") {
            const upload = storage.ref(`images/${payload.image.name}`).put(payload.image);
            upload.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (snapshot.state === 'RUNNING') {
                        console.log(`progress in running is ${progress}`)
                    }
                }, (err) => console.log(err.code),
                async () => {
                    const downloadURL = await upload.snapshot.ref.getDownloadURL();
                    db.collection("articles").add({
                        actor: {
                            description: payload.user.email,
                            title: payload.user.displayName,
                            date: payload.timestamp,
                            image: payload.user.photoURL

                        },
                        video: payload.video,
                        sharedImg: downloadURL,
                        comments: 0,
                        description: payload.description
                    });
                    dispatch(setLoading(false))
                }
            )

        }else if(payload.video){
            db.collection("articles").add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL

                },
                video: payload.video,
                sharedImg: "",
                comments: 0,
                description: payload.description
            })
            dispatch(setLoading(false))

        }else{
            dispatch(setLoading(false))
        }
    }
}



export function getArticlesApi(){
return (dispatch)=>{
    let payload;
    db.collection("articles").orderBy("actor.date", "desc").onSnapshot((snapshot)=>{
        payload = snapshot.docs.map(((doc)=>doc.data()))
        dispatch(getArticles(payload))
    })
}
}

