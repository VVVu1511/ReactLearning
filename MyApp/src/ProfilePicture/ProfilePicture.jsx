
function ProfilePicture(){
    const imageUrl = './src/assets/sung_jin_woo.jpg'
    const handleClick = (e) => {
        if(e.target.style.opacity === "100"){
            e.target.style.opacity = "0";
        }

        else{
            e.target.style.opacity = "100";
        }
    }

    return (
        <img onClick={(e) => handleClick(e)} src = {imageUrl}></img>
    )
}

export default ProfilePicture