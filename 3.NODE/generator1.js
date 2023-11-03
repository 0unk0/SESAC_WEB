const surnameList = ['김', '이', '박','최', '오'];
const firstnameList = ['정미', '윤경', '재은','선진', '미애','영희','민지','철수', '영웅', '대한', '민국', '만세', '은우'];

const gender = ['Male', 'Female'];

const cities = ['서울','대전','대구','부산'];
const addr1_su = ['강남구', '강서구', '송파구'];
const addr1_dj = ['동구', '서구', '중구'];
const addr1_dg = ['달서구', '남구', '수성구'];
const addr1_bs = ['북구', '금정구', '해운대구'];

function generateName(){
    const surname = surnameList[Math.floor(Math.random() * surnameList.length)];
    const firstname = firstnameList[Math.floor(Math.random() * firstnameList.length)];
    return `${surname}${firstname}`;
}



function generateBirthdate(){
    const year = Math.floor(Math.random() * 2000);
    const month = Math.floor((Math.random() * 12)+1); // 1월 부터
    const day = Math.floor((Math.random() * 30) + 1);

    return `${year}-${month}-${day}`;
}


function generateGender(){
    return gender[Math.floor(Math.random() * gender.length)];
    // return Math.random() < 0.5 ? "Male" : "Female";
}

function generateAddress(){
    const city_num = Math.floor(Math.random() * cities.length);
    switch(city_num){
        case 0:
            addr_random = addr1_su[Math.floor(Math.random()*addr1_su.length)];
            break;
        case 1:
            addr_random = addr1_dj[Math.floor(Math.random()*addr1_dj.length)];
            break;
        case 2:
            addr_random = addr1_dg[Math.floor(Math.random()*addr1_dg.length)];
            break;
        case 3:
            addr_random = addr1_bs[Math.floor(Math.random()*addr1_bs.length)];
            break;
    }
    
    
    return `${cities[city_num]} ${addr_random}`;
}

console.log(generateName());
console.log(generateBirthdate());
console.log(generateGender());
console.log(generateAddress());