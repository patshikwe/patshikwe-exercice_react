import { useState } from "react";

function ModifyTitle() {
    
        const [langage, setLangage] = useState("...")

        /** Conditions pour afficher le choix du langage */
       const changeTitle = () => {

        // eslint-disable-next-line default-case
        switch (langage) {
            case "...":
                setLangage("JavaScript");
                break;
            case "JavaScript":
                setLangage("HTML");
                break;
            case "HTML": 
                setLangage("CSS");
                break;
            case "CSS":
                setLangage("...")
                break;
        }

        // if (langage === "") {
        //     setLangage("JavaScript")
        // }
        // if (langage === "JavaScript" ) {
        //     setLangage("HTML")
        // }
        // if (langage === "HTML") {
        //     setLangage("CSS")
        // }
        // if (langage === "CSS") {
        //     setLangage("")
        // }

       }
    return (
        <>
            <h1>Mon langage préféré est {langage}</h1>
            <button onClick={()=>{changeTitle()}}>Cliquez ici</button>
        </>
    );
}

export default ModifyTitle;