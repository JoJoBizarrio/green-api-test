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