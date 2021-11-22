function setup() { 
  noCanvas();
  var map = L.map('mapid').setView([42, 25.5],7);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


  

  L.marker([43.0822, 25.6317
]).addTo(map)
     .bindPopup('Велико Търново<br> <a href="https://youtu.be/sWKaY36PXaA">Видео</a>')
     .openPopup();
  
  L.marker([42.6977, 23.3219]).addTo(map)
     .bindPopup('София<br> <a href="https://www.youtube.com/watch?v=aLJAmYC89JU">Видео</a>')
     .openPopup();

  L.marker([42.15, 24.75]).addTo(map)
     .bindPopup('Пловдив<br> <a href="https://youtu.be/l9yj9_PKtvw">Видео</a> <a href="https://youtu.be/pR-2fa1ACsw"> Видео2</a>'
               )
     .openPopup();
  
  L.marker([42.0119, 23.0897
]).addTo(map)
     .bindPopup('Благоевград<br> <a href="https://youtu.be/U4C7bm_gnhE">Видео</a>')
     .openPopup();
  
  L.marker([42.8669, 25.4920
]).addTo(map)
     .bindPopup('Трявна<br> <a href="https://youtu.be/qxAnYHmZL2c">Видео</a>')
     .openPopup();
  
  L.marker([42.2811, 22.6889
]).addTo(map)
     .bindPopup('Кюстендил<br> <a href="https://youtu.be/gMrFXseaCxw">Видео</a>')
     .openPopup();

  L.marker([42.50,27.4667
]).addTo(map)
    .bindPopup('Бургас<br> <a href="https://youtu.be/IsmtonSBo-8">Видео</a>')
    .openPopup();
} 

function draw() { 

}