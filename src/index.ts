import {
    array,
    fibo,
    LCM

}from './problem';



// 1번 문항

for(var i =0;i<3;i++){
    array[i] = array[i]**2;
}
array.sort();
console.log(array)

// 2번 문항

// 3번 문항

// 4번 문항

// 5번 문항


// 6번 문항
console.log(fibo(35))

// 7번 문항
console.log(LCM(15, 21))
console.log(LCM(33, 22))
console.log(LCM(9, 10))
/**
 * [결과가 아래와 같아야합니다.]
 * ==========================
 * [ 9, 4, 1 ]
 * (문제에 Output 양식이 적혀있습니다.)
 * 9227465
 * 105
 * 66
 * 90
 * [ '혼합잡곡밥(12곡잡곡)', '얼큰우동국☆', '감자조림☆(간장)', '돈가스☆', '깍두기', '과일샐러드☆' ]
 * 🐓
 * 🥚
 */