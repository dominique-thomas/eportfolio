/**
 * Project: ePortfolio
 * Description: Contains logic for dynamically displaying project data on the projects.html page.
 * Author: Dominique Thomas (github.com/dominique-thomas)
 * License: Shared publicly for demonstration purposes only. Reuse or redistribution not permitted without permission.
 */
let activeId = "";
let nextId = "";
let prevId = "";

$(function () {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  $("#currentYear").html(year);
  
  AOS.init();
  parseId();
  getNextAndPrevIds();
});

//Get the IDs for the next and previous projects
const getNextAndPrevIds = function() {
  let activeIdIndex = "";
  for (var i = 0; i < data.length; i++) {
    const id = data[i].id;
    if (id === activeId) {
      activeIdIndex = i;
      break;
    }
  }

  // Get previous id (skip disabled slides)
  let prevIdIndex = activeIdIndex - 1;
  while (prevIdIndex >= 0 && !data[prevIdIndex].enabled) {
    prevIdIndex--;
  }
  if (prevIdIndex < 0) {
    // If no enabled previous, wrap around to the last enabled one
    prevIdIndex = data.length - 1;
    while (!data[prevIdIndex].enabled) {
      prevIdIndex--;
    }
  }
  const prevId = data[prevIdIndex].id;

  // Get next id (skip disabled slides)
  let nextIdIndex = activeIdIndex + 1;
  while (nextIdIndex < data.length && !data[nextIdIndex].enabled) {
    nextIdIndex++;
  }
  if (nextIdIndex >= data.length) {
    // If no enabled next, wrap around to the first enabled one
    nextIdIndex = 0;
    while (!data[nextIdIndex].enabled) {
      nextIdIndex++;
    }
  }
  const nextId = data[nextIdIndex].id;

  // Update the links  
  $("#prevProject").attr("href", `projects.html?id=${prevId}`);
  $("#nextProject").attr("href", `projects.html?id=${nextId}`);
};

//Parse the ID from the URL
const parseId = function () {
  const params = new URLSearchParams(window.location.search);

  if (params.has("id")) {
    const idValue = params.get("id");
    activeId = idValue;
    generatePage();
  }
}

//Get the object data based on the ID
const getObjData = function () {
  for (var i = 0; i < data.length; i++) {
    const id = data[i].id;
    if (id === activeId) {
      return data[i];
    }
  }
}

//Generate the page content based on the slide ID
const generatePage = function () {

  const obj = getObjData();

  let htmlStr_title = obj.title;
  let htmlStr_subTitle = obj.year;
  let htmlStr_tags = "";
  let htmlStr_role = obj.role;
  let htmlStr_scope = obj.scope;
  let hasSpecialNote = obj.specialNote;
  let htmlStr_reflection = obj.reflection;
  let htmlStr_demo = "";
  let htmlStr_solution = obj.solution;
  let htmlStr_artifacts = "";

  let demo = obj.demo;

  if(demo !== undefined && demo !== null && demo.length > 0){
     htmlStr_demo += "A live demo is available for this project (links will open in a new window).<br><br>";
     if(obj.additional_demo !== undefined){
      htmlStr_demo += obj.additional_demo + "<br><br>";
     }
     

    if(demo.length === 1){
      htmlStr_demo += `<a href="${demo[0].link}" class="btn btn-primary btn-lg shadow-sm" role="button" title='View Live Demo' target='_blank'>View Live Demo</a>`;
    }else{

      

      for(var i=0; i < demo.length; i++){
        htmlStr_demo +=  `<a href="${demo[i].link}" class="btn btn-primary btn-lg shadow-sm" role="button" title='View Live Demo (${demo[i].title})' target='_blank'>View Live Demo (${demo[i].title})</a> `
      }
     
    }
   
  }else{
    htmlStr_demo += "N/A";
  }

  const imageFilenames = Array.from(
    { length: obj.imageRange }, 
    (_, index) => `images/${activeId}_${index.toString().padStart(3, '0')}.png`
  );
  
  obj.keywords.sort();
  
  obj.keywords.forEach(element => {
    htmlStr_tags += `<span class="badge bg-secondary tag">${element}</span> `;
  });
  
  for (var i = 0; i < imageFilenames.length; i++) {
    const imageName = imageFilenames[i];
    const fallbackImageName = imageName.replace('.png', '.jpg');
  
    htmlStr_artifacts += `<div class="col-lg-6 col-md-6 portfolio-item">      
                            <a href="${imageName}" data-toggle="lightbox" data-gallery="example-gallery" class="col-lg-6 togglelb" title="${htmlStr_title} Artifact ${i+1}"
                               onerror="this.href='${fallbackImageName}';">                              
                              <div class="asset-wrap">       
                                <div class="watermark"></div>                                                             
                                <img src="${imageName}" class="img-fluid" alt="Gallery Image ${i+1}" 
                                     onerror="this.onerror=null; this.src='${fallbackImageName}'; this.closest('a').href='${fallbackImageName}';">
                              </div> 
                            </a>
                          </div>`;
  }
  
  $("#projectTitle").html(htmlStr_title);
  $("#projectSubTitle").html(htmlStr_subTitle);
  $("#projectTags").html(htmlStr_tags);
  $("#projectRole").html(htmlStr_role);
  $("#projectScope").html(htmlStr_scope);
  $("#projectSolution").html(htmlStr_solution);
  $("#projectDemo").html(htmlStr_demo);
  $("#projectArtifacts").html(htmlStr_artifacts);
  
  if (hasSpecialNote) {
    $("#specialNote").removeClass("hidden");
  }

  const options = {
    keyboard: true,
    size: 'fullscreen'
  };

  document.querySelectorAll('.togglelb').forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    const lightbox = new Lightbox(el, options);
    lightbox.show();
  }));
}
