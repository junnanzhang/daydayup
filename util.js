export const download = (param, apiUrl)=>{
    let option = {
            url: baseUrl + apiUrl, //请求的url
            data: param,
            method: 'post'
        },
        $iframe = document.createElement('iframe'),
        $form = document.createElement('form'),
        inHtml = '';
    $iframe.id = 'down-file-iframe';
    $form.method = option.method;
    $form.action = option.url;
    $form.enctype = 'application/x-www-form-urlencoded';
    $form.name = 'formNamer';
    $form.target = 'down-file-iframe';
    for (let key in option.data) {
        inHtml += '<input type="hidden" name="'
                 + key
                 + '" value="'
                 + option.data[key]
                 + '" />';
    }
    $form.innerHTML = inHtml
    $iframe.appendChild($form);
    document.body.appendChild($iframe);
    document.formNamer.submit();
    document.body.removeChild($iframe)
}

// 表单形式 download

    function formDownload(url, params, flag, isFullPath) {
        let _params = params || {};
        _params['requestFrom'] = 0;
        let reqArr = [];
        Object.keys(_params).forEach(key => {
            reqArr = reqArr.concat(stringify(key, _params[key]))
        });
        let reqBody = reqArr.join('&');
        let options = {
            url: isFullPath ? url : getPreUrl(url),
            method: 'POST',
            body: reqBody,
            credentials: true,
            crossOrigin: false,
            responseType: 'blob',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        };
        return Vue.http(options).then((response) => {
            let xFilename = response.headers.get('x-filename');
            if (xFilename) {
                let contentType = response.headers.get('content-type')
                let blob;
                if (contentType.indexOf('text') > -1) {
                    blob = new Blob(['\ufeff', response.data], {type: response.headers.get('content-type')});
                } else {
                    blob = new Blob([response.data], {type: response.headers.get('content-type')});
                }
                let link = document.createElement('a');
                link.style.display = 'none'
                link.href = window.URL.createObjectURL(blob);
                link.download = decodeURIComponent(xFilename);
                document.body.appendChild(link)
                link.click();
            }
            return Promise.resolve(response);
        }, () => {
            return Promise.reject('请求失败');
        });
    }