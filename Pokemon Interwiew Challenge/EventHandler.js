export default class EventHandler {
    constructor(api,canvasController) {
        this.api = api;
        this.canvasController = canvasController;
      }
      
      async Game() {
        const canvas = document.getElementById('canvas');
        const canvas2 = document.getElementById('canvas2');
        const canvas3 = document.getElementById('canvas3');
        const canvas4 = document.getElementById('canvas4');
        const canvas5 = document.getElementById('canvas5');
        const canvas6 = document.getElementById('canvas6');


        const canvasController = await this.canvasController;
        const pokemons = await this.api.getPokemons();
        const url = 'https://i.imgflip.com/382vb6.png';
        const ulrPlayAgain ='http://pixelartmaker.com/art/bb4f1553fff6dba.png';
        
        let clickedImage  ;
        let randomPokemon = 0;
        let charecterOneX = 350;
        let charecterOneY = 450;
        let charecterTwoX = 810;
        let charecterTwoy = 90;
        let hpPokeHero ;
        let hpPokeEnemy;
        let turn;
        let damageToHero  = 0;
        let damageToEnemy  = 0;
        let backFrame = 0;
        let color = ['#00FF00','#FFFF00','#FF0000'];
        let HPforYellow1 =0;
        let HPforRed1 = 0;
        let HPforYellow2=0;
        let HPforRed2 =0;
        let scroll;
        let clicked;
   
     //indexesfor color array 
         let d=0;
         let z= 0;
        

        // let secondsPassed = 0;
        // let oldTimeStamp = 0;
        // let movingSpeed = 50;

        
        let audio = new Audio('hit.wav');
        let theme = new Audio('battle.mp3');
    
        canvas.addEventListener('click',  clickEvent, false);
        canvas6.addEventListener('click',  playAgainEvent, false);

        function ClearAll() {
            setTimeout(() =>{
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const ctx2 = canvas2.getContext('2d');
                ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
                const ctx3 = canvas3.getContext('2d');
                ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
                const ctx4 = canvas4.getContext('2d');
                ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
                const ctx5 = canvas5.getContext('2d');
                ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
                const ctx6 = canvas6.getContext('2d');
                ctx6.clearRect(0, 0, canvas6.width, canvas6.height);},100);

                
                setTimeout(() =>{canvasController.Draw();canvasController.Draw();},1000);
                setTimeout(() =>{ canvasController.Draw();},3000);
            
        }
        
        function playAgainEvent(e) { 
            let rect = this.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top; 
                if(x>= 600 &&clicked===1 ){ 
                    ClearAll();console.log(x,y);
                }   
                clicked = 0;
            }
        
            function  clickEvent(e) { 
                let yOne =120;
                let yTwo = 300;
                let rect = this.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
                    
                          /* for the possitions of the images in the first column*/
                     for (let i = 0; i < 100; i+=2) {
                         if(x >= 150 && x <= (300) && y >= yOne && y <= (yTwo)){clickedImage =i;break;}
                         yOne += 480;
                         yTwo += 480;
                     }
                      //for the possitions of the images in the second column\\
                     yOne =120;
                     yTwo =300;
                     for (let i = 1; i < 100 ;i+=2) {
                        if(x >= 900 && x <= (1050) && y >= yOne && y <= (yTwo)){clickedImage = i;break;}
                        yOne += 480;
                        yTwo += 480;
                    }    console.log(x,y);

                     randomPokemon = Math.floor(Math.random() * 100);  
                    while(randomPokemon===clickedImage){randomPokemon = Math.floor(Math.random() * 100); }
                
                    if(pokemons[randomPokemon].stats[5].base_stat > pokemons[clickedImage].stats[5].base_stat){
                         turn = 1;
                    }else{turn = 0;}
                    if(pokemons[randomPokemon].stats[5].base_stat === pokemons[clickedImage].stats[5].base_stat){
                        turn = Math.floor(Math.random() * 2);
                    }
                   scroll =0;
                    hpPokeHero =  pokemons[clickedImage].stats[0].base_stat;
                    hpPokeEnemy = pokemons[randomPokemon].stats[0].base_stat;

                     window.scrollTo(0,0); 
                     window.onscroll = function () { if (scroll===0){window.scrollTo(0, 0); }};  
                         

                      clearCanvasandSetBackground();
                      DrawStats();
                      drawHPbarHero();
                      drawHPbarEnemy();
                      DrawPokemonHero();
                      DrawPokemonEnemy();
                      gameLoop();
                      
                      
                   }


                                function clearCanvasandSetBackground() {
                                    const ctx = canvas.getContext('2d');
                                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                                    const animeteBackground =new Image();
                                    animeteBackground.onload = () =>{
                                    ctx.drawImage(animeteBackground,  0 ,0 ,1500,800);}
                                    animeteBackground.src = url;
                                }     
                        
                             

                            function DrawPokemonHero(){
                                const ctx = canvas2.getContext('2d');
                                setTimeout(() =>{ 
                                const pokeBackImage = pokemons[clickedImage].sprites.back_default;
                                const poke =new Image();
                                poke.onload = () => {
                                ctx.drawImage(poke,  charecterOneX ,charecterOneY ,400,400);}
                                poke.src = pokeBackImage;
                                ctx.clearRect(0, 0, canvas2.width, canvas.height);},10);
                            }
                                
                                function DrawPokemonEnemy(){
                                const ctx = canvas3.getContext('2d');
                                setTimeout(() =>{ 
                                const pokeFrontImage  = pokemons[randomPokemon].sprites.front_default;
                                const pokeTwo = new Image();
                                pokeTwo.onload = () =>{
                                ctx.drawImage(pokeTwo,  charecterTwoX ,charecterTwoy ,400,400);}
                                pokeTwo.src = pokeFrontImage;
                                ctx.clearRect(0, 0, canvas2.width, canvas.height);},10);
                            } 



                            function DrawStats() {
                                const ctx = canvas4.getContext('2d');

                                ctx.lineWidth = 7;
                                ctx.strokeStyle = "#006400";
                                ctx.strokeRect(200, 110, 550, 150);

                                ctx.lineWidth = 7;
                                ctx.strokeStyle = "#006400";
                                ctx.strokeRect(900, 600, 550, 150);

                                ctx.beginPath();
                                ctx.rect(900, 600, 550, 150);
                                ctx.rect(200, 110, 550, 150);
                                ctx.fillStyle = "#6B8E23";
                                ctx.fill();
                                
                                ctx.fillStyle = "#F8F8FF";
                                ctx.font = "28px Verdana";
                                ctx.fillText('Name: ' + pokemons[randomPokemon].name,390,160);
                                ctx.font = "24px Verdana";
                                ctx.fillText('Attack: ' + pokemons[randomPokemon].stats[1].base_stat,220,200);
                                ctx.fillText('Defense: ' + pokemons[randomPokemon].stats[2].base_stat,220,240);
                                ctx.fillText('Speed: ' + pokemons[randomPokemon].stats[5].base_stat,390,200);
                                ctx.fillText('Hp: ' + pokemons[randomPokemon].stats[0].base_stat,390,240);

                                ctx.font = "28px Verdana";
                                ctx.fillText('Name: ' + pokemons[clickedImage].name,1090,650);
                                ctx.font = "24px Verdana";
                                ctx.fillText('Attack: ' + pokemons[clickedImage].stats[1].base_stat,920,690);
                                ctx.fillText('Defense: ' + pokemons[clickedImage].stats[2].base_stat,920,730);
                                ctx.fillText('Speed: ' + pokemons[clickedImage].stats[5].base_stat,1090,690);
                                ctx.fillText('Hp: ' + pokemons[clickedImage].stats[0].base_stat,1090,730);
                                
                            }



                            function drawHPbarHero() {
                               HPforYellow1 = pokemons[clickedImage].stats[0].base_stat /2;
                               HPforRed1 = pokemons[clickedImage].stats[0].base_stat *0.1;
                               console.log(HPforYellow1,HPforRed1);
                               const ctx = canvas5.getContext('2d');
                                
                                ctx.font = "14px Verdana";
                                ctx.fillText('HP Bar:' + hpPokeHero ,1270,680);

                                
                                if(hpPokeHero<HPforYellow1&&hpPokeHero>HPforRed1){d=1;}
                                if(hpPokeHero<HPforRed1){d=2;}

                                ctx.beginPath();
                                ctx.rect(1250, 690,  hpPokeHero , 25);
                                ctx.fillStyle = color[d];
                                ctx.fill();
                            }

                            function drawHPbarEnemy() {
                                HPforYellow2 = pokemons[randomPokemon].stats[0].base_stat /2;
                                HPforRed2 = pokemons[randomPokemon].stats[0].base_stat *0.1;
                                const ctx = canvas5.getContext('2d');
                                
                                ctx.font = "14px Verdana";
                                ctx.fillText('HP Bar: '+ hpPokeEnemy  ,570,190);

                                if(hpPokeEnemy<HPforYellow2&&hpPokeEnemy>HPforRed2){z=1;}
                                if(hpPokeEnemy<HPforRed2){z=2;}

                                ctx.beginPath();
                                ctx.rect(550, 200,  hpPokeEnemy , 25);
                                ctx.fillStyle = color[z];
                                ctx.fill();  
                            }



                            function gameLoop(timeStamp) {
                             theme.play();
                            if(turn ===1){
                                blink();
                                if(charecterTwoX===550){backFrame=1; audio.play();}
                                updateEnemy();  DrawPokemonEnemy();}

                                if(charecterTwoX===811&&backFrame===1){
                                        calculateDamage();
                                        hpPokeHero = hpPokeHero - damageToHero;
                                       
                                        reDrawHPbars();
                                        turn = 0 ;
                                        backFrame = 0;
                                        damageToHero = 0;
                                        if(hpPokeHero<=0){GameRestart();
                                            return false;
                                            }
                                }

                              if(turn===0){ 
                                blink();
                                if(charecterOneX===550){ backFrame=2; audio.play();}
                                  updateHero();DrawPokemonHero();}

                                  if(charecterOneX===349&&backFrame===2){
                                    calculateDamage();
                                    hpPokeEnemy = hpPokeEnemy - damageToEnemy;
                                    
                                    reDrawHPbars();
                                    turn = 1;
                                    backFrame = 0;
                                    damageToEnemy = 0;
                                    if(hpPokeEnemy<=0){ GameRestart();
                                        return false;
                                   }
                                }
                                window.requestAnimationFrame(gameLoop);
                            }
                            

                            function updateHero(secondsPassed) {
                                if(backFrame===0){charecterOneX += 1;charecterOneY -= 1;}
                                else{charecterOneX -= 1;charecterOneY += 1;}
                            }
                            
                            function updateEnemy(secondsPassed) {
                                if(backFrame===0){charecterTwoX -= 1;charecterTwoy += 1;}
                                else{charecterTwoX += 1; charecterTwoy -= 1;}
                            }

                           
                          

                            function reDrawHPbars() {
                                const ctx = canvas5.getContext('2d');
                                ctx.clearRect(0, 0, canvas5.width, canvas.height);
                                drawHPbarHero();
                                drawHPbarEnemy();
                            }


                            function calculateDamage() {
                                if(turn===1){
                                    let y = (pokemons[randomPokemon].stats[1].base_stat /pokemons[clickedImage].stats[2].base_stat)
                                    * Math.floor(Math.random() * 200); 
                                   damageToHero =  Math.round(y);
                                  
                                   console.log('damage to hero : ---',damageToHero);
                                   
                                    
                                }
                                else{
                                    let y = (pokemons[clickedImage].stats[1].base_stat /pokemons[randomPokemon].stats[2].base_stat)
                                    * Math.floor(Math.random() * 200); 
                                    damageToEnemy = Math.round(y);
                                   
                                     console.log('damage to enemy : ---',damageToEnemy);   
                                }


                            }
                            function blink() {
                                
                                if(turn===1){
                                    if(charecterTwoX===550||charecterTwoX===560||charecterTwoX===570){
                                    const ctx = canvas2.getContext('2d');
                                    ctx.clearRect(0, 0, canvas2.width, canvas.height);}
                                    if(charecterTwoX===555||charecterTwoX===565||charecterTwoX===575){DrawPokemonHero();}
                                     
                              }
                                
                                else{ 
                                    if(charecterOneX===550||charecterOneX===540||charecterOneX===530){
                                        const ctx = canvas3.getContext('2d');
                                        ctx.clearRect(0, 0, canvas3.width, canvas.height);}
                                    if(charecterOneX===545||charecterOneX===535||charecterOneX===525){DrawPokemonEnemy();}      
                                    
                                }
                                
                            }


                            function GameRestart() {
                                theme.pause();
                                theme.currentTime = 0;
                                const ctx6 = canvas6.getContext('2d');
                                setTimeout(() =>{ 
                                    const playAgain =new Image();
                                    playAgain.onload = () => {
                                    ctx6.drawImage(playAgain, 600  ,450 ,400,200);}
                                    playAgain.src = ulrPlayAgain;},10);
                                  
                                
                                damageToHero  = 0;
                                damageToEnemy  = 0;
                                backFrame = 0;
                                HPforYellow1 =0;
                                HPforRed1 = 0;
                                let HPforYellow2=0;
                                let HPforRed2 =0; 
                                d=0;
                                z= 0;
                                scroll=1;
                                clicked =1;

                                if(hpPokeHero<=0){
                                    ctx6.fillStyle = "#FF0000";
                                    ctx6.font = "200px Verdana";
                                    ctx6.fillText('YOU LOSE',340,480);
                                }
                                else{
                                    ctx6.fillStyle = "#FFFF00";
                                    ctx6.font = "200px Verdana";
                                    ctx6.fillText('YOU WIN',340,480);
                                }
                            }
                            
                }

                
   }
   
