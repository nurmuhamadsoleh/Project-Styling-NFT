import React from "react";

export default function Signup() {
// const accordionHandler = (e) => {
//   let acc = document.getElementsByClassName("accordion");
//       var i;

//       for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function () {
//           this.classList.toggle("active");
//           var panel = this.nextElementSibling;
//           if (panel.style.display === "block") {
//             panel.style.display = "none";
//           } else {
//             panel.style.display = "block";
//           }
//         });
//       }
// }

  return (
    <div className="signup">
      <h3>Plague <span>Social Creatures</span></h3>
      <div className="headline">
        <h1 className="title">FAQ</h1>
        <span className="right">...........................................................................</span>
      </div>
      <br />
      <div class="accordion border" id="accordionExample">
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <p className="fw-bold">Witch network do we use to launch PSC collections ?</p>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-danger">
              <strong>SOLANA</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <p className="fw-bold">Witch wallet can be used for minting ?</p>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-danger">
              <strong>We recommend you to use phantom wallet, but you can also use sollet or solfare wallet</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <p className=" fw-bold">How much total supply of PSC collection</p>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-danger">
              <strong>We have 3000 total supply 1000 for whitelist and 2000 for public sale </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
              <p className="fw-bold">When mint ?</p>
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-light">
              <strong>We haven't set an exact date yet, but we will launch the PSC collection in the middle of March or the end of March </strong><span className="text-danger fw-bold">1000 for whitelist and 2000 for public sale </span>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
              <p className="fw-bold">Do we have rarity system for PSC collection ?</p>
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-light">
              <strong>Yes,</strong><span className="text-danger fw-bold">we will update rarity system for PSC collections once they are all minted</span>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <p className="fw-bold">What secondary market will the PSC collections be released ?</p>
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-light">
              <strong>We have a target that Magiceden is our first goal and there are others</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
