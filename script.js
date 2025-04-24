const wrapper = document.getElementById("slides");
const images = wrapper.querySelectorAll("img");
const total = images.length;

const firstClone = images[0].cloneNode(true);
wrapper.appendChild(firstClone);

let index = 0;

function slide() {
  index++;
  wrapper.style.transition = "transform 0.6s ease-in-out";
  wrapper.style.transform = `translateX(-${index * 100}vw)`;
  if (index === total) {
    setTimeout(() => {
      wrapper.style.transition = "none";
      wrapper.style.transform = `translateX(0vw)`;
      index = 0;
    }, 600);
  }
}

setInterval(slide, 3000);

function showSection(sectionId) {
  document.getElementById("calendarSection").style.display = "none";
  document.getElementById("aboutus").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("leaveFormSection").style.display = "none";
  document.getElementById("aboutus").style.display = "none";
  document.getElementById(sectionId).style.display = "block";
}

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}

const calendarEl = document.getElementById("calendar");
const monthYearEl = document.getElementById("monthYear");
const weekdaysEl = document.getElementById("weekdays");

const holidays = {
  "2025-01-01": {
    name: "New Year",
    image:
      "https://media.istockphoto.com/id/1175405816/vector/happy-new-year-2020-gold-star-gray.jpg?s=612x612&w=0&k=20&c=0NWrFcYU06icW_BNAS9UGZLJH0DMgXP7-35xUnY7QKM=", // Replace with actual image URL
  },
  "2025-01-14": {
    name: "Sankranti",
    image:
      "https://thumbs.dreamstime.com/b/vector-design-happy-makar-sankranti-religious-traditional-festival-india-celebration-background-135636659.jpg",
  },
  "2025-01-26": {
    name: "Republic Day",
    image:
      "https://cycle.in/cdn/shop/articles/Republic_Day_1_-500x500.webp?v=1708716129&width=480",
  },
  "2025-02-26": {
    name: "Shivratri",
    image:
      "https://img.freepik.com/free-vector/happy-maha-shivratri-indian-traditional-festival-celebration-cultural-card_1055-23270.jpg",
  },
  "2025-03-13": {
    name: "Holi Dahan",
    image:
      "https://media.istockphoto.com/id/1466896419/vector/vector-illustration-of-happy-holika-dahan-festival.jpg?s=612x612&w=0&k=20&c=qEKoup2uavSj6E1OEziYlXHnjeifm4fIsGT-tNi93EY=",
  },
  "2025-03-14": {
    name: "Holi",
    image:
      "https://desicart.co.uk/cdn/shop/articles/istockphoto-1128232513-612x612.jpg?v=1677679595",
  },

  "2025-03-31": {
    name: "Id",
    image:
      "https://img.freepik.com/free-vector/decorative-eid-moon-holy-festival-background_1017-37994.jpg",
  },
  "2025-04-10": {
    name: "Mahavir Jayanti",
    image:
      "https://images.astroyogi.com/astroyogi2017/english/images/astrology/banner/festival-mahavir-jayanti.webp",
  },
  "2025-04-18": {
    name: "Good Friday",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/053/841/non_2x/good-friday-background-with-crucifixion-concept-free-vector.jpg",
  },
  "2025-05-12": {
    name: "Budh Purnima",
    image:
      "https://c.ndtvimg.com/2021-05/6psibeso_buddha-purnima_625x300_26_May_21.jpg",
  },
  "2025-06-07": {
    name: "Bakarid",
    image:
      "https://www.jagranimages.com/images/newimg/08072022/08_07_2022-bakrid-2022_2_22867324.jpg",
  },
  "2025-07-06": {
    name: "Muharram",
    image:
      "https://png.pngtree.com/background/20210716/original/pngtree-happy-muharam-cartoon-background-picture-image_1369498.jpg",
  },
  "2025-08-15": {
    name: "Independence Day",
    image:
      "https://t3.ftcdn.net/jpg/08/55/99/18/360_F_855991899_FLUPxeeq1C3UwNIv7ofH0exOn9OyNN8J.jpg",
  },
  "2025-09-05": {
    name: "Malid-Ul-Navi",
    image:
      "https://www.jagranimages.com/images/newimg/16092024/16_09_2024-eid_milad-un-nabi_2024_wishes_23797398_161052569.jpg",
  },
  "2025-10-02": {
    name: "gandhi jayanti",
    image:
      "https://greenwoodhigh.edu.in/wp-content/uploads/2024/09/Gandhi-Jayanti-2024-1024x574.jpg.webp",
  },
  "2025-10-02": {
    name: "Dussehra",
    image:
      "https://www.livehindustan.com/lh-img/smart/img/2024/10/12/1200x900/dushhara_41_1728697971420_1728697986005.jpg",
  },
  "2025-10-20": {
    name: "Dipawali",
    image:
      "https://wd-image.webdunia.com/image-conversion/process-aws.php?url=https://nonprod-media.webdunia.com/public_html/_media/hi/img/article/2024-10/21/full/1729501555-7147.jpg&w=&h=&outtype=webp",
  },
  "2025-10-22": {
    name: "Goverdhan Puja",
    image:
      "https://www.financialexpress.com/wp-content/uploads/2023/11/goverdhan-puja.jpg",
  },
  "2025-10-23": {
    name: "Bhai Dhuj",
    image:
      "https://staticimg.amarujala.com/assets/images/2024/11/02/bhai-dooj-2024-wishes-in-hindi_d46cc64ce8197c732417d299b0a116eb.jpeg?q=80&w=480&dpr=2.6",
  },
  "2025-10-27": {
    name: "Chhath Puja",
    image:
      "https://c.ndtvimg.com/2020-11/o5hkm59g_happy-chhath-puja-2020_625x300_20_November_20.jpg",
  },
  "2025-10-28": {
    name: "Chhath Puja",
    image:
      "https://c.ndtvimg.com/2020-11/o5hkm59g_happy-chhath-puja-2020_625x300_20_November_20.jpg",
  },
  "2025-11-05": {
    name: "Gurunanak Jayanti",
    image:
      "https://media.istockphoto.com/id/1426643999/vector/vector-illustration-of-guru-nanak-dev-ji-for-happy-guru-nanak-jayantivector-illustration-of.jpg?s=612x612&w=0&k=20&c=9YNI51No9Eo4SywTYLjL54lpPmTCBuNBfxZIEAGXSr4=",
  },
  "2025-12-25": {
    name: "Christmas Day",
    image:
      "https://img.freepik.com/free-vector/gradient-christmas-tinsel-background_52683-76117.jpg",
  },
};

