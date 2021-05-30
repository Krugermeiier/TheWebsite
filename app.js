'use strict'

const youtube = document.querySelector('.yt')
const twitter = document.querySelector('.tw')

youtube.addEventListener('click', function() {
    location.href = "https://www.youtube.com"
})
twitter.addEventListener('click', function() {
    location.href = "https://www.twitter.com/krugermeiier"
})