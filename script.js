"use strict";
// // //   First

function getNodesTexts(selector) {
    const elementsList = document.querySelectorAll(selector)
    const elementsTextsList = []
    for (const element of elementsList) {
        elementsTextsList.push(element.innerText)
    }
    return elementsTextsList
}

function randomSortElementsTexts(targetArr) {
    return [...targetArr].sort(() => Math.random() - 0.5)
}

function constructElementsMarkup(tag, className, textsList) {
    return textsList.reduce((markupStr, element) => {
        const liMarkup = `<${tag} class="${className}">${element}</${tag}>`
        markupStr += liMarkup
        return markupStr
    }, "")
}

function replaceMarkup(selector, markupString) {
    const element = document.querySelector(selector)
    element.innerHTML = markupString
}

function firstTaskManager() {
    const SELECTOR_STR = "randomListItem"
    setInterval(() => {
        const liElementsTextsList = getNodesTexts(`.${SELECTOR_STR}`)
        const sortedTextsList = randomSortElementsTexts(liElementsTextsList)
        const liMarkupString = constructElementsMarkup(
            "li",
            SELECTOR_STR,
            sortedTextsList
        )

        replaceMarkup(".randomList", liMarkupString)
    }, 5000)
}

function main() {
    // first task
    firstTaskManager()
    // four task
    fourthTaskManager()

}

main()

// // //   Second


function getUserBrowserInfo() {
    const browserInfoObj = {
        userScreenWidth: screen.Width,
        userScreenHeight: screen.Height,
        browserUserAgent: navigator.userAgent,
        userPlatform: navigator.platform
    }
    return browserInfoObj
}

function acceptInfoPage(browserInfos) {
    const elementInfo = document.querySelector('#browserInfo').children;
    for (let i = 0; i < elementInfo.length;) {
        for (let prop in browserInfos) {
            const tempStr = elementInfo[i].innerText.replace("unknown", `${browserInfos[prop]}`);
            elementInfo[i].innerText = tempStr;
            i++
        }
    }
    return elementInfo;
}

function secondTaskManager() {
    acceptInfoPage(getUserBrowserInfo());
    setTimeout(() => {
        threeTaskManager("h3")
    }, 5000)
}
setTimeout(() => {
    secondTaskManager()
}, 4600)

// // //  Three

function threeTaskManager(tagName) {
    const header = document.querySelector(tagName);
    return header.outerHTML = '<h1>NEW LIST HEADER</h1>';
}


// // //four

function fourthTaskManager() {
    const nav = document.querySelector('nav');
    const currentDate = new Date();
    const dateArr = currentDate.toString().split(" ");
    dateArr.length = 4;
    nav.innerText = dateArr.join(" ");
    nav.setAttribute("style", "color:grey");
}