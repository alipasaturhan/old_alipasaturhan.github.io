window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
Promise.all([
    new Promise((resolve) => {
        var script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-HG8JQ59PYY";
        script.async = true;
        document.body.appendChild(script);
        resolve();
    }),
    new Promise((resolve) => {
        gtag('js', new Date());

        gtag('config', 'G-HG8JQ59PYY');
        resolve();
    })
]);
