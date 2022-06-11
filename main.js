const audiolibrary = [
    {
        title: 'Вступление',
        name: '01.mp3'
    },
    {
        title: 'Сегодня Ночью Кто-то',
        name: '02.mp3'
    },
    {
        title: 'Пепел',
        name: '03.mp3'
    },
    {
        title: 'Пустые Места',
        name: '04.mp3'
    },
    {
        title: 'С Утра Шёл Снег',
        name: '05.mp3'
    },
    {
        title: 'Кусок Жизни',
        name: '06.mp3'
    },
    {
        title: 'Ты Успокой Меня',
        name: '07.mp3'
    },
    {
        title: 'Вана Хойа',
        name: '08.mp3'
    },
    {
        title: 'Капитан Африка',
        name: '09.mp3'
    },
    {
        title: 'Береги Свой Хой',
        name: '10.mp3'
    }
]

const audioPlayer = document.getElementById('audio');
const playersList = document.getElementById('players-list');

search();

function search(searchTerm = '') {

    playersList.innerHTML = '';
    audioPlayer.pause()

    const origin = document.getElementById('player-origin');
    for (let i = 0; i < audiolibrary.length; i++) {
        if (searchTerm.length && !audiolibrary[i].title.toLowerCase().includes(searchTerm.toLowerCase())) {
            continue
        }
        const player = origin.cloneNode(true);
        player.classList.remove('hidden');
        player.querySelector('.player__title').innerText=`${audiolibrary[i].title}`
        player.setAttribute('id', `player-${i}`);
        playersList.appendChild(player)
    }
}

function play(button) {
    const music = getMusic(button);

    audioPlayer.src = buildPath(music.name);
    audioPlayer.load()
    audioPlayer.play()
}

function stop() {
    audioPlayer.pause()
}

function getMusic(button) {
    const musicId = button.closest('.player').getAttribute('id').split('-')[1];
    return  audiolibrary[musicId];
}

function buildPath(name) {
    return `./audio/${name}`
}