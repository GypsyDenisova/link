 const screenWidth = window.innerWidth;
 var office = document.getElementById('office').children;
 var info = document.getElementById('info').children;

 var pricePageLeft = document.getElementById('pricePageLeft');
 var pricePageRight = document.getElementById('pricePageRight');

 var officeNum = 0;

 CabinetDisplayServices(0, office, screenWidth);
 PositionActive(office, 'office_active', 0);

 for (let i = 0; i < office.length; i++) {
     office[i].addEventListener('click', () => {
         officeNum = i;
         CabinetDisplayServices(officeNum, office, screenWidth);
         PositionActive(office, 'office_active', officeNum);

     });
 }



 var infoWidth = []

 for (let i = 1; i < info.length; i += 2) {
     infoWidth[Math.floor(i / 2)] = window.pageYOffset + info[i].getBoundingClientRect().top;
 }




 window.addEventListener("scroll", () => {
     let topScroll = document.documentElement.scrollTop;
     for (let i = 0; i <= infoWidth.length; i++) {
         if (topScroll >= infoWidth[i] - 400) {
             officeNum = i;
         }
         CabinetDisplayServices(officeNum, office, screenWidth);
         PositionActive(office, 'office_active', officeNum);


     }
 });


 pricePageLeft.addEventListener('click', (e) => {
     if (officeNum > 0) {
         officeNum--;
         CabinetDisplayServices(officeNum, office, screenWidth);
         PositionActive(office, 'office_active', officeNum);
         window.scrollTo(0, infoWidth[officeNum] - 200);
     }
 });

 pricePageRight.addEventListener('click', (e) => {
     if (officeNum < 6) {
         officeNum++;
         CabinetDisplayServices(officeNum, office, screenWidth);
         PositionActive(office, 'office_active', officeNum);
         window.scrollTo(0, infoWidth[officeNum] -200);
     }
 });
