let nomeHeroi = "Mario";
let qtXpHeroi = 4020;

if(qtXpHeroi < 1000)
    {
        qtXpHeroi = "Ferro";
    }
else
{
    if (qtXpHeroi > 1001 && qtXpHeroi < 2000) {

        qtXpHeroi = "Bronze";

    } else {
        if (qtXpHeroi > 2001 && qtXpHeroi < 5000) {

            qtXpHeroi = "Prata";
    
        } else {
            if (qtXpHeroi > 5001 && qtXpHeroi < 7000) {

                qtXpHeroi = "Ouro";
        
            } else {
                if (qtXpHeroi > 7001 && qtXpHeroi < 8000) {

                    qtXpHeroi = "Platina";
            
                } else {
                    if (qtXpHeroi > 8001 && qtXpHeroi < 9000) {

                        qtXpHeroi = "Ascendente";
                
                    } else {
                        if (qtXpHeroi > 9001 && qtXpHeroi < 10000) {

                            qtXpHeroi = "Imortal";
                    
                        } else {
                            qtXpHeroi = "Radiante";
                        }                        
                    }
                }
            }
        }
    }
}
    console.log("O Herói de nome " + nomeHeroi + " esta no nível de " + qtXpHeroi);
