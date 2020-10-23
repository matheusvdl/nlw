const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const spanLat = document.querySelector('span[data-lat]')
const spanLng = document.querySelector('span[data-lng]')

const  map = L.map('mapid', options).setView([spanLat.dataset.lat,  spanLng.dataset.lng], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);



//creat icon

const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})




L.marker([spanLat.dataset.lat,  spanLng.dataset.lng], {icon})
.addTo(map)



function selectImage(){
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }
    button.classList.add('active')

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src
}