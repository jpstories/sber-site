    $(document).ready(function(){
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){ 
        // Создание карты.    
            var myMap = new ymaps.Map("map", {
                center: [48.494109, 135.061798],
                zoom: 16,
            });
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point", // тип геометрии - точка
                    coordinates: [48.494109, 135.061798] // координаты точки
                }
        });

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject);
        }
    });