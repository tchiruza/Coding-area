const left = document.querySelector(".lefting"),
  righ = document.querySelector(".righting"),
  bar = document.querySelector(".bar"),
  editors = document.querySelector(".editor");
(run = document.querySelector(".btn-run")),
  (iframe = document.querySelector(".ifram")),
  (nightmode = document.querySelector(".Light-system")),
  (dayMode = document.querySelector(".Lighter-system"));
// new coding problem and one new area to resolve



const drag = (e) => {
  e.preventDefault();
  document.selection
    ? document.selection.empty()
    : window.getSelection().removeAllRanges();
  left.style.width = e.pageX - bar.offsetWidth / 3 - "px";
  editors.resize();
};
bar.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", drag);
});

bar.addEventListener("mouseup", () => {
  document.addEventListener("mousemove", drag);
});
// soon as possible

// but now i've to coding with  Running step

run.addEventListener("click", () => {
  const html = editors.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

// set and change color area zone using JavaScript color picker
// dark
nightmode.addEventListener("click", () => {
  editors.style.backgroundColor = "#363836";
  editors.style.color = "#eee";
});

// set  day mode just  wondering with JS
dayMode.addEventListener("click",()=>{
    editors.style.backgroundColor="";
    editors.style.color="";
})


document.getElementById("live").onclick=function(){
    if(this.checked){
        editors.addEventListener("keyup", ()=>{
            const html= editors.textContent;
            iframe.src="data:text/html;charset=utf-8,"+ encodeURI(html);
        })
    }
}