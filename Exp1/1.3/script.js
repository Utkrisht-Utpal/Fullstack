const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    toggleBtn.textContent = "🌙 Dark Mode"
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    
    const isLight = document.body.classList.contains("light");

    toggleBtn.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";

    localStorage.setItem("theme", isLight ? "light" : "dark");
})