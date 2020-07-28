/*
  /   -> root drive
  ./  -> current folder
  ../ -> parent folder
*/


let backdrop = document.getElementById("backdrop");
let userMainInfos = document.getElementById("ModalTest");
let arr = [];
const renderModalBox = () => {

    let showModalBox = arr.reduce((acc, curentValue) => {
        return (
            acc +
            `
            <span class="close" id="close-modal-box-btn">&times;</span>

            <div class="flex flex-wrap">
              <div class="wrapper md:flex">
              <div class="w-full md:w-1/2 userDetails">
                <img src="${curentValue.avatar}" alt="user picture" class="w-1/2 profileImg md:w-1/3"/>
                <p class="pt-4 px-5"> ${curentValue.description}</p>
              </div>
                <div class="w-full md:w-1/2">
                  <div class="user-name text-center font-semibold text-3xl">
                    ${curentValue.name}
                  </div>
                  <div class="flex justify-evenly w-full m-1">
                    <button class="btn-modal btn-blue m-1 focus:bg-blue-900" id="hardSkilsBtn">
                      Hard Skills
                    </button>
                    <button class="btn-modal btn-blue m-1 focus:bg-blue-900" id="softSkilsBtn">
                      Soft Skills
                    </button>
                  </div>
                  <div class="relative p-3" id="softSkils">
                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-red-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeterSoft.skillM1}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      >
                      ${curentValue.skils.softSkils.skil1}
                                              </div>
                    </div>
                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-orange-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeterSoft.skillM2}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                      >
                      ${curentValue.skils.softSkils.skil2}

                      </div>
                    </div>
                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-yellow-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeterSoft.skillM3}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                      >
                      ${curentValue.skils.softSkils.skil3}
                      </div>
                    </div>


                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-green-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeterSoft.skillM4}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                      >
                      ${curentValue.skils.softSkils.skil4}
                      </div>
                    </div>



                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-blue-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeterSoft.skillM5}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      >
                      ${curentValue.skils.softSkils.skil5}
                      </div>
                    </div>




                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-indigo-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeterSoft.skillM6}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                      >
                      ${curentValue.skils.softSkils.skil6}
                      </div>
                    </div>




                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-pink-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeterSoft.skillM7}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                      >
                      ${curentValue.skils.softSkils.skil7}
                      </div>
                    </div>



                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-purple-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeterSoft.skillM8}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                      >
                      ${curentValue.skils.softSkils.skil8}
                      </div>
                    </div>




                  </div>





                  <!-- hard skils -->
                  <div class="relative p-3 hidden" id="hardSkils">
                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-red-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeter.skillM1}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      >
                      ${curentValue.skils.hardSkils.skil1}
                      </div>
                    </div>
                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-orange-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeter.skillM2}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                      >
                      ${curentValue.skils.hardSkils.skil2}
                      </div>
                    </div>
                    <div
                      class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-yellow-200"
                    >
                      <div
                        style="width: ${curentValue.skillMeter.skillM3}0%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                      >
                        ${curentValue.skils.hardSkils.skil3}
                      </div>
                    </div>




                    <div
                    class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-green-200"
                  >
                    <div
                      style="width: ${curentValue.skillMeter.skillM4}0%;"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                    >
                      ${curentValue.skils.hardSkils.skil4}
                    </div>
                  </div>


                  <div
                  class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-blue-200"
                >
                  <div
                    style="width: ${curentValue.skillMeter.skillM5}0%;"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  >
                    ${curentValue.skils.hardSkils.skil5}
                  </div>
                </div>


                <div
                class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-indigo-200"
              >
                <div
                  style="width: ${curentValue.skillMeter.skillM6}0%;"
                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                >
                  ${curentValue.skils.hardSkils.skil6}
                </div>
              </div>

              <div
              class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-pink-200"
            >
              <div
                style="width: ${curentValue.skillMeter.skillM7}0%;"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
              >
                ${curentValue.skils.hardSkils.skil7}
              </div>
            </div>

            <div
            class="overflow-hidden h-5 mb-4 text-xs flex rounded bg-purple-200"
          >
            <div
              style="width: ${curentValue.skillMeter.skillM8}0%;"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
            >
              ${curentValue.skils.hardSkils.skil8}
            </div>
          </div>



                  </div>
                </div>
              </div>
            </div>
            <br>
            <div class="flex justify-evenly">
              <a href="${curentValue.links.git}" class="hover:text-red-800"><i class="fab fa-github icon-2x"></i></a>
              <a href="${curentValue.links.linkedin}" class="hover:text-red-800"><i class="fab fa-linkedin icon-2x"></i></a>
              <a href="${curentValue.links.facebook}" class="hover:text-red-800"><i class="fab fa-facebook icon-2x"></i></a>
            </div>
            `
        );
    }, " ");
    userMainInfos.innerHTML = showModalBox;
}




const checkId = (id) => {
    userData.forEach(el => {
        if (id === el.id) {
            arr = [el];
        }
    });
}

function toogleBackdrop(event) {
    let userTargetId = parseInt(event.currentTarget.getAttribute("data-userId"));
    checkId(userTargetId);
    backdrop.classList.toggle("hidden");
    backdrop.classList.toggle("flex");
    renderModalBox();
    closebtn();

    addEventListener("click", closebtn);
}

const showModal = () => {
    backdrop.classList.toggle("hidden");
    backdrop.classList.toggle("flex");
}

window.addEventListener("load", getBtns);

window.onclick = event => {
    if (event.target === backdrop) {
        showModal();
    }
}
function getBtns() {
    const employeeBtn = document.getElementsByClassName("userId");
    for (let btn of employeeBtn) {
        btn.addEventListener('click', toogleBackdrop);
    }
}

function closebtn() {
    document.getElementById("close-modal-box-btn").addEventListener("click", showModal);
    document.getElementById("softSkilsBtn").addEventListener("click", showHardSkils);
    document.getElementById("hardSkilsBtn").addEventListener("click", showSoftSkils);
}

function showHardSkils() {
    let hardSkilsUser = document.getElementById("hardSkils")
    let softSkilsUser = document.getElementById("softSkils");

    hardSkilsUser.style.display = "none";
    softSkilsUser.style.display = "block";
}

function showSoftSkils() {
    let hardSkilsUser = document.getElementById("hardSkils")
    let softSkilsUser = document.getElementById("softSkils");

    hardSkilsUser.style.display = "block";
    softSkilsUser.style.display = "none";
}



//toggle the menu
document.getElementById('nav-toggle').onclick = function(){
  document.getElementById("nav-content").classList.toggle("hidden");
}

$(document).on("scroll", function(){

    if($(document).scrollTop() > 100){
        $("nav").addClass("shrink");
    }else{
        $("nav").removeClass("shrink");
    }

    //$(document).scrollTop() > 100 ? $("nav").addClass("shrink") : $("nav").removeClass("shrink");
});


