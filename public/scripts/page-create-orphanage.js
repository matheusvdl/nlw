const  map = L.map('mapid').setView([-16.6799,  -49.255], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng],  {icon}).addTo(map)



})


//upload fotos

function addPhotoField(){
    //pegar container de imagem
    const container =  document.querySelector('#images');
    //pegar o containar para duplicar .new-image
    const fieldsContainer =  document.querySelectorAll('.new-upload');
    //clonando
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    //limpnando
    input.value = "";
    
    //adicionar o clone
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');


    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ""
        return
    }

   span.parentNode.remove();
}

function toggleSelect(event){


   
    //retirar o active
    document.querySelectorAll('.button-select button').forEach(
        function(button){
            button.classList.remove('active')
        }
    )
    //colocar o active

    const button =  event.currentTarget
    button.classList.add('active')

    //atualizar o hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"] ')
   
   //verificar o valor
   input.value = button.dataset.value

}