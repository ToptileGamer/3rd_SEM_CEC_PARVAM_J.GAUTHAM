const likeBUtton = document.querySelector('.like-btn');
const unlikeButton = document.querySelector('.unlike-btn');

const likeCount = document.querySelector('.like-count');
let likes = 0;
likeBUtton.addEventListener('click', () => {
    console.log('like button clicked');
    likes++;
    likeCount.innerHTML = `${likes} like`;
});

unlikeButton.addEventListener('click', () => {
    console.log('unlike button clicked');
    if(likes > 0)
        likes--;
    likeCount.innerHTML = `${likes} like`;
    
});