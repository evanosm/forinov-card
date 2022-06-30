import React, { useState } from 'react'

const Stepper = () => {

    //on définie les étapes dans un objet js
    const steps =
    {
        1: 'Inscription',
        2: 'Validation',
        3: 'Étape 3',
        4: 'Étape 4',
        5: 'Collaboration en discussion - POC',
        6: 'Collaboration acceptée',
        7: 'Fin',
    }

    //fonction permettant de définir des variables de sessions
    const setSessionData = (key, value) => {
        sessionStorage.setItem(key, value)
    }    

    //on défini l'index par rapport à la valeur de la variable de session relative à l'étape
    const getSessionData = sessionStorage.getItem('temp-step')
    const [index, setindex] = useState(getSessionData ? getSessionData : 1);

    //fonction qui permet de changer l'étape en cliquant sur les étapes (dots) du stepper
    const handleClick = (e) => {
        var date = new Date();
        
        var now = date.getFullYear()+'-'+date.getDate()+'-'+(date.getMonth()+1)+' | '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        
        let stepBar = document.querySelector('.step-bar-progress')
        
        setindex(e.target.id)
        
        //si on clique sur une étape sauf la première
        if (e.target.id !== '1') {
            //si l'étape est déjà active
            if (e.target.classList.contains('active')) {
                for (let i = e.target.id; dots.length; i++) {
                    //on enlève la classe active à l'étape et on défini les 2 variables de session (étape et timestamp)
                    document.getElementById(i).classList.remove('active')
                    setSessionData('temp-step', e.target.id - 1)
                    setSessionData('temp-step-date-' + i, now)
                    //si l'étape active est l'étape 2
                    if (e.target.id === '2') {
                        //on clear la step bar et retourne à l'étape 1
                        stepBar.style.width = '0%'
                        document.getElementById(e.target.id).removeAttribute('title')
                        setindex(e.target.id - 1)
                    } else {
                        //on clear la stepbar jusqu'à l'étape d'avant
                        stepBar.style.width = `${((e.target.id - 2) * 100) / (dots.length - 1)}%`
                        document.getElementById(e.target.id).removeAttribute('title')
                        setindex(e.target.id - 1)
                    }
                }
            } else {
                //on boucle de l'étape cliquée à la première étape
                for (let i = e.target.id; i >= 1; i--) {
                    //on définie la classe active pour toutes ces étapes et on défini les 2 variables de session (étape et timestamp)
                    document.getElementById(i).classList.add('active')
                    document.getElementById(e.target.id).setAttribute('title', now)
                    stepBar.style.width = `${((e.target.id - 1) * 100) / (dots.length - 1)}%`
                    setSessionData('temp-step', e.target.id)
                    setSessionData('temp-step-date-' + i, now)
                }
            }
        } else {
            for (let i = 1; dots.length; i++) {
                document.getElementById(i).classList.remove('active')
                document.getElementById(1).classList.add('active')
                document.getElementById(e.target.id).setAttribute('title', now)
                stepBar.style.width = '0%'
            }
        }
    }

    //on créé une liste d'éléments qui se rempli d'éléments dots par rapport au nombre de steps total
    const dots = []
    for (let keys in steps) {
        dots.push(<div className='dot' id={keys} onClick={handleClick} />)
    }



    window.addEventListener('load', function () {
        //on récupère les variables de session
        const getSessionData = sessionStorage.getItem('temp-step')

        const stepBar = document.querySelector('.step-bar-progress')

        for (let i = 1; i <= dots.length; i++) {
            let getSessionDataTime = sessionStorage.getItem('temp-step-date-' + i)
            if (getSessionDataTime) {
                document.getElementById(i).setAttribute('title', getSessionDataTime)
            }
        }

        //si on a une variable de session, l'étape en cours est celle de la session
        if (getSessionData) {
            setindex(getSessionData)
            for (let i = getSessionData; i >= 1; i--) {
                document.getElementById(i).classList.add('active')
            }
            stepBar.style.width = `${((getSessionData - 1) * 100) / (dots.length - 1)}%`
        } else {
            //sinon on affiche l'étape 1
            document.getElementById(1).classList.add('active')
            stepBar.style.width = '0%'
        }
    })

    
    return (
        <div>
            <h3 className='step-title'>{steps[index]}</h3>
            <div className='stepper-bar'>
                <div className='step-bar'>
                <div className='step-bar-progress'>
                </div>
                    {dots}
                </div>
            </div>
        </div>
    )
}

export default Stepper;