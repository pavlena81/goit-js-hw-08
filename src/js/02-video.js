// Ознакомься с документацией библиотеки Vimeo плеера.

// Добавь библиотеку как зависимость проекта через npm.

// Инициализируй плеер в файле скрипта как это описано в 
// секции pre - existing player, но учти что у тебя плеер 
// добавлен как npm пакет, а не через CDN.

// Разбери документацию метода on() и начни отслеживать событие timeupdate -
//     обновление времени воспроизведения.

// Сохраняй время воспроизведения в локальное хранилище. 

// Пусть ключом для хранилища будет строка "videoplayer-current-time".

// При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.

// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения
//  обновлялось в хранилище не чаще чем раз в секунду.
// setItem(key, value) - делает новую, или обновляет уже существующую запись в хранилище.

    import throttle from 'lodash.throttle';

    import Vimeo from '@vimeo/player';
    const iframe = document.querySelector('iframe');
    
    const player = new Vimeo(iframe);
 
     player.on('timeupdate', function (event) {
        localStorage.setItem("videoplayer-current-time", event.seconds);
         
        console.log('played the video!');
    });
    
    //  player.on('play', function() {
    //     console.log('played the video!');
    // });
    let onCurrentTime = 0;
    const currentTime = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(currentTime)
    .then(function (onCurrentTime) {
      // return player;
          return onCurrentTime === null ? undefined : onCurrentTime === JSON.parse(currentTime);

    });



      document.addEventListener(
      player,
      throttle(() => {
        console.log("Scroll handler call every 1000ms");
      }, 1000)
    );
//     player.addEventListener('timeupdate', (event) => {
   
//   console.log('The currentTime attribute has been updated. Again.');
//     });



    

     