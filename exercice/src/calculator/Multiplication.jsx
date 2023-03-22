import { useState } from "react"
import '../App.css'
import Reset from '../components/Reset'


function Index (){

    const [numberOne, setNumberOne] = useState(null)
    const [numberTwo, setNumberTwo] = useState(null)
    const [sum, setSum] = useState('')
    
    const enterData = () =>{
        let sum = ''
        /** Fonction logique avec 2 paramètres */
        function multi(num1, num2) {
             sum = num1 * num2
            return sum
        }
         /** Variable avec la méthode prompt */
        let number1 = Number(prompt("S'il vous plait, entrez le premier chiffre ou nombre", ""))
         /** Variable avec la méthode prompt */
        let number2 = Number(prompt("S'il vous plait, entrez le deuxième chiffre ou nombre", ""))
        
        /**Appel fonction avec des variables en paramètres */
        multi(number1, number2)

        // Les fonctions useState
        setNumberOne(number1)
        setNumberTwo(number2)
        setSum(sum)
        
    }
    return(
        <div className="marg-bot">
            <button className="btn" onClick={()=>{enterData()}}>
                Vous voulez faire de la Multiplication? Cliquez ici!
            </button>
            <>
                {numberOne !== null && numberTwo !== null ? (<><div className="screen-calc">
                    {numberOne} * {numberTwo} = {sum}
                </div><Reset init={()=>{setNumberOne(null)}} /></>) : null}
            </>
        </div>
    )
}
export default Index