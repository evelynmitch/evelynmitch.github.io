var fancyText = document.getElementById('fancy');
var intervalTime = 100; // milliseconds between character deletion/insertion
var initialPause = 1000; // give the person viewing the website some time to view our site
var callbackPause = 400; // how long we'll wait before we go to the next type-text

// https://www.w3schools.com/Js/js_examples.asp
function deleteContent(callback) {

    var intervalId = setInterval(function() {
        if (fancyText.innerHTML.length == 0) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = fancyText.innerHTML.substring(0, fancyText.innerHTML.length - 1);
    }, intervalTime);

}

function addContent(contentToAdd, callback) {
    var currentIndex = 0;

    var intervalId = setInterval(function() {
        if (currentIndex == contentToAdd.length) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = contentToAdd.substring(0, currentIndex);
        currentIndex++;
    }, intervalTime);
}

setTimeout(function() {
    deleteContent(function() {
        addContent("a programmer.", function() {
            deleteContent(function() {
                addContent("a designer.", function() {
                    deleteContent(function() {
                        addContent("Evie.");
                    })
                });
            });
        });
    });
}, initialPause);

