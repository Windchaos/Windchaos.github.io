const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#66CCFF',
    preload: 'auto',
    volume: 0.1,
    listFolded: false,
    listMaxHeight: 60,
    audio: [
        {
            name: '寻遍星空',
            artist: '洛天依',
            url: 'https://music.163.com/song/media/outer/url?id=29307542.mp3',
            cover: '/assets/03.jpg',
        },
    ]
});