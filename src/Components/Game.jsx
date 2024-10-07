import { useState } from 'react'
import Icon from './Icon.jsx'
import winningsound from '../winningSound.wav'
import library from '../library.jsx'


const Game =()=>{
    const [playing, setPlay] = useState(true);
    const [icons, setIcons] = useState([]);
  
    const Play=()=>{
        setPlay(true);

        setTimeout(()=>{
            var spinWheels = document.querySelectorAll('.spinWheel');
            spinWheels.forEach(item=>{
                item.classList.add('spinAnimation')
            })

        },200)

        setTimeout(() => {       
            var spinWheels = document.querySelectorAll('.spinWheel');
            spinWheels.forEach(item=>{              
                item.classList.remove('spinAnimation');
                item.classList.add('fadeOut');
                
            })
            setTimeout(()=>{ 
                setPlay(false);
                var icons = Throw();
                setIcons(icons);               
               
            },500)
      

            setTimeout(()=>{
                let winningItems = document.querySelectorAll('.winning');
                var winningSound = document.getElementById('winningSound');
                if(winningItems.length>0)
                {
                    winningSound.curentTime= 0;
                    winningSound.play();
                    setTimeout(()=>{                                          
                        winningItems.forEach(item=>{
                            item.classList.remove('fadeIn');
                        });              
                    
                     },4500);
                }

                setTimeout(()=>{
                   winningItems.forEach(item=>{
                       item.classList.remove('bounce'); 
                   });
                },10000)

            },600)

        }, 5000);

    }

    const Throw = ()=>{
        let times = 3;
        const finalIcons = [];

        for (var i = 0; i < times; i++) {
            let randomNumber = Math.floor(Math.random() * 12);
            finalIcons.push(library.icons[randomNumber]);
        }
        return finalIcons   
    }

    return(
        <div className="container-sm">
            <div className="playIcons row">
                   {    
                        !playing?
                            icons.map((item, index) =>( 
                              <Icon key={index} iconList={icons} icon={item}/> 
                        )):
                        library.spinWheels.map((item, index)=>(
                            <div key={index} className='col col-xs-4'>
                                 <img className='spinWheel' src={item} ></img>
                            </div>
                           
                        ))                          
                    }
            </div>
            <div className='row'>
                <div className='offset-md-3 col col-md-4'>
                    <a onClick={()=> Play()} className="show btn btn-primary btn-lg">Play</a>
                </div>
                <audio id="winningSound">
                    <source src={winningsound} type='audio/wav'></source>
                </audio>
            </div>         
        </div>
    )
}
export default Game