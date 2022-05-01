/*проверка поддержки webp, добавление клсса webp или no-webp для HTML */
export function isWebp() {
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.onerror == 2);

        };
        webP.src = '';
        
    };
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}