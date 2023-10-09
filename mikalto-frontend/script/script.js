const heroSectionForm = document.querySelector(".hero-form");
const roomImageSlider = document.getElementsByClassName("slider-box");
const sliderRightButton = document.querySelectorAll(".slider-right-button");
const sliderLeftButton = document.querySelectorAll(".slider-left-button");


async function getHeroData() {
    try {
        const response = await fetch(`http://localhost:6600/pageBanner`).then((response) => response.json());
        document.querySelector(".hero-section").style.background = `url(${response.data.heroLeftSection.heroBackground})`;
    } catch (error) {
        console.log(error);
    }
}
getHeroData();

async function getHomeStayData() {
    try {
        const response = await fetch(`http://localhost:6600/welcome`).then((response) => response.json());
        let i = 0;
        document.querySelectorAll(".welcome-right-images").forEach((element) => {
            element.src = response.data.welcomeRightSection.urls[i];
            i++;
        });
    } catch (error) {
        console.log(error);
    }
}
getHomeStayData();

async function getShowRoomData() {
    try {
        const response = await fetch(`http://localhost:6600/showRooms`).then((response) => response.json());
        let i = 0;
        document.querySelectorAll(".room-images").forEach((element) => {
            element.src = response.data.roomRightSection.urls[i];
            i++;
        });
        document.querySelector(".standard-room-price").innerHTML = ` ${response.data.roomLeftsection.standardRoom.price} `;
        document.querySelector(".standard-room-bed").innerHTML = `${response.data.roomLeftsection.standardRoom.bed}`;
        document.querySelector(".standard-room-capacity").innerHTML = `${response.data.roomLeftsection.standardRoom.capacity}`;
        document.querySelector(".standard-room-size").innerHTML = `${response.data.roomLeftsection.standardRoom.roomSize}`;
        document.querySelector(".standard-room-view").innerHTML = `${response.data.roomLeftsection.standardRoom.view}`;

        document.querySelector(".delux-room-price").innerHTML = ` ${response.data.roomLeftsection.deluxRoom.price} `;
        document.querySelector(".delux-room-bed").innerHTML = `${response.data.roomLeftsection.deluxRoom.bed}`;
        document.querySelector(".delux-room-capacity").innerHTML = `${response.data.roomLeftsection.deluxRoom.capacity}`;
        document.querySelector(".delux-room-size").innerHTML = `${response.data.roomLeftsection.deluxRoom.roomSize}`;
        document.querySelector(".delux-room-view").innerHTML = `${response.data.roomLeftsection.deluxRoom.view}`;

        document.querySelector(".premium-room-price").innerHTML = ` ${response.data.roomLeftsection.premiumRoom.price} `;
        document.querySelector(".premium-room-bed").innerHTML = `${response.data.roomLeftsection.premiumRoom.bed}`;
        document.querySelector(".premium-room-capacity").innerHTML = `${response.data.roomLeftsection.premiumRoom.capacity}`;
        document.querySelector(".premium-room-size").innerHTML = `${response.data.roomLeftsection.premiumRoom.roomSize}`;
        document.querySelector(".premium-room-view").innerHTML = `${response.data.roomLeftsection.premiumRoom.view}`;

    } catch (error) {
        console.log(error);
    }
}
getShowRoomData();

async function getActivitiesData() {
    try {
        const response = await fetch(`http://localhost:6600/activities`).then((response) => response.json());
        let i = 0;
        document.querySelectorAll(".activite-img").forEach((element) => {
            element.src = response.data[i];
            i++;
        });
    } catch (error) {
        console.log(error);
    }

}
getActivitiesData();

async function getExperienceData() {
    try {
        const response = await fetch(`http://localhost:6600/experience`).then((response) => response.json());
        document.querySelectorAll(".experience-img-1").forEach((element) => {
            element.src = response.data.experienceCards.image1;
        });
        document.querySelectorAll(".experience-img-2").forEach((element) => {
            element.src = response.data.experienceCards.image2;
        });
        document.querySelectorAll(".experience-img-3").forEach((element) => {
            element.src = response.data.experienceCards.image3;
        });
        document.querySelectorAll(".experience-img-4").forEach((element) => {
            element.src = response.data.experienceCards.image4;
        });
    } catch (error) {
        console.log(error);
    }
}
getExperienceData();

