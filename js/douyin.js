console.log("Script is running on douyin");

console.log("Written by %c https://github.com/wangshu-g %c", 'color: blue; text-decoration: underline; cursor: pointer;')

console.log("Only for learning to use.")

let likeTimer;

function startLike(timeout) {
    timeout ??= 100
    likeTimer && clearInterval(likeTimer);
    const likeButtons = document.getElementById("LikeLayout").children;
    if (likeButtons && likeButtons.length > 0) {
        const likeBtn = likeButtons[0];
        likeTimer = setInterval(() => {
            likeBtn.click()
            likeBtn.click()
        }, timeout);
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let {command, data} = request;
    switch (command) {
        case 'start':
            startLike(data?.timeout);
            sendResponse({fromcontent: "开始点赞"});
            break;
        case 'stop':
            clearInterval(likeTimer);
            sendResponse({fromcontent: "暂停点赞"});
            break;
        case 'update-timeout':
            startLike(data?.timeout);
            sendResponse({fromcontent: "更新点赞间隔时间"});
            break;
    }
})
