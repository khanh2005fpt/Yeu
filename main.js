// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em thời gian qua đã dành thời gian cho anhh và anh có những điều muốn gởi gắm đến tình iu của anhh nhân ngày 1-6❤️. Cảm ơn em đã đến bên anhh những lúc anh cô đơn buồn tủi nhất. Em là ánh sáng, là động lực để anh cố gắng hơn mỗi ngày. Em làm cho anh luôn cảm thấy đặc biệt và hoàn hảo. Bên em anh cảm thấy vui và hạnh phúc lắm. Mong chúng ta sẽ có quãng thời gian hạnh phúc bên nhau thật lâu thật lâu nhiều hơn nữa em nhé. Anh chẳng biết nói gì ngoài lời cảm ơn em, anh yêu em💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})