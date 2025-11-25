var map;

let markerAqui;

function sucess(pos) {
console.log(pos.coords.latitude, pos.coords.longitude);

if (map === undefined) {
map = L.map("map").setView([pos.coords.latitude, pos.coords.longitude], 13);
} else {
map.remove();
map = L.map("map").setView([pos.coords.latitude, pos.coords.longitude], 13);
}

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


var legenda = L.control({position: 'topright'});

legenda.onAdd = function (map) {
var div = L.DomUtil.create('div', 'legenda');
div.innerHTML += "<h4>Categorias do Mapa</h4>";

div.innerHTML += '<div class="legenda-item"><img src="img/Reciclagem.png" /> <p>Reciclagem</p></div>';
div.innerHTML += '<div class="legenda-item"><img src="img/Parques.png" /> <p>Parques e áreas verdes</p></div>';
div.innerHTML += '<div class="legenda-item"><img src="img/PontosColeta.png" /> <p>Pontos de entrega</p></div>';
div.innerHTML += '<div class="legenda-item"><img src="img/ColetaSeletiva.png" /> <p>Coleta Seletiva</p></div>';
div.innerHTML += '<div class="legenda-item"><img src="img/ONGs.png" /> <p>ONGs Ambientais</p></div>';
div.innerHTML += '<div class="legenda-item"><img src="img/FeirasMercados.png" /> <p>Feiras e Mercados</p></div>';

return div;
};

legenda.addTo(map);

var icone1 = L.icon({iconUrl:"img/PontosColeta.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker1 = L.marker([-23.532166390380137, -46.60726779241415], {icon:icone1}).addTo(map);
marker1.bindPopup("<b>Ecoponto Têxtil Brás</b><br>Rua Cachoeira, 958 – Catumbi, São Paulo/SP<br>Horário: Todos os dias: 24h");

var icone2 = L.icon({iconUrl:"img/ColetaSeletiva.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker2 = L.marker([-23.58941463290763, -46.75444241034604], {icon:icone2}).addTo(map);
marker2.bindPopup("<b>Cooperativa Vira Lata</b><br>Rua Nella Murari Rosa, 40 – Jardim Jaqueline, São Paulo/SP<br>Horário: Consultar no site oficial.");

var icone3 = L.icon({iconUrl:"img/ColetaSeletiva.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker3 = L.marker([-23.69344859111629, -46.697765482878886], {icon:icone3}).addTo(map);
marker3.bindPopup("<b>COOPERCAPS – Matriz</b><br>Avenida João Paulo da Silva, 48 – Cidade Dutra, São Paulo/SP<br>Horário: Consultar no site oficial.");

var icone4 = L.icon({iconUrl:"img/Reciclagem.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker4 = L.marker([-23.59580783104776, -46.737572460456015], {icon:icone4}).addTo(map);
marker4.bindPopup("<b>Estação de Reciclagem Assaí</b><br>Av. Prof. Francisco Morato, 4367 – Vila Sônia, São Paulo/SP<br>Horário: Em geral segue o horário da loja Assaí Vila Sônia.");

var icone5 = L.icon({iconUrl:"img/PontosColeta.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker5 = L.marker([-23.538946315677524, -46.69502860501073], {icon:icone5}).addTo(map);
marker5.bindPopup("<b>Condô Cultural – Ponto de Compostagem Comunitária</b><br>Rua Mundo Novo, 342 – Vila Anglo Brasileira, São Paulo/SP<br>Horário: Geralmente sábados ou domingos, por volta de 11h–14h (varia conforme programação, indicado no site).");

var icone6 = L.icon({iconUrl:"img/Parques.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker6 = L.marker([-23.585946348213042, -46.65843447098261], {icon:icone6}).addTo(map);
marker6.bindPopup("<b>Parque Ibirapuera</b><br>Av. Pedro Álvares Cabral, s/n – Vila Mariana, São Paulo/SP<br>Horári: Todos os dias - 5h às 23h");

var icone7 = L.icon({iconUrl:"img/Parques.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker7 = L.marker([-23.547221709052316, -46.724884354450545], {icon:icone7}).addTo(map);
marker7.bindPopup("<b>Parque Villa-Lobos</b><br>Av. Professor Fonseca Rodrigues, 2001 – Alto de Pinheiros, São Paulo/SP<br>Horário: Todos os dias - 5h30 às 19h");

var icone8 = L.icon({iconUrl:"img/Parques.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker8 = L.marker([-23.49361932297727, -46.52112596528513], {icon:icone8}).addTo(map);
marker8.bindPopup("<b>Parque Ecológico do Tietê – Núcleo Eng. Goulart</b><br>Rua Guirá Acangatara, 70 – Engenheiro Goulart, São Paulo/SP<br>Horário: Todos os dias - 6h às 17h");

var icone9 = L.icon({iconUrl:"img/ONGs.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker9 = L.marker([-23.566632334483057, -46.696942218267296], {icon:icone9}).addTo(map);
marker9.bindPopup("<b>Iniciativa Verde</b><br>Rua João Elias Saada, 46 – Pinheiros, São Paulo/SP<br>Horário: Consultar no site oficial.");

var icone10 = L.icon({iconUrl:"img/ONGs.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker10 = L.marker([-23.655041575807815, -46.60947963901664], {icon:icone10}).addTo(map);
marker10.bindPopup("<b>Agência Ambiental Pick-upau</b><br>Av. dos Ourives, 560 – Jardim São Savério, São Paulo/SP<br>Horário: Consultar no site oficial.");

var icone11 = L.icon({iconUrl:"img/FeirasMercados.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker11 = L.marker([-23.53067040418998, -46.670048097448216], {icon:icone11}).addTo(map);
marker11.bindPopup("<b>Feira Orgânica da AAO – Parque da Água Branca</b><br>Parque da Água Branca – Av. Francisco Matarazzo, 455 – Água Branca, São Paulo/SP<br>Horário: Terça, sábado e domingo - 7h às 12h");

var icone12 = L.icon({iconUrl:"img/FeirasMercados.png", iconSize:[28, 34], iconAnchor:[16,32], popupAnchor:[0,-32]});
var marker12 = L.marker([-23.582507305994902, -46.65306283923058], {icon:icone12}).addTo(map);
marker12.bindPopup("<b>Feira de Produtos Orgânicos do Modelódromo do Ibirapuera</b><br>Rua Curitiba, 292 – Vila Mariana, São Paulo/SP<br>Horário: Sábados - 7h às 13h");

var categorias = {
"Reciclagem": [marker4],
"Coleta Seletiva": [marker2, marker3],
"Pontos de entrega": [marker1, marker5],
"Parques e áreas verdes": [marker6, marker7, marker8],
"ONGs ambientais": [marker9, marker10],
"Feiras e eventos": [marker11, marker12]
};

function filtrarCategoria(nomeCategoria) {
for (var cat in categorias) {
categorias[cat].forEach(marker => map.removeLayer(marker));
}

categorias[nomeCategoria].forEach(marker => marker.addTo(map));

var grupo = L.featureGroup(categorias[nomeCategoria]);
map.fitBounds(grupo.getBounds(), { padding: [50, 50] });

categorias[nomeCategoria].forEach((marker, index) => {
setTimeout(() => {
marker.openPopup();
}, index * 300);
});
}

document.querySelectorAll(".btn-filtros button").forEach(btn => {
btn.addEventListener("click", () => {
filtrarCategoria(btn.textContent.trim());
});
});

const markers = [
marker1, marker2, marker3, marker4, marker5, marker6,
marker7, marker8, marker9, marker10, marker11, marker12
];

const itensSidebar = document.querySelectorAll(".sidebar-item");

itensSidebar.forEach((item, index) => {
item.style.cursor = "pointer";
item.addEventListener("click", () => {
const marker = markers[index];

map.setView(marker.getLatLng(), 13, {
animate: true,
duration: 0.8
});

marker.openPopup();
});
});

var IconeAqui = L.icon({
iconUrl: "img/Aqui.png",
iconSize: [28, 34],
iconAnchor: [16, 32],
popupAnchor: [0, -32],
});

L.marker([pos.coords.latitude, pos.coords.longitude], { icon: IconeAqui })
.addTo(map)
.bindPopup("Você está aqui!")
.openPopup();
}

function error(err) {
dconsole.log(err);
}

var watchID = navigator.geolocation.watchPosition(sucess, error);

const inputEndereco = document.getElementById("input-endereco");
const btnPesquisarEndereco = document.getElementById("btn-pesquisar-endereco");

btnPesquisarEndereco.addEventListener("click", buscarEndereco);

function buscarEndereco() {
const texto = inputEndereco.value.trim();

if (texto === "") {
alert("Digite um endereço!");
return;
}

fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(texto)}`)
.then(res => res.json())
.then(data => {

if (data.length === 0) {
alert("Endereço não encontrado.");
return;
}

const lat = parseFloat(data[0].lat);
const lon = parseFloat(data[0].lon);

map.setView([lat, lon], 17);

const iconeBusca = L.icon({
iconUrl: "img/BuscaIcon.png",
iconSize: [28, 30],
iconAnchor: [16, 32],
popupAnchor: [0, -32],
});

L.marker([lat, lon], { icon: iconeBusca })
.addTo(map)
.bindPopup(`Local buscado:<br><strong>${texto}</strong>`)
.openPopup();
})
.catch(() => {
alert("Erro ao buscar endereço. Tente novamente.");
});
}

inputEndereco.addEventListener("keypress", (e) => {
if (e.key === "Enter") {
buscarEndereco();
}
});