# EZTABLE WORK - makeing restaurant UI

此UI建構於ReactJS框架下

實作網站[demo](https://www.google.com.tw/)

## 在本地端RUN

```sh
$ git clone https://github.com/zooroy/eztable-work.git
$ cd eztable-work
$ npm i
$ npm start
```

- 在瀏覽器中打開[http://localhost:6660](http://localhost:6660)

## 需求

1. 每一張卡片必須具備以下資訊,整個列表需要用 map 實作:
- 餐廳圖片
- 餐廳名稱 e.g. 石二鍋
- 餐廳敘述 e.g. 經典料理都在這裡 (3-30 字元)
- 追蹤人數 e.g. x 人在追蹤
- 追蹤按鈕

---

2. 追蹤點擊後
- 按鈕的背景顏色會改變,字樣改成「追蹤中」
- 追蹤人數 +1
- 再次點擊追蹤中,按鈕會變回追蹤的樣式,追蹤人數 -1

---

3. 需要實作 RWD
- 畫面為 1080px 以上時為四欄
- 畫面為 768px-1080px 為三欄
- 畫面為 375px-768px 為兩欄
- 畫面為 375px 以下為一欄

