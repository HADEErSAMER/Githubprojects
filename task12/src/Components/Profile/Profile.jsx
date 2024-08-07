import "./Profile.css"
import profileimg from "../../assets/image-victor.jpg"

function Profile (){
    return(
        <>
<div id="profilediv">
<div id="topdiv">
<img id="mainimg" src={profileimg}></img>
<div id="mideldiv">
<label className="bold">Victor Crest</label>
<label id="numberlabel">26</label>
</div>
<label className="graylabels">London</label>

</div>
<br/>
<hr />
<div id="mainfotter">
<div className="fotterdiv">
<label className="bold">80K</label>
<label className="bold"> 803K</label>
<label className="bold">1.4K</label>

</div>
<div className="fotterdiv">
<label className="graylabels">Followers</label>
<label className="graylabels">Likes</label>
<label className="graylabels">Photos</label>

</div>
</div>

</div>

</>
    )
}
export default Profile