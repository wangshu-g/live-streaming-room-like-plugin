console.log("Script is running on BiliBili");

console.log("Written by %c https://github.com/wangshu-g %c", 'color: blue; text-decoration: underline; cursor: pointer;')

console.log("Only for learning to use.")

let likeTimer;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let {timeout} = request;
    timeout ??= 100;
    const likeButtons = document.getElementsByClassName("like-btn");
    if (likeButtons && likeButtons.length > 0) {
        clearInterval(likeTimer);
        const likeBtn = likeButtons[0];
        likeTimer = setInterval(() => {
            likeBtn.click()
        }, timeout);
        sendResponse({fromcontent: "开始点赞"});
    }
})
