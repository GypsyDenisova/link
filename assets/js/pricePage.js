document.addEventListener("DOMContentLoaded", function () {
    
    const screenWidth = window.innerWidth;

    var office = document.getElementById('office').children;
    var info = document.getElementById('info').children;

    var pricePageRight = document.getElementById('pricePageRight');
    var pricePageLeft = document.getElementById('pricePageLeft');
    var officeNum = 0;
    
    choosingСabinet(0);
    
    function choosingСabinet(officeNum){
        None(info);
        info[officeNum].style.display = "block";
        PositionActive(office, 'office_active', officeNum);
        CabinetDisplayServices(officeNum, office, screenWidth);
    }

    for (let i = 0; i < office.length; i++) {
        office[i].addEventListener('click', () => {
            officeNum = i;
            choosingСabinet(officeNum);
            
        });
    }
    

     pricePageLeft.addEventListener('click', (e) => {
        if (officeNum > 0) {
            officeNum--;
            choosingСabinet(officeNum);
        }
    });

    pricePageRight.addEventListener('click', (e) => {
        if (officeNum < 6) {
            officeNum++;
            choosingСabinet(officeNum);
        }
    });

});
