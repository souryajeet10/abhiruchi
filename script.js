const launchDate = new Date("July 15, 2026 12:00:00").getTime();

const pad = n => String(Math.floor(n)).padStart(2, "0");

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "<h2>🎉 We Are Live!</h2>";
        return;
    }

    document.getElementById("days").textContent    = pad(distance / (1000*60*60*24));
    document.getElementById("hours").textContent   = pad((distance % (1000*60*60*24)) / (1000*60*60));
    document.getElementById("minutes").textContent = pad((distance % (1000*60*60)) / (1000*60));
    if (window.innerWidth > 600) {
        document.getElementById("seconds").textContent = pad((distance % (1000*60)) / 1000);
    }
}, 1000);

document.getElementById("openBtn").addEventListener("click", () => {
    document.getElementById("popup").classList.add("active");
});

document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("popup").classList.remove("active");
});

// Close popup on backdrop click
document.getElementById("popup").addEventListener("click", (e) => {
    if (e.target === e.currentTarget)
        e.currentTarget.classList.remove("active");
});
