import { useState } from "react"

function Index (){
    const [numberOne, setNumberOne] = useState(null)
    const [numberTwo, setNumberTwo] = useState(null)
    const [sum, setSum] = useState("")
    const enterData = () =>{
        
        let sum = ''

        /**Fonction logique avec 2 paramètre */
        function add (num1, num2){
            sum = num1 + num2
            return sum
        }

        /** Variable avec la méthode prompt */
        let number1 = Number(prompt("Svp, entrez le premier chiffre ou nombre", " "))
        /** Variable avec la méthode prompt */
        let number2 = Number(prompt("Svp, entrez le deuxième chiffre ou nombre", " "))

        //Appal de la fonction avec des variables en paramètre
        add(number1, number2)

        // Les fonctions useState
        setNumberOne(number1)
        setNumberTwo(number2)

        console.log(sum)
        setSum(sum)
    }
 return(
    <div>
        <button onClick={()=>{enterData()}}>Cliquez ici pour l'addition</button>
        <>
        {numberOne !== null && numberTwo !== null ?(<div>
                {numberOne} + {numberTwo} = {sum}
        </div>): null}
        </>   
    </div>
 )
}
export default Index