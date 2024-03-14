export default function User({user}){
    return(
        <div>
            <h4>Name : {user.name}</h4>
            <p>Email : {user.email}</p>
        </div>
    )
}