// Fichier H1

import { useState } from 'react'
import './App.css'

function ModifyTitle() {
  const [langage, setLangage] = useState('...')

  /** Conditions pour afficher le choix du langage */
  const changeTitle = () => {
    // eslint-disable-next-line default-case
    switch (langage) {
      case '...':
        setLangage('JavaScript')
        break
      case 'JavaScript':
        setLangage('HTML')
        break
      case 'HTML':
        setLangage('CSS')
        break
      case 'CSS':
        setLangage('...')
        break
    }
  }
  return (
    <>
      <h1 className="Txt-center">
        Un de mes langages préférés est{' '}
        <span className="color-let-sp">{langage}</span>
      </h1>
      <div className="width-marg displ-flx-center">
        <button
          className="btn"
          onClick={() => {
            changeTitle()
          }}
        >
          Cliquez ici pour afficher l'un de mes langages préférés
        </button>
      </div>
    </>
  )
}

export default ModifyTitle
