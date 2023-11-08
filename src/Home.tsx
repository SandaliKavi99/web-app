type HomeProps ={
    username: string
}


export const Home=(props: HomeProps)=>{
    return(
        <div>
            <h2>Welcome {props.username} !</h2>
        </div>
    )
}