import './App.css';
import flash1 from './font/photo-1443891238287-325a8fddd0f7.jpg';
import flash2 from './font/flashlight.jpg';
import flash5 from './font/photo-1465156799763-2c087c332922.jpg';
import flash4 from './font/photo-1442522772768-9032b6d10e3e.jpg';
import flash3 from './font/photo-1465188162913-8fb5709d6d57.jpg';
import img from './img/29542115_1697562723667727_3282160004585600264_n.png'
import {format} from "date-fns";


function App() {
    const today =format(new Date(),"dd'.'MM'.'yyyy");
    const todayTime = format(new Date(),"HH:mm");
    console.log(today);
    console.log(todayTime);


    return (
        <div>
            <div id="head">
                
                <div className="img_left">
                    <img className='imgs' src={img} alt="img"/>
                </div>

                <div className="head_input_right"><input  className='input' placeholder='wallpaper' type="text"/></div>

                <div className="todayOrTime"><p className='texts'>{today}</p><p className='texts'>{todayTime}</p></div>


                
            </div>


        <div className="cards">

            <div className="card">
                <img src={flash1} alt=""/>
                <div className="centered">
                    <span className="font-link">
                        HEY
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={flash2} alt=""/>
                <div className="centered">
                    <span className="font-link">
                        LET'S
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={flash3} alt=""/>
                <div className="centered">
                    <span className="font-link">
                        GIVE
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={flash4} alt=""/>
                <div className="centered">
                    <span className="font-link">
                        ALL
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={flash5} alt=""/>
                <div className="centered">
                    <span className="font-link">
                        YOU CAN
                    </span>
                </div>
            </div>
        </div>



        </div>
    );
}

export default App;
