import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="action">Action</option>
                        <option value="horror">Horror</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                    </select>
                    
                </div>
            )}
            <img src="https://s3.amazonaws.com/photos.bcheights.com/wp-content/uploads/2019/10/03123602/peaky-blinders-online.jpg" alt=""></img>
            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Peaky_Blinders_Logo.png" alt=""/>
                <span className="desc">
                    Peak blinders is a web series on netflix
                
                

                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                

                </div>



            </div>
        </div>
    )
}
