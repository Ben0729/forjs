let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
//mapArray用來決定地圖每一格的元素
//ctx - html5 canvas用的
//currentImgMainX Y ->決定主角座標
//imgMoutain Man Enemy ->障礙物(山) 主角 敵人

const gridLength = 200;//const是用來宣告常數

$(function () {
    mapArray = [
        [0, 1, 1],
        [0, 0, 0],
        [3, 1, 2],
    ];
    //0=可以走 1=障礙物 2=終點 3=敵人
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = {
        "x": 0,
        "y": 0
    };
    imgMain.onload = function () {
        //從imgMain的圖的0,0位址剪取寬80 高130的圖片貼至地圖中並縮放成指定高度
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
        //ctx.drawImage(imgMain,0,0);
        //ctx.drawImage(imgMain,0,0,200,200);
    }
    imgMountain = new Image();
    imgMountain.src = "images/material.png"
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png"

    imgMountain.onload = function () {
        imgEnemy.onload = function () {
            for (var x in mapArray) {
                for (var y in mapArray) {
                    if (mapArray[x][y]==1) {
                        ctx.drawImage(imgMountain, 32, 64, 32, 32, y*gridLength, x*gridLength, gridLength, gridLength);
                    }else if (mapArray[x][y]==3) {
                        ctx.drawImage(imgEnemy, 7, 40, 104, 135, y*gridLength, x*gridLength, gridLength, gridLength);
                    }
                }
            }
        }
    }
});

//處理使用者按下鍵盤按鍵後要做的事
$(document).on("keydown", function (event) {
    let targetImg, targetBlock, cutImagePositionX;
    targetImg={
        "x":-1,
        "y":-1
    };
    targetBlock={
        "x":-1,
        "y":-1
    };
    event.preventDefault();

    switch(event.code){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y -gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y +gridLength;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }

    if(targetImg.x<=400 &&targetImg.x>=0 &&targetImg.y<=400 & targetImg.y>=0){
        targetBlock.x = targetImg.y/gridLength;
        targetBlock.y = targetImg.x/gridLength;
    }else{
        targetBlock.x= -1;
        targetBlock.y= -1;
    }
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength,gridLength);

    if(targetBlock.x!=-1 && targetBlock.y!=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0:
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1:
                $("#talkBox").text("有山");
                break;
            case 2:
                $("#talkBox").text("終點");
                break;
            case 3:
                $("#talkBox").text("哈囉你好");
                break;
        }

    }else{
        $("#talkBox").text("邊界");
    }

    ctx.drawImage(imgMain, cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
});