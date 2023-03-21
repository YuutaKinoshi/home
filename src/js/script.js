const bar = document.querySelector('#openMenu')
const menuOpen = document.querySelector('.menuOpen')
const closeMenuButton = document.querySelector('.fa-xing')
const folder = document.querySelector('.fa-folder')
const folderOpen = document.querySelector('.fa-folder-open')
const folderContainer = document.querySelector('.folder-container')
const buttonCloseFolder = document.querySelector('.fa-square-xmark')
const user = document.querySelector('.fa-user')
const perfil = document.querySelector('.perfil')
const spotifyButton = document.querySelector('.fa-spotify')
const spotifyBox = document.querySelector('.spotify')

spotifyButton.onclick = () => openCloseSpotify()

user.addEventListener('click', () => {
    perfil.classList.toggle('perfilOpen')
})

bar.addEventListener('click', () => {
    closeMenuButton.classList.toggle('fa-xing-up')
    openClose() 
})

closeMenuButton.onclick = () => {
    openClose()
    closeMenuButton.classList.toggle('fa-xing-up')
}

buttonCloseFolder.addEventListener('click', () => {
    folder.style.display = 'block'
    folderOpen.style.display = 'none'
    folderOpenClose()
})

folder.addEventListener('click', () => {
    folder.style.display = 'none'
    folderOpen.style.display = 'block'
    folderOpenClose()
})

folderOpen.addEventListener('click', () => {
    folder.style.display = 'block'
    folderOpen.style.display = 'none'
    folderOpenClose()
})

function openClose() {
    menuOpen.classList.toggle('menuOpenClicked')
}

function folderOpenClose() {
    folderContainer.classList.toggle('folder-container-open')
}

function openCloseSpotify() {
    spotifyButton.addEventListener('click', () => {
        spotifyBox.classList.toggle('spotify-open')
    })
}