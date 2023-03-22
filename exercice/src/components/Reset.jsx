/** Bouton pour effacer */

import '../App.css'

function Index(props) {
    return (
        <button className="btn" onClick={props.init}>
            Effacer!
        </button>
    )
}
export default Index
