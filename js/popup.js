const startLikeBtn = document.getElementById("start-like");
const stopLikeBtn = document.getElementById("stop-like");
const timeoutRange = document.getElementById('timeout-range');
const timeoutValueSpan = document.getElementById('timeout-value');
if (startLikeBtn && timeoutRange && timeoutValueSpan) {
    timeoutValueSpan.innerText = `${timeoutRange.value} ms`;
    timeoutRange.addEventListener('change', (e) => {
        timeoutValueSpan.innerText = `${e.target.value} ms`;
        const timeout = e.target.value ?? 100;
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                command: "update-timeout",
                data: {
                    timeout
                }
            }, (response) => {
                // window.close();
            });
        });
    })
    startLikeBtn.addEventListener('click', (e) => {
        const timeout = timeoutRange.value ?? 100;
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                command: "start",
                data: {
                    timeout
                }
            }, (response) => {
                // window.close();
            });
        });
    })
    stopLikeBtn.addEventListener('click', (e) => {
        const timeout = timeoutRange.value ?? 100;
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                command: "stop"
            }, (response) => {
                // window.close();
            });
        });
    })
}