async function getHelloData() {
    try {
        const response = await fetch(`http://localhost:6600/hello`).then((response) => response.json());
        document.querySelector(".hello-section").style.background = `url(${response.data.BackgroundImage})`;
    } catch (error) {
        console.log(error);
    }
}
getHelloData();

async function getReviewData() {
    try {
        const response = await fetch('http://localhost:6600/review').then((response) => response.json());
        document.querySelector(".first-user-image").src = response.data.reviewCardDetails.firstCard.profileImage;
        document.querySelector(".first-user-name").innerHTML = response.data.reviewCardDetails.firstCard.userName;
        document.querySelector(".first-card-date").innerHTML = response.data.reviewCardDetails.firstCard.date;
        document.querySelector(".first-card-title").innerHTML = response.data.reviewCardDetails.firstCard.reviewHeading;
        document.querySelector(".first-card-detail").innerHTML = response.data.reviewCardDetails.firstCard.reviewData;

        document.querySelector(".second-user-image").src = response.data.reviewCardDetails.secondCard.profileImage;
        document.querySelector(".second-user-name").innerHTML = response.data.reviewCardDetails.secondCard.userName;
        document.querySelector(".second-card-date").innerHTML = response.data.reviewCardDetails.secondCard.date;
        document.querySelector(".second-card-title").innerHTML = response.data.reviewCardDetails.secondCard.reviewHeading;
        document.querySelector(".second-card-detail").innerHTML = response.data.reviewCardDetails.secondCard.reviewData;

        document.querySelector(".third-user-image").src = response.data.reviewCardDetails.thirdCard.profileImage;
        document.querySelector(".third-user-name").innerHTML = response.data.reviewCardDetails.thirdCard.userName;
        document.querySelector(".third-card-date").innerHTML = response.data.reviewCardDetails.thirdCard.date;
        document.querySelector(".third-card-title").innerHTML = response.data.reviewCardDetails.thirdCard.reviewHeading;
        document.querySelector(".third-card-detail").innerHTML = response.data.reviewCardDetails.thirdCard.reviewData;
    } catch (error) {
        console.log(error);
    }
}
getReviewData();

async function getWellnessData() {
    try {
        const response = await fetch(`http://localhost:6600/wellness`).then((response) => response.json());
        document.querySelector(".wellness-first-img").src = response.data.wellnessRightSection.image1;
        document.querySelector(".wellness-second-img").src = response.data.wellnessRightSection.image2;
        document.querySelector(".wellness-third-img").src = response.data.wellnessRightSection.image3;
    } catch (error) {
        console.log(error);
    }
}
getWellnessData();

/*  slider section  */

let flag = 0;

displayData(flag);

sliderRightButton.forEach(element => {
    element.addEventListener("click", () => {
        let n1 = 1;
        flag = flag + n1;
        displayData(flag);
    });
});

sliderLeftButton.forEach(element => {
    element.addEventListener("click", () => {
        let n1 = 1;
        flag = flag - n1;
        displayData(flag);
    });
});

function displayData(num) {

    for (let item of roomImageSlider) {
        item.style.display = "none";
    }
    
    if (num >= roomImageSlider.length) {
        flag = 0;
        num = 0;
    } else if (num < 0) {
        flag = roomImageSlider.length - 1;
        num = roomImageSlider.length - 1;
    }
    roomImageSlider[num].style.display = "block";
}

/* Form Data send to server */

heroSectionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(heroSectionForm);
    const data = Object.fromEntries(formData);
    fetch(`http://localhost:6600/formData`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: `id=${Date.now()}&checkInDate=${data.arrive}&checkOutDate=${data.depart
            }&noOfAdults=${data.adult}&noOfchildren=${data.children}`,
    }).then((response) => {
        console.log("Request complete! response:", response);
    }).then((response) => {
        heroSectionForm.arrive.value = "";
    });
});

/* Date disable */

let date = new Date();
let todayDate = date.getDate();
let month = date.getMonth() + 1;

if (todayDate < 10) {
    todayDate = '0' + todayDate;
} else if (month < 10) {
    month = '0' + month;
}
let year = date.getUTCFullYear();
let arriveMinDate = year + '-' + month + '-' + todayDate;
document.getElementById('arrive').setAttribute('min', arriveMinDate);
let tomorrowDate = todayDate + 1;
let departMinDate = year + '-' + month + '-' + tomorrowDate;
document.getElementById('depart').setAttribute('min', departMinDate);