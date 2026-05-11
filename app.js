function uploadFile() {

    const file =
        document.getElementById("fileInput").files[0];

    const message =
        document.getElementById("message");

    if (!file) {
        message.innerHTML =
            "Please select a file";
        return;
    }

    message.innerHTML =
        "Selected File: " + file.name;
}