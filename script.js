const result = document.getElementById("result");

    function getConvertedText(obj) {
    let convertedText = '';
    for (let key in obj) {
    convertedText += `${key}: ${obj[key]}\n`;
        }
    return convertedText;
    }

    document.getElementById('getSettings').addEventListener('click', () => {
        const apiTokenInstance = document.getElementById("apiTokenInstance").value;
        const idInstance = document.getElementById("idInstance").value;
        
        const restAPI = whatsAppClient.restAPI({
            idInstance: idInstance,
            apiTokenInstance: apiTokenInstance
        });

        restAPI.settings.getSettings().then((data) => {
            result.textContent = getConvertedText(data);
        }).catch((error) => {
            console.error(`${error}`)
        })
    })

    document.getElementById('getStateInstance').addEventListener('click', () => {
        const apiTokenInstance = document.getElementById("apiTokenInstance").value;
        const idInstance = document.getElementById("idInstance").value

        const restAPI = whatsAppClient.restAPI({
            idInstance: idInstance,
            apiTokenInstance: apiTokenInstance
        });

        restAPI.instance.getStateInstance().then((data) => {
            result.textContent = getConvertedText(data);
        }).catch((error) => {
            console.log(`Problems getting instance state: ${error}`);
        })
    })

    document.getElementById("sendMessageButton").addEventListener("click", function () {
        const apiTokenInstance = document.getElementById("apiTokenInstance").value;
        const idInstance = document.getElementById("idInstance").value;
        const chatId = `${document.getElementById("phoneReceivingMessages").value}@c.us`;
        const message = document.getElementById("message").value;
        const result = document.querySelector("#result");

        const restAPI = whatsAppClient.restAPI({
            idInstance: idInstance,
            apiTokenInstance: apiTokenInstance
        });

        restAPI.message.sendMessage(chatId, null, message).then((data) => {
                result.textContent = getConvertedText(data);
            }).catch((error) => {
                console.error("Error:", error);
            });
    });

    document.getElementById("sendFileByUrlButton").addEventListener("click", () => {
        const apiTokenInstance = document.getElementById("apiTokenInstance").value;
        const idInstance = document.getElementById("idInstance").value
        const chatId = `${document.getElementById("phoneReceivingFile").value}@c.us`;
        const url = document.getElementById('fileUrl').value;
        const fileName = document.getElementById('fileName').value;
        const result = document.querySelector("#result");

        const restAPI = whatsAppClient.restAPI({
            idInstance: idInstance,
            apiTokenInstance: apiTokenInstance
        });

        restAPI.file.sendFileByUrl(chatId, null, url, fileName).then((data) => {
            result.textContent = getConvertedText(data);
        }).catch((error) => {
            console.error("Error:", error);
        })
    })