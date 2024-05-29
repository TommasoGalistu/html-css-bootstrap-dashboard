// pulsante +, per aggiunta studente
let pulsanteAggStudente = document.querySelector('.pulsanteAggiungiStudente')
// slidebar laterale da aprire
let slideMenulaterale = document.querySelector('.slideMenu')
// x per chiudere
let xClose = document.querySelector('.chiudiFinestra')
// background della slidebar laterale
let backgroundSlideBar = document.querySelector('.backGroundProva')


pulsanteAggStudente.addEventListener('click', () =>{

    slideMenulaterale.classList.remove('d-none')
    backgroundSlideBar.classList.remove('d-none')

})

xClose.addEventListener('click', () => {
    slideMenulaterale.classList.add('d-none')
    backgroundSlideBar.classList.add('d-none')
})