let appliedLeaves = [];

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
weekdays.forEach((day) => {
  const div = document.createElement("div");
  div.textContent = day;
  weekdaysEl.appendChild(div);
});

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isToday(date) {
  const now = new Date();
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}

function createCalendar(year, month) {
  calendarEl.innerHTML = "";
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = firstDay.getDay();
  const monthName = firstDay.toLocaleString("default", { month: "long" });
  monthYearEl.textContent = `${monthName} ${year}`;
  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement("div");
    calendarEl.appendChild(empty);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const dateStr = formatDate(date);

    const dayEl = document.createElement("div");
    dayEl.classList.add("day");
    dayEl.textContent = i;

    if (holidays[dateStr]) {
      dayEl.classList.add("holiday");

      const holidayData = holidays[dateStr];

      if (holidayData.image) {
        dayEl.style.backgroundImage = `url(${holidayData.image})`;
        dayEl.style.backgroundSize = "cover";
        dayEl.style.backgroundPosition = "center";
        dayEl.style.color = "white";
        dayEl.innerHTML = `
          <div class="holiday-overlay">${holidayData.name}</div>
        `;
      } else {
        const holidayText = document.createElement("div");
        holidayText.classList.add("holiday-name");
        holidayText.textContent = holidayData.name || holidays[dateStr];
        dayEl.appendChild(holidayText);
      }
    }

    if (appliedLeaves.includes(dateStr)) {
      dayEl.classList.add("leave");
      dayEl.title = "Leave Applied";
    }

    if (isToday(date)) {
      dayEl.classList.add("today");
      dayEl.title = "Today";
    }

    calendarEl.appendChild(dayEl);
  }
}

createCalendar(currentYear, currentMonth);

document.getElementById("prevMonth").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  createCalendar(currentYear, currentMonth);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  createCalendar(currentYear, currentMonth);
});

// --- Leave Form Submission ---
function emailsend() {
  console.log("emailsend() function called");
  var name = document.getElementById("name").value;
  var leaveDate = document.getElementById("leaveDate").value;
  var leaveType = document.getElementById("leaveType").value;
  var reason = document.getElementById("reason").value;

  var messageBody =
    "Name: " +
    name +
    "<br />Leave Date: " +
    leaveDate +
    "<br />Leave Type: " +
    leaveType +
    "<br />Reason: " +
    reason;

  Email.send({
    Host: "s1.maildns.net",
    Username: "anandyadav98013@gmail.com",
    Password: "25E83FEBC25A9FBB84D4BE934DB87623000F",
    To: "anandkumarkharahana@gmail.com",
    From: "anandyadav98013@gmail.com",  
    Subject: "Leave Application",
    Body: messageBody,
  }).then((message) => {
    console.log("SMTP Response Received:", message); 
    if (message === "OK") {
      swal("Successful", "Your leave application has been sent!", "success");
    } else {
      swal("Error", "Failed to send the application. Try again!", "error");
      console.error("SMTP Response:", message); 
    }
  });
}
