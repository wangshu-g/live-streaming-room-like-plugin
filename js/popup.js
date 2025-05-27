const startLikeBtn = document.getElementById("start-like");
const timeoutRange = document.getElementById('timeout-range');
const timeoutValueSpan = document.getElementById('timeout-value');
if (startLikeBtn && timeoutRange && timeoutValueSpan) {
    timeoutValueSpan.innerText = `${timeoutRange.value} ms`;
    timeoutRange.addEventListener('change', (e) => {
        timeoutValueSpan.innerText = `${e.target.value} ms`;
    })
    startLikeBtn.addEventListener('click', (e) => {
        const timeout = timeoutRange.value ?? 100;
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {timeout}, (response) => {
                window.close();
            });
        });
    })
}