<!DOCTYPE html>
<html>
<head>
  <title>Daftar Anime by Hady Zen</title>
  <style>
    body {
      background-image: url("https://raw.githubusercontent.com/HadyZen/hady-zen-api/refs/heads/main/anime/wallpaper.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin: 0;
      height: 100vh;
    }

    .keren {
      font-size: 34px;
      font-weight: bold;
      color: white;
      text-align: center;
      animation: move 4s infinite;
      text-shadow: 0 0 10px white, 0 0 30px white, 0 0 20px white;
    }

    @keyframes move {
      0%, 100% {
        transform: translateY(0);
      }
50% {
        transform: translateY(-10px);
      }
    }

    .tombol {
      background-color: transparent;
      font-size: 20px;
      font-weight: bold;
      color: white;
      padding: 1px 1px;
      border: none;
      border-radius: 9px;
      cursor: pointer;
    }
    .app-header {
      background-color: #0899;
      color: #fff;
      padding: 10px;
      text-align: center;
      border-radius: 200px;
      box-shadow: 0 9px 60px rgba(0, 0, 0, 0.1);
      }

      .anime-list {
      flex: 1;
      overflow-y: scroll;
      padding: 20px;
      color: white;
      display: flex;
      flex-direction: column;
    }

    .anime-item {
      display: flex;
      align-items: center;
      padding: 14px;
      border-bottom: 1px solid #0899;
    }

    .anime-item img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 14px;
    }

    .anime-item h2 {
      margin: 0;
    }

    .anime-item p {
      margin: 6px 0;
    }
    </style>
  </head>
  <body>
    <header class="app-header">
      <h1 class="keren">Daftar Anime</h1>
    </header>

    <section class="anime-list">
    </div>
    <div class="anime-item">
      <img src="https://raw.githubusercontent.com/HadyZen/hady-zen-api/refs/heads/main/anime/futaro.jpeg" alt="hady">

      <a href="https://nimegami.id/?s=Gotoubun+no+hanayome&post_type=post" target="_blank"> <button class="tombol">Gotoubun no Hanayome</button></a>
    </div>
  </div>
  <div class="anime-item">
    <img src="https://raw.githubusercontent.com/HadyZen/hady-zen-api/refs/heads/main/anime/kazuya.jpg" alt="hady">
    <a href="https://youtu.be/P0WxL8CJPMk?si=axhzMIQR3yYN45Pj" target="_blank"> <button class="tombol">Kanojo, Okarishimasu</button></a>
  </div>
</div>
<div class="anime-item">
  <img src="https://raw.githubusercontent.com/HadyZen/hady-zen-api/refs/heads/main/anime/anya.jpeg" alt="hady">
  <a href="https://nimegami.id/?s=Spy+x+family&post_type=post" target="_blank"> <button class="tombol">Spy x family</button></a>
</div>
<div class="anime-item">
  <img src="https://raw.githubusercontent.com/HadyZen/hady-zen-api/refs/heads/main/anime/ryu.jpg" alt="hady">
  <a href="https://youtu.be/gTpZXKzJzNk?si=rQQU2FkCYWmtyxx3" target="_blank"> <button class="tombol">Gakuen Babysitters</button></a>
</div>
</div>
<div class="anime-item">
<img src="https://raw.githubusercontent.com/HadyZen/hady-zen-api/refs/heads/main/anime/sayu.jpg" alt="hady">
<a href="https://youtu.be/vK0Y4t7JXtk?si=QbLzTkiA0kVKh9EN" target="_blank"> <button class="tombol">Hige wo Soru Soshite Joshikousei wo Hirou</button></a>
</div>
</section>
</body>
</html>
