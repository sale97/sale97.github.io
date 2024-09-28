window.onscroll = function() {
	var e = document.getElementById("myBtn");
    if (!e) {
    	e = document.createElement("a");
        e.id = "myBtn";
        e.href = "#";
        document.body.appendChild(e);
	}
	e.style.display = document.documentElement.scrollTop > 300 ? "block" : "none";
    e.onclick = (ev) => {
    	ev.preventDefault();
        document.documentElement.scrollTop = 0;
    };
};


const experiences = [
  {
      title: "Operator at Payment Point",
      company: "Admiralbet",
      period: "2022, August - Present",
      duties: "Full-time position handling payments, customer inquiries, and account transactions. Ensured accurate processing of payments and maintained customer satisfaction at the payment point.",
      type: "Full-time"
  },
  {
    title: "Front-end Web Developer",
    company: "Fiverr",
    period: "2020, March - Present",
    duties: "Provide website maintenance and enhancements, using HTML, JavaScript, and CSS to bring concepts to life. Collaborate with clients to transform design mockups (Figma, XD, PSD) into fully responsive, pixel-perfect websites. Optimize websites for speed and performance, ensuring cross-browser compatibility and mobile responsiveness. Implement custom WordPress themes and perform content updates, plugin installations, and troubleshooting.",
    type: "Freelance"
  },
  {
    title: "Junior Front-end Web Developer",
    company: "NewLook Entertainment, Belgrade",
    period: "2020, May - 2020, August",
    duties: "Provide website maintenance and enhancements, using HTML, JavaScript, and CSS to bring concepts to life. Collaborate with clients to transform design mockups (Figma, XD, PSD) into fully responsive, pixel-perfect websites. Optimize websites for speed and performance, ensuring cross-browser compatibility and mobile responsiveness. Implement custom WordPress themes and perform content updates, plugin installations, and troubleshooting.",
    type: "Full-time"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('experience-container');
  experiences.forEach(exp => {
      const expElement = document.createElement('div');
      expElement.className = 'experience';
      expElement.innerHTML = `
          <h3>${exp.title} <span class="badge">${exp.type}</span></h3>
          <h4><strong>${exp.company}</strong></h4>
          <h4>${exp.period}</h4>
          <p>${exp.duties}</p>
      `;
      container.appendChild(expElement);
  });
});





