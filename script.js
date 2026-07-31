const headersContainer = document.getElementById("headers");

function addHeader(name = "", value = "") {

    const row = document.createElement("div");

    row.className = "header-row";

    row.innerHTML = `
        <input class="header-name" placeholder="Header Name" value="${name}">
        <input class="header-value" placeholder="Header Value" value="${value}">
        <button>X</button>
    `;

    row.querySelector("button").onclick = () => row.remove();

    headersContainer.appendChild(row);
}

addHeader();

document.getElementById("addHeader").onclick = () => addHeader();

document.getElementById("send").onclick = async () => {

    const url = document.getElementById("url").value.trim();

    if (!url) {
        alert("Enter API URL");
        return;
    }

    const method = document.getElementById("method").value;

    const bodyText = document.getElementById("body").value.trim();

    const headers = {};

    document.querySelectorAll(".header-row").forEach(row => {

        const name = row.querySelector(".header-name").value.trim();

        const value = row.querySelector(".header-value").value.trim();

        if (name) headers[name] = value;
    });

    const options = {
        method,
        headers
    };

    if (method !== "GET" && method !== "DELETE" && bodyText !== "") {

        options.body = bodyText;
    }

    const status = document.getElementById("status");
    const response = document.getElementById("response");
    const responseHeaders = document.getElementById("responseHeaders");
    const time = document.getElementById("time");

    status.textContent = "Loading...";
    response.textContent = "";
    responseHeaders.textContent = "";
    time.textContent = "";

    const start = performance.now();

    try {

        const res = await fetch(url, options);

        const end = performance.now();

        time.textContent = `${Math.round(end - start)} ms`;

        status.textContent = `${res.status} ${res.statusText}`;

        let headerOutput = "";

        res.headers.forEach((value, key) => {

            headerOutput += `${key}: ${value}\n`;

        });

        responseHeaders.textContent = headerOutput || "No headers";

        const contentType = res.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {

            const json = await res.json();

            response.textContent = JSON.stringify(json, null, 2);

        } else {

            response.textContent = await res.text();
        }

    } catch (err) {

        status.textContent = "Request Failed";

        response.textContent =
`Error:
${err.message}

If you see:

Access to fetch at ...
has been blocked by CORS policy

then the API server is not allowing browser requests from your origin.
`;

    }

};