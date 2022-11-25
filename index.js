const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const submitResponse = () => {
  event.preventDefault();
  document.getElementById(
    "submit-response"
  ).innerHTML = `Thank you! Your submission has been received!`;
};

// Importing posts from Json on homepage

const getInfo = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((result) => {
      let infoExterna = "";
      let newArray = result.slice(0, 3);
      newArray.forEach((element, index) => {
        infoExterna += `
            <div class="project-card">
                <div class="project-image">
                  <img
                    class="project-card-image"
                    src="./project-assets/projects-section/${index + 1}.jpg"
                    alt="simplify"
                  />
                </div>
                <div class="project-content">
                  <div class="project-text">
                    <div class="project-title">${element.title}</div>
                    <div class="project-title project-description">
                      ${element.body}
                    </div>
                  </div>
                </div>
                <a
                  href="simplify.html"
                  target="_blank"
                  class="project-link"
                  >Learn More</a
                >
              </div>
            `;
      });
      document.querySelector(".projects-list-row").innerHTML += infoExterna;
    });
};

getInfo();

// Importing title and text body on projects pages

const getInfoProject = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((result) => {
      let project = result[0];
      console.log(project);

      document.querySelector(".project-page-title").innerText += project.title;
      document.querySelector(".project-text").innerText += project.body;
    });
};

getInfoProject();

// Contact post

const addInfo = (preventForm) => {
  preventForm.preventDefault();

  let fullName = document.querySelector("#name").value;
  //   let email = document.querySelector("#mail").value;
  //   let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#message").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: fullName,
      userId: 1,
      body: message,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "text/plain, application/json",
    },
  })
    .then((response) => response.json())
    .then((formData) => console.log(formData))
    .then(() => alert("Todo está correcto"))
    .then(() => inputs.reset())
    .catch((error) => console.log(error));
};

let inputs = document.querySelector("#email-form");
inputs.addEventListener("submit", addInfo);
