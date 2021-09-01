import { Add, PlayArrow, ThumbDownAltOutlined, ThumbsUpDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listItem.scss'
import { useState } from 'react';

export default function ListItem({index}) {
    const[isHovered,setisHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
    return (
        <div className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}>
            <img src="https://images.moviesanywhere.com/8f8525c7ae087ec040998dbadd9a4415/dc8d9fdf-1646-407b-a4a7-53f6083ad00b.jpg" alt="">

            </img>
            {isHovered && (
            <>            
                <video src={trailer} autoPlay={true} loop />

           
            
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className ="icon"/>
                    <Add className ="icon"/>
                    <ThumbUpAltOutlined className ="icon"/>
                    <ThumbDownAltOutlined className ="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span> 2hr 30 min</span>
                    <span className="limit">+16</span>
                    <span>2018</span>
                </div>
                <div className="desc">
                    Random facts about a movie which is not that important ,dont read it ,its useless,why are
                    you still reading.
                </div>
                <div className="genre"> Action</div>
            </div></>
            )}
        </div>

        
    )
}
