function hi(id) {
    console.log("hi with ", id);
    if (id == 4) {
        window.top.location = "/images";
    }
    if (id == 7) {
        window.top.location = "/images/represent";
        localStorage.setItem("appName", '0')
    }

    if (id == 8) {
        localStorage.setItem("appName", 'asciiart');
        window.top.location = "/images/represent/asciiart";
    }

